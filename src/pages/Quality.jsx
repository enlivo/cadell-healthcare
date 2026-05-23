import { BadgeCheck, ClipboardList, Factory, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

const checks = [
  {
    icon: Factory,
    title: 'Product Review',
    text: 'Products are considered with attention to reliability, consistency, documentation, and healthcare suitability.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation Support',
    text: 'Product information and relevant documentation are maintained for clearer healthcare and business communication.',
  },
  {
    icon: ShieldCheck,
    title: 'Storage & Handling',
    text: 'Products are handled with care to support quality-focused pharmaceutical standards.',
  },
  {
    icon: BadgeCheck,
    title: 'Ethical Practice',
    text: 'Cadell maintains transparent communication, responsible practices, and long-term trust with healthcare partners.',
  },
];

const certifications = [
  {
    title: 'WHO Certified',
    subtitle: 'Global quality compliance',
    image: '/images/certificates/who.png',
  },
  {
    title: 'ISO 9001:2015',
    subtitle: 'Structured management standard',
    image: '/images/certificates/iso.png',
  },
  {
    title: 'GMP Certified',
    subtitle: 'Manufacturing discipline',
    image: '/images/certificates/gmp.png',
  },
  {
    title: 'Quality Assured',
    subtitle: 'Consistent quality focus',
    image: '/images/certificates/quality.png',
  },
];

const qualityStats = [
  { value: 'Quality', label: 'Documentation Focus' },
  { value: 'Care', label: 'Patient-Focused Approach' },
  { value: 'Trust', label: 'Healthcare Relationships' },
  { value: 'Integrity', label: 'Responsible Standards' },
];

export default function Quality() {
  return (
    <main className="page-shell">
      <section className="quality-hero relative overflow-hidden bg-[#0B2A4A] pt-36 text-white">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #062b52, #0b3f78, #08315d, #0d4d8b)',
            backgroundSize: '400% 400%',
            animation: 'qualityGradientMove 12s ease infinite',
          }}
        />
        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="quality-particle absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="quality-particle absolute left-[10%] top-[60%] h-4 w-4 rounded-full bg-white/20" />
        <div className="quality-particle absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full bg-white/20" />

        <div className="container-pad relative z-10 pb-20 pt-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.3em]">
              Quality Assurance
            </p>
            <h1
              className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl"
              style={{
                textShadow: '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              Committed To Quality Healthcare & Pharmaceutical Excellence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 md:text-lg">
              Cadell Healthcare follows structured quality practices, documentation standards, and responsible healthcare principles.
            </p>
          </div>
        </div>

        <style>{`
          .quality-hero .quality-particle {
            animation: qualityFloatParticle 8s infinite ease-in-out;
            box-shadow: 0 0 24px rgba(255, 255, 255, 0.2);
          }

          .quality-hero .quality-particle:nth-of-type(7) {
            animation-delay: 1.4s;
          }

          .quality-hero .quality-particle:nth-of-type(8) {
            animation-delay: 2.7s;
          }

          @keyframes qualityGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes qualityFloatParticle {
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

      <section className="section-pad cinematic-light">
        <div className="container-pad relative z-10">
          <SectionHeader
            eyebrow="Quality Framework"
            title="Built for confidence across healthcare and pharmaceutical relationships."
            text="Cadell combines organized documentation, careful handling, quality practices, and transparent communication across every relationship."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {checks.map((check) => {
              const Icon = check.icon;
              return (
                <article
                  key={check.title}
                  className="premium-card group relative overflow-hidden rounded-2xl border border-slate-100/70 bg-white/88 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-100 sm:p-7"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <Icon className="h-7 w-7 text-[#1E5AA8] transition duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    <h3 className="mt-5 text-lg font-semibold text-[#0B2A4A] sm:text-xl">{check.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{check.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cinematic-bluewash py-16 md:py-20">
        <div className="container-pad relative z-10">
          <SectionHeader
            align="center"
            eyebrow="Quality By Numbers"
            title="Measured discipline behind every healthcare relationship."
            text="Cadell Healthcare keeps compliance, documentation, and coordination at the center of its quality approach."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStats.map((stat) => (
              <article
                key={stat.label}
                className="premium-card rounded-2xl border border-slate-100/70 bg-white/88 p-6 text-center backdrop-blur-md transition-all duration-300"
              >
                <strong className="block bg-gradient-to-r from-[#1E5AA8] to-[#38BDF8] bg-clip-text text-4xl font-bold text-transparent">
                  {stat.value}
                </strong>
                <span className="mt-3 block text-sm font-semibold leading-6 text-slate-600">
                  {stat.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-light py-16 md:py-20">
        <div className="container-pad relative z-10">
          <SectionHeader
            align="center"
            eyebrow="Accreditations"
            title="Certified Quality Standards"
            text="Cadell Healthcare follows internationally recognized pharmaceutical quality and compliance practices."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="premium-card group relative overflow-hidden rounded-[24px] border border-slate-100/60 bg-white/90 p-6 text-center backdrop-blur-md transition-all duration-500 hover:border-blue-100 sm:p-7"
              >
                <div className="absolute inset-0 rounded-[24px] bg-blue-400/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative mx-auto flex h-[170px] w-full items-center justify-center rounded-2xl border border-slate-100/60 bg-slate-50 p-5 transition duration-500 group-hover:border-blue-100/70">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#0B2A4A]">
                  {certification.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {certification.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
