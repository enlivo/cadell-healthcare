import { BadgeCheck, ClipboardList, Factory, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

const checks = [
  {
    icon: Factory,
    title: 'Vendor Review',
    text: 'Products are sourced through reviewed vendor relationships with attention to reliability, consistency, and market suitability.',
  },
  {
    icon: ClipboardList,
    title: 'Documentation Support',
    text: 'Batch details, invoices, product information, and required supply documents are maintained for smoother buyer communication.',
  },
  {
    icon: ShieldCheck,
    title: 'Storage & Handling',
    text: 'Products are handled with care across storage, dispatch, and delivery coordination to support quality-focused supply.',
  },
  {
    icon: BadgeCheck,
    title: 'Ethical Supply',
    text: 'Cadell maintains transparent communication, responsible sourcing, and long-term trust with healthcare partners.',
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
    subtitle: 'Consistent supply assurance',
    image: '/images/certificates/quality.png',
  },
];

const qualityStats = [
  { value: '100%', label: 'Documentation Verified' },
  { value: '500+', label: 'Deliveries Managed' },
  { value: '8+', label: 'Years Compliance Experience' },
  { value: 'PAN India', label: 'Distribution Support' },
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
              Committed to Safe, Reliable & Responsible Pharma Supply
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 md:text-lg">
              Cadell Healthcare follows structured quality checks, documentation practices, and responsible sourcing standards to support pharmacies, hospitals, and healthcare distributors.
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

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Quality Framework"
            title="Built for confidence across vendors, buyers, and healthcare channels."
            text="Cadell combines reviewed sourcing practices, organized documentation, careful handling, and transparent communication across every buyer relationship."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {checks.map((check) => {
              const Icon = check.icon;
              return (
                <article
                  key={check.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:p-7"
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

      <section className="bg-white py-16 md:py-20">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Quality By Numbers"
            title="Measured discipline behind every supply relationship."
            text="Cadell Healthcare keeps compliance, documentation, and coordination at the center of its quality approach."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container-pad">
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
                className="group relative overflow-hidden rounded-[24px] border border-slate-100 bg-white p-6 text-center shadow-xl shadow-blue-950/5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-950/10 sm:p-7"
              >
                <div className="absolute inset-0 rounded-[24px] bg-blue-400/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative mx-auto flex h-[170px] w-full items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-5 transition duration-500 group-hover:border-blue-100">
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
