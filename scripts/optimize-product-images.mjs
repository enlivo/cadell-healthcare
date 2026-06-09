import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { mkdir, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'public', 'images', 'products');
const outputRoot = path.join(sourceRoot, 'optimized');
const categories = ['cardiac', 'diabetic', 'general-medicine', 'gynaecology', 'orthopedic'];
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const targetAspect = 4 / 3;

const readU32 = (buffer, offset) => buffer.readUInt32BE(offset);

const makeCrcTable = () => {
  const table = [];
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
};

const crcTable = makeCrcTable();

const decodePng = (filePath) => {
  const buffer = execFileSync('cat', [filePath]);
  let cursor = 8;
  let width = 0;
  let height = 0;
  let colorType = 0;
  const idat = [];

  while (cursor < buffer.length) {
    const length = readU32(buffer, cursor);
    const type = buffer.toString('ascii', cursor + 4, cursor + 8);
    const data = buffer.subarray(cursor + 8, cursor + 8 + length);

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      colorType = data[9];
    } else if (type === 'IDAT') {
      idat.push(data);
    }

    cursor += 12 + length;
  }

  const channels = colorType === 6 ? 4 : 3;
  if (![2, 6].includes(colorType)) {
    throw new Error(`Unsupported PNG color type ${colorType}`);
  }

  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const pixels = Buffer.alloc(width * height * channels);
  let rawCursor = 0;
  let pixelCursor = 0;
  let previous = Buffer.alloc(stride);

  for (let y = 0; y < height; y += 1) {
    const filter = raw[rawCursor];
    rawCursor += 1;
    const row = Buffer.alloc(stride);

    for (let x = 0; x < stride; x += 1) {
      const value = raw[rawCursor];
      rawCursor += 1;
      const left = x >= channels ? row[x - channels] : 0;
      const up = previous[x] ?? 0;
      const upperLeft = x >= channels ? previous[x - channels] : 0;
      let reconstructed = value;

      if (filter === 1) {
        reconstructed = (value + left) & 255;
      } else if (filter === 2) {
        reconstructed = (value + up) & 255;
      } else if (filter === 3) {
        reconstructed = (value + Math.floor((left + up) / 2)) & 255;
      } else if (filter === 4) {
        const estimate = left + up - upperLeft;
        const pa = Math.abs(estimate - left);
        const pb = Math.abs(estimate - up);
        const pc = Math.abs(estimate - upperLeft);
        reconstructed = (value + (pa <= pb && pa <= pc ? left : pb <= pc ? up : upperLeft)) & 255;
      } else if (filter !== 0) {
        throw new Error(`Unsupported PNG filter ${filter}`);
      }

      row[x] = reconstructed;
    }

    row.copy(pixels, pixelCursor);
    pixelCursor += stride;
    previous = row;
  }

  return { width, height, channels, pixels };
};

const grayAt = (image, x, y) => {
  const index = (y * image.width + x) * image.channels;
  return image.pixels[index] * 0.299 + image.pixels[index + 1] * 0.587 + image.pixels[index + 2] * 0.114;
};

const percentile = (values, p) => {
  if (!values.length) return 0;
  values.sort((a, b) => a - b);
  return values[Math.floor((values.length - 1) * p)];
};

const boundedCrop = (box, width, height) => {
  const centerX = (box.minX + box.maxX) / 2;
  const centerY = (box.minY + box.maxY) / 2;
  let cropWidth = Math.max(box.maxX - box.minX, 1);
  let cropHeight = Math.max(box.maxY - box.minY, 1);

  cropWidth *= 1.18;
  cropHeight *= 1.22;

  if (cropWidth / cropHeight < targetAspect) {
    cropWidth = cropHeight * targetAspect;
  } else {
    cropHeight = cropWidth / targetAspect;
  }

  cropWidth = Math.min(cropWidth, width);
  cropHeight = Math.min(cropHeight, height);

  let left = centerX - cropWidth / 2;
  let top = centerY - cropHeight / 2;

  left = Math.max(0, Math.min(left, width - cropWidth));
  top = Math.max(0, Math.min(top, height - cropHeight));

  return {
    left: Math.round(left),
    top: Math.round(top),
    width: Math.round(cropWidth),
    height: Math.round(cropHeight),
  };
};

const detectCrop = (samplePath, originalWidth, originalHeight) => {
  const image = decodePng(samplePath);
  const xs = [];
  const ys = [];

  for (let y = 8; y < image.height - 8; y += 2) {
    for (let x = 8; x < image.width - 8; x += 2) {
      const gx = Math.abs(grayAt(image, x + 2, y) - grayAt(image, x - 2, y));
      const gy = Math.abs(grayAt(image, x, y + 2) - grayAt(image, x, y - 2));
      const edge = gx + gy;

      if (edge > 68) {
        xs.push(x);
        ys.push(y);
      }
    }
  }

  if (xs.length < 200) {
    return { left: 0, top: 0, width: originalWidth, height: originalHeight };
  }

  const sampleBox = {
    minX: percentile(xs, 0.02),
    maxX: percentile(xs, 0.98),
    minY: percentile(ys, 0.02),
    maxY: percentile(ys, 0.98),
  };
  const scaleX = originalWidth / image.width;
  const scaleY = originalHeight / image.height;

  return boundedCrop(
    {
      minX: sampleBox.minX * scaleX,
      maxX: sampleBox.maxX * scaleX,
      minY: sampleBox.minY * scaleY,
      maxY: sampleBox.maxY * scaleY,
    },
    originalWidth,
    originalHeight,
  );
};

const getImageSize = (filePath) => {
  const output = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], { encoding: 'utf8' });
  return {
    width: Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]),
    height: Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]),
  };
};

const tempDir = mkdtempSync(path.join(os.tmpdir(), 'cadell-products-'));
let optimizedCount = 0;

try {
  for (const category of categories) {
    const sourceDir = path.join(sourceRoot, category);
    const outputDir = path.join(outputRoot, category);
    await mkdir(outputDir, { recursive: true });

    const files = (await readdir(sourceDir)).filter((file) => imageExtensions.has(path.extname(file).toLowerCase()));

    for (const file of files) {
      const source = path.join(sourceDir, file);
      const output = path.join(outputDir, file);
      const sample = path.join(tempDir, `${category}-${file}.png`);
      const { width, height } = getImageSize(source);

      execFileSync('sips', ['-s', 'format', 'png', '-Z', '900', source, '--out', sample], { stdio: 'ignore' });
      const crop = detectCrop(sample, width, height);
      const offsetY = crop.height >= height - 8 ? 0 : Math.round(crop.top + crop.height / 2 - height / 2);
      const offsetX = crop.width >= width - 8 ? 0 : Math.round(crop.left + crop.width / 2 - width / 2);

      execFileSync(
        'sips',
        [
          '-c',
          String(crop.height),
          String(crop.width),
          '--cropOffset',
          String(offsetY),
          String(offsetX),
          '-Z',
          '1600',
          source,
          '--out',
          output,
        ],
        { stdio: 'ignore' },
      );

      if (!existsSync(output)) {
        throw new Error(`Failed to create ${output}`);
      }

      optimizedCount += 1;
    }
  }
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

console.log(`Optimized ${optimizedCount} product images into ${path.relative(root, outputRoot)}`);
