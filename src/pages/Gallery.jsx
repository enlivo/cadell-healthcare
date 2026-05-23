export default function Gallery() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden bg-[#0B2A4A] pt-36 text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(-45deg, #062b52, #0b3f78, #08315d, #0d4d8b)',
            backgroundSize: '400% 400%',
            animation: 'galleryGradientMove 12s ease infinite',
          }}
        />

        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="container-pad relative z-10 pb-20 pt-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.3em]">
              Gallery
            </p>

            <h1
              className="text-4xl font-bold leading-tight md:text-6xl"
              style={{
                textShadow:
                  '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              Corporate Gallery
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              A glimpse into Cadell Healthcare’s team culture, healthcare
              engagements, and company milestones.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes galleryGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 px-8 py-20 text-center shadow-xl shadow-blue-950/5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-700">
              Gallery
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Gallery Updates Coming Soon
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Visual highlights, healthcare initiatives, and corporate moments
              will be updated soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}