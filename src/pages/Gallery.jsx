const galleryItems = [
  {
    src: '/company-events/team-1.jpg',
    alt: 'Cadell Healthcare team interaction',
    label: 'Team Interaction',
  },
  {
    src: '/company-events/team-2.jpg',
    alt: 'Cadell Healthcare corporate engagement',
    label: 'Corporate Engagement',
  },
];

export default function Gallery() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden bg-[#0B2A4A] pt-36 text-white">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #062b52, #0b3f78, #08315d, #0d4d8b)',
            backgroundSize: '400% 400%',
            animation: 'galleryGradientMove 12s ease infinite',
          }}
        />
        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="gallery-particle absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="gallery-particle absolute left-[10%] top-[60%] h-4 w-4 rounded-full bg-white/20" />
        <div className="gallery-particle absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full bg-white/20" />

        <div className="container-pad relative z-10 pb-20 pt-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.3em]">
              Gallery
            </p>
            <h1
              className="text-4xl font-bold leading-tight md:text-6xl"
              style={{
                textShadow: '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              Corporate Gallery
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              A glimpse into Cadell Healthcare’s team culture, healthcare engagements, and company milestones.
            </p>
          </div>
        </div>

        <style>{`
          .gallery-particle {
            animation: galleryFloatParticle 8s infinite ease-in-out;
            box-shadow: 0 0 24px rgba(255, 255, 255, 0.2);
          }

          .gallery-particle:nth-of-type(7) {
            animation-delay: 1.4s;
          }

          .gallery-particle:nth-of-type(8) {
            animation-delay: 2.7s;
          }

          @keyframes galleryGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes galleryFloatParticle {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-20px);
              opacity: 1;
            }
          }
        `}</style>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.src}
                className="group relative min-h-[280px] overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-950/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[340px]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                    Cadell Healthcare
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {item.label}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
