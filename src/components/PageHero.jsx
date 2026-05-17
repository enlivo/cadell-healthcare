export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-[#0B2A4A] pt-36 text-white">
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="container-pad relative z-10 pb-20 pt-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.3em]">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 md:text-lg">{text}</p>
        </div>
      </div>
    </section>
  );
}
