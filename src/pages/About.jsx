import { BadgeCheck, HeartPulse, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: BadgeCheck,
    title: 'WHO-GMP Standards',
    text: 'Trusted formulations manufactured in WHO-GMP certified facilities with global quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Practices',
    text: 'Responsible business principles guide our work, partnerships, and healthcare commitments.',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Centric Approach',
    text: 'A commitment to improving patient lives through affordable and innovative medicines.',
  },
];

const principles = [
  {
    eyebrow: 'Our Vision',
    mark: '01',
    title: 'Redefining Healthcare Accessibility',
    text: 'To redefine healthcare accessibility through affordable medicines, strong partnerships, and a commitment to patient well-being.',
  },
  {
    eyebrow: 'Our Mission',
    mark: '02',
    title: 'Building A Healthier Future',
    text: 'To build a healthier future by delivering quality medicines through ethical practices, continuous innovation, and customer-focused service.',
  },
];

const principleImages = {
  'Our Vision': '/vision-care.jpg',
  'Our Mission': '/mission-lab.jpg',
};

const principleImageClasses = {
  'Our Vision': 'object-center group-hover:scale-105',
  'Our Mission': 'object-center group-hover:scale-[1.03]',
};

export default function About() {
  return (
    <main className="page-shell">
      <section className="relative min-h-[640px] overflow-hidden bg-[#0B2A4A] py-20 text-white md:min-h-[760px] md:py-28">
        <img
          src="/child-joy.jpg"
          alt="Joyful child representing health and hope"
          className="absolute inset-y-0 right-0 z-0 h-full w-full object-cover object-[68%_35%] md:w-[62%]"
        />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(11,37,69,0.96)_0%,rgba(11,37,69,0.92)_38%,rgba(11,37,69,0.58)_58%,rgba(11,37,69,0.12)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_24%,rgba(77,217,172,0.18),transparent_28%),radial-gradient(circle_at_78%_30%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_86%_74%,rgba(30,90,168,0.22),transparent_38%)]" />
        <div className="absolute inset-y-0 left-[48%] z-[1] hidden w-56 bg-gradient-to-r from-[#0B2A4A] via-[#0B2A4A]/76 to-transparent blur-sm md:block" />
        <div className="absolute inset-0 z-[1] opacity-[0.10] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.9)_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
        <div className="absolute left-[-8rem] top-24 z-[1] h-96 w-96 rounded-full border border-cyan-200/14" />
        <div className="absolute left-24 top-40 z-[1] h-48 w-48 rounded-full border border-white/10" />
        <div className="absolute right-[18%] top-24 z-[1] h-80 w-80 rounded-full bg-cyan-300/18 blur-3xl" />
        <div className="absolute bottom-10 right-[10%] z-[1] h-96 w-96 rounded-full bg-blue-500/18 blur-3xl" />
        <span className="particle absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <span className="particle absolute left-[10%] top-[60%] h-4 w-4 rounded-full bg-white/20" />
        <span className="particle absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full bg-white/20" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-b from-transparent to-[#071d3a]" />

        <div className="about-hero-content container-pad relative z-[2]">
          <div className="max-w-4xl scroll-fade">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
              About Cadell
            </p>
            <h1
              className="about-hero-title text-5xl font-bold leading-tight md:text-7xl"
              style={{
                textShadow: '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              Building Healthier Tomorrows
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-semibold leading-9 text-blue-50 md:text-2xl md:leading-10">
              Cadell Healthcare is committed to creating affordable, innovative, and trusted pharmaceutical solutions that improve lives.
            </p>
            <a href="#products" className="about-hero-cta">
              Explore Our Products →
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071d3a] py-18 text-white md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(59,130,246,0.16),transparent_34%),linear-gradient(135deg,rgba(7,29,58,1),rgba(2,12,27,0.92))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-400/18 blur-3xl" />
        <div className="container-pad relative z-10">
          <div className="divide-y divide-white/10">
            {principles.map((principle, index) => {
              const text = (
                <article className="scroll-fade flex items-center">
                  <div className="max-w-2xl">
                    <div className="mb-6 h-px w-20 bg-gradient-to-r from-cyan-200/70 to-transparent" />
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                      {principle.eyebrow}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                      {principle.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-blue-50/78 md:text-lg">
                      {principle.text}
                    </p>
                  </div>
                </article>
              );

              const image = (
                <div className="scroll-fade group relative h-[260px] overflow-hidden rounded-2xl md:h-[320px]">
                  <img
                    src={principleImages[principle.eyebrow]}
                    alt={principle.eyebrow}
                    className={`h-full w-full object-cover opacity-95 transition duration-700 ease-out ${principleImageClasses[principle.eyebrow]}`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#071d3a]/22 via-transparent to-[#061326]/28" />
                </div>
              );

              return (
                <div
                  key={principle.eyebrow}
                  className={`grid gap-8 py-12 md:py-14 lg:items-center lg:gap-14 ${
                    index === 0 ? 'lg:grid-cols-[0.4fr_0.6fr]' : 'lg:grid-cols-[0.6fr_0.4fr]'
                  }`}
                >
                  {index === 0 ? (
                    <>
                      {image}
                      {text}
                    </>
                  ) : (
                    <>
                      {text}
                      {image}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061326] py-14 text-white md:py-20">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#071d3a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061326] to-transparent" />
        <div className="scroll-fade group relative h-[520px] overflow-hidden shadow-2xl shadow-blue-950/30 md:h-[560px]">
          <img
            src="/images/cadell-office.jpg"
            alt="Cadell Healthcare office"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.2] transition duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#061326]/42" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.13),transparent_36%),linear-gradient(90deg,rgba(3,16,34,0.68),rgba(11,42,74,0.16),rgba(3,16,34,0.58))]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="container-pad relative z-10 flex h-full items-center justify-center pb-8 text-center md:pb-14">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
                Inside Cadell Healthcare
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Real Infrastructure. Real Commitment.
              </h2>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">2008</span>
                  <span className="stat-label">Established</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-number">WHO-GMP</span>
                  <span className="stat-label">Certified Facilities</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-number">PAN India</span>
                  <span className="stat-label">Presence</span>
                </div>
              </div>
              <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061326] pb-32 pt-24 text-white md:pb-44 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#061326] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_10%_78%,rgba(59,130,246,0.16),transparent_32%),linear-gradient(135deg,#071d3a_0%,#0B2A4A_46%,#031022_100%)]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute right-[-12%] top-10 h-96 w-96 rounded-full bg-cyan-300/18 blur-3xl" />
        <div className="absolute left-[-10%] bottom-10 h-80 w-80 rounded-full bg-blue-400/16 blur-3xl" />
        <div className="container-pad relative z-10">
          <div className="scroll-fade grid gap-12 border-y border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
            <div>
              <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-[#1E5AA8]" />
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                Company Profile
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                Pharmaceutical care built on quality, innovation, and patient trust.
              </h2>
            </div>

            <div className="flex items-center">
              <div className="company-profile-copy">
                <p>
                  Established in 2008, Cadell Healthcare is a fast-growing pharmaceutical company delivering affordable, innovative medicines across Diabetic, Cardiovascular, Gynaecology, General, and Orthopedic segments — all manufactured in WHO-GMP certified facilities to global quality standards.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="value-card scroll-fade group flex min-h-[250px] flex-col rounded-3xl bg-white/90 p-6 shadow-[0_18px_60px_rgba(2,12,27,0.18)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_80px_rgba(34,211,238,0.16)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF6FF] to-[#DDF8FF] text-[#1E5AA8] shadow-lg shadow-blue-950/5 transition duration-500 group-hover:scale-110 group-hover:text-cyan-600 group-hover:shadow-cyan-200/40">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#0B2A4A]">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{highlight.text}</p>
                  <div className="mt-auto pt-6">
                    <div className="h-px w-16 bg-gradient-to-r from-[#1E5AA8]/30 to-transparent transition-all duration-500 group-hover:w-24 group-hover:from-cyan-400/50" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
