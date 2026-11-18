import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BadgeCheck, FlaskConical, Layers, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCatalog } from '../data/productCatalog.generated.js';

const totalBrands = Object.values(productCatalog).reduce((sum, category) => sum + category.products.length, 0);
const totalCategories = Object.keys(productCatalog).length;

const line1 = ['Advancing', 'Healthcare.'];
const line2 = ['Empowering', 'Lives.'];

const heroCss = `
@keyframes ch-word-in {
  from { opacity: 0; transform: translateY(28px); filter: blur(12px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes ch-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes ch-float {
  0%, 100% { transform: translateY(0) rotate(var(--r)); }
  50% { transform: translateY(-22px) rotate(calc(var(--r) + 5deg)); }
}
@keyframes ch-drift {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(4%, -5%, 0) scale(1.12); }
}
@keyframes ch-shine {
  0% { transform: translateX(-160%) skewX(-18deg); }
  60%, 100% { transform: translateX(260%) skewX(-18deg); }
}
@keyframes ch-scroll {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(260%); }
}
.ch-word { display: inline-block; opacity: 0; animation: ch-word-in 900ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards; }
.ch-rise { opacity: 0; animation: ch-fade-up 800ms ease-out forwards; }
.ch-capsule-float { animation: ch-float 9s ease-in-out infinite; }
.ch-blob { animation: ch-drift 16s ease-in-out infinite; }
.ch-btn-shine::after {
  content: ''; position: absolute; inset: 0; width: 40%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
  animation: ch-shine 4.5s ease-in-out 2s infinite;
}
.ch-scroll-bar::after {
  content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 40%;
  background: #22d3ee; animation: ch-scroll 2.2s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .ch-word, .ch-rise { animation: none; opacity: 1; }
  .ch-capsule-float, .ch-blob, .ch-btn-shine::after, .ch-scroll-bar::after { animation: none; }
}
`;

function Capsule({ className, style, hue }) {
  const palettes = {
    blue: ['#dbeafe', '#2f7fd8', '#123e73'],
    cyan: ['#cffafe', '#06b6d4', '#0e7490'],
    gold: ['#f6e7b4', '#d7b65d', '#9a7a2c'],
  };
  const [light, mid, dark] = palettes[hue];
  return (
    <div className={className} style={style}>
      <div className="ch-capsule-float h-full w-full" style={{ '--r': style['--r'] }}>
        <div
          className="relative h-full w-full overflow-hidden rounded-full"
          style={{
            boxShadow: `0 40px 80px -20px ${mid}66, inset 0 0 0 1px rgba(255,255,255,0.35)`,
            background: `linear-gradient(180deg, rgba(255,255,255,0.92) 0 50%, ${mid} 50% 100%)`,
          }}
        >
          <div
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{ background: `linear-gradient(160deg, ${mid}, ${dark})` }}
          />
          <div
            className="absolute inset-x-0 top-0 h-1/2"
            style={{ background: `linear-gradient(160deg, #ffffff, ${light})` }}
          />
          <div className="absolute left-[14%] top-[6%] h-[88%] w-[16%] rounded-full bg-white/55 blur-[3px]" />
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/10" />
        </div>
      </div>
    </div>
  );
}

function GlassCard({ icon: Icon, value, label, className, depth }) {
  return (
    <div className={className} data-depth={depth}>
      <div className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/[0.12] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block text-lg font-bold text-white">{value}</span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">{label}</span>
        </span>
      </div>
    </div>
  );
}

export default function HeroCinematic() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoOk, setVideoOk] = useState(true);

  // Pointer parallax: moves every [data-depth] element without re-rendering React.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    const onMove = (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        section.style.setProperty('--px', x.toFixed(3));
        section.style.setProperty('--py', y.toFixed(3));
      });
    };
    section.addEventListener('pointermove', onMove);
    return () => {
      section.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Molecular network canvas.
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return undefined;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let nodes = [];
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = section.clientWidth;
      height = section.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 768 ? 34 : 70;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const link = width < 768 ? 95 : 135;
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        if (!reduced) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
          const dx = pointer.x - a.x;
          const dy = pointer.y - a.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160 && dist > 0) {
            a.x -= (dx / dist) * 0.5;
            a.y -= (dy / dist) * 0.5;
          }
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(186, 230, 253, 0.75)';
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) {
            ctx.strokeStyle = `rgba(125, 211, 252, ${(1 - d / link) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const parallax = (strength) => ({
    transform: `translate3d(calc(var(--px, 0) * ${strength}px), calc(var(--py, 0) * ${strength}px), 0)`,
    transition: 'transform 300ms ease-out',
  });

  const renderWords = (words, offset, extra = '') =>
    words.map((word, i) => {
      const delay = 150 + (offset + i) * 120;
      return (
        <span key={word} className={`ch-word mr-[0.28em] ${extra}`} style={{ animationDelay: `${delay}ms` }}>
          {word}
        </span>
      );
    });

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#061326] pt-[88px] text-white md:pt-24"
      aria-labelledby="hero-heading"
    >
      <style>{heroCss}</style>

      {/* Layer 0: optional looping video. Drop a file at public/videos/hero.mp4 to enable it. */}
      {videoOk && (
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => setVideoOk(false)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" onError={() => setVideoOk(false)} />
        </video>
      )}

      {/* Layer 1: navy fade over the video, or animated aurora when there is no video */}
      {videoOk ? (
        <>
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(6,19,38,0.94)_0%,rgba(6,19,38,0.72)_42%,rgba(6,19,38,0.2)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-t from-[#061326] to-transparent" />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_10%,#123e73_0%,#061326_58%)]" />
          <div aria-hidden="true" className="ch-blob absolute -left-[10%] top-[10%] -z-20 h-[46rem] w-[46rem] rounded-full bg-blue-500/25 blur-[130px]" />
          <div aria-hidden="true" className="ch-blob absolute -right-[8%] top-[22%] -z-20 h-[40rem] w-[40rem] rounded-full bg-cyan-400/20 blur-[130px]" style={{ animationDelay: '-6s' }} />
          <div aria-hidden="true" className="ch-blob absolute bottom-[-18%] left-[34%] -z-20 h-[30rem] w-[30rem] rounded-full bg-[#d7b65d]/15 blur-[120px]" style={{ animationDelay: '-11s' }} />
        </>
      )}

      {/* Layer 2: live molecular network */}
      <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 -z-10 ${videoOk ? 'opacity-30' : ''}`} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,19,38,0.75)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 items-center px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
          <div>
            <div className="ch-rise mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-sky-200 backdrop-blur-md sm:text-xs sm:tracking-[0.22em]" style={{ animationDelay: '0ms' }}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" aria-hidden="true" />
              <span className="min-w-0">Pharmaceutical &amp; Healthcare Solutions</span>
            </div>

            <h1 id="hero-heading" className="text-[42px] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[72px]">
              <span className="block">{renderWords(line1, 0)}</span>
              <span className="block">
                {renderWords(line2, 2, 'bg-gradient-to-r from-sky-300 via-white to-[#d7b65d] bg-clip-text text-transparent')}
              </span>
            </h1>

            <p className="ch-rise mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg" style={{ animationDelay: '900ms' }}>
              Scientific integrity meets marketing excellence. Premium therapeutic formulations from WHO-GMP certified facilities, built for doctors, pharmacists and the patients they serve.
            </p>

            <div className="ch-rise mt-9 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '1100ms' }}>
              <Link
                to="/products"
                className="ch-btn-shine relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-[#061326]! shadow-[0_18px_50px_rgba(34,211,238,0.3)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
              >
                Explore Our Brand Portfolio
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white! backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:w-auto"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Partner With Us
              </Link>
            </div>

            <div className="ch-rise mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden" style={{ animationDelay: '1300ms' }}>
              <GlassCard icon={BadgeCheck} value="WHO-GMP" label="Certified facilities" />
              <GlassCard icon={FlaskConical} value={`${totalBrands} brands`} label="In our portfolio" />
              <GlassCard icon={Layers} value={`${totalCategories} areas`} label="Therapeutic care" />
            </div>
          </div>

          {/* Right: glass cards (desktop), plus CSS capsules only when there is no video */}
          <div className="relative hidden h-[560px] lg:block" aria-hidden="true">
            {!videoOk && (
              <>
                <div className="absolute inset-0" style={parallax(-14)}>
                  <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b65d]/30" />
                </div>
                <div className="absolute left-[18%] top-[16%]" style={parallax(36)}>
                  <Capsule hue="cyan" className="h-[190px] w-[78px]" style={{ '--r': '-24deg' }} />
                </div>
                <div className="absolute left-[40%] top-[26%]" style={parallax(-52)}>
                  <Capsule hue="blue" className="h-[290px] w-[118px]" style={{ '--r': '18deg' }} />
                </div>
                <div className="absolute right-[6%] top-[46%]" style={parallax(28)}>
                  <Capsule hue="gold" className="h-[160px] w-[66px]" style={{ '--r': '38deg' }} />
                </div>
              </>
            )}

            <div className="absolute left-0 top-[6%]" style={parallax(-24)}>
              <GlassCard icon={BadgeCheck} value="WHO-GMP" label="Certified facilities" />
            </div>
            <div className="absolute right-0 top-[24%]" style={parallax(20)}>
              <GlassCard icon={FlaskConical} value={`${totalBrands} brands`} label="In our portfolio" />
            </div>
            <div className="absolute bottom-[4%] left-[8%]" style={parallax(-30)}>
              <GlassCard icon={Layers} value={`${totalCategories} areas`} label="Therapeutic care" />
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d7b65d]/60 to-transparent" />
      <div className="relative z-10 hidden items-center justify-center pb-6 md:flex" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Scroll
          <span className="ch-scroll-bar relative block h-10 w-px overflow-hidden bg-white/20" />
        </div>
      </div>
    </section>
  );
}
