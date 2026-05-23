export default function SectionHeader({ eyebrow, title, text, align = 'left', eyebrowClassName = '' }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'scroll-fade mx-auto max-w-3xl text-center' : 'scroll-fade max-w-3xl'}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1E5AA8] sm:tracking-[0.3em] ${eyebrowClassName}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-[1.04] tracking-normal text-[#0B2A4A] sm:text-4xl md:text-[56px]">
        {title}
      </h2>
      {text && <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg md:leading-9">{text}</p>}
    </div>
  );
}
