export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1E5AA8] sm:tracking-[0.28em]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold leading-tight text-[#0B2A4A] sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>}
    </div>
  );
}
