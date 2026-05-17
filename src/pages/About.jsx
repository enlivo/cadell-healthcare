import { Award, Building2, Globe2, Handshake, PackageCheck, ShieldCheck, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { values } from '../data/site.js';

const pillars = [
  {
    icon: Building2,
    title: 'Enterprise Supply Focus',
    text: 'Cadell is positioned for structured B2B healthcare supply, with clear enquiry handling and dependable coordination for trade buyers.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Governance',
    text: 'Product selection is guided by documentation, vendor discipline, packaging integrity, and responsible healthcare distribution standards.',
  },
  {
    icon: Users,
    title: 'Channel Relationships',
    text: 'The company is framed around long-term relationships with pharmacies, institutions, procurement teams, vendors, and healthcare buyers.',
  },
  {
    icon: Handshake,
    title: 'Ethical Commercial Practice',
    text: 'Growth is balanced with transparent communication, practical commitments, and responsible partner selection.',
  },
];

const healthcareMetrics = [
  {
    icon: Building2,
    value: '500+',
    label: 'Pharmacies Supported',
  },
  {
    icon: PackageCheck,
    value: '100+',
    label: 'Healthcare Products',
  },
  {
    icon: Globe2,
    value: 'PAN India',
    label: 'Distribution Reach',
  },
  {
    icon: Award,
    value: '8+',
    label: 'Years of Market Experience',
  },
];

export default function About() {
  return (
    <main className="page-shell">
      <section className="about-hero relative overflow-hidden py-24 text-white md:py-32">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #062b52, #0b3f78, #08315d, #0d4d8b)',
            backgroundSize: '400% 400%',
            animation: 'gradientMove 12s ease infinite',
          }}
        />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="particle absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="particle absolute left-[10%] top-[60%] h-4 w-4 rounded-full bg-white/20" />
        <div className="particle absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full bg-white/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            About Cadell
          </p>
          <h1 className="relative text-5xl font-bold leading-tight md:text-7xl">
            <span
              style={{
                textShadow: '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              A corporate healthcare partner for reliable pharma distribution.
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-blue-100">
            Cadell Healthcare supports pharma distribution and healthcare product supply
            through structured coordination, quality-focused sourcing, and relationship-led service.
          </p>
        </div>

        <style>{`
          .about-hero .particle {
            animation: floatParticle 8s infinite ease-in-out;
            box-shadow: 0 0 24px rgba(255, 255, 255, 0.2);
          }

          .about-hero .particle:nth-of-type(5) {
            animation-delay: 1.4s;
          }

          .about-hero .particle:nth-of-type(6) {
            animation-delay: 2.7s;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes floatParticle {
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
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Company Profile"
            title="Built to support pharmacies, institutions, and healthcare trade partners."
            text="Cadell Healthcare presents a disciplined, modern business face for a growing pharmaceutical portfolio. The brand is designed to communicate trust, operational clarity, and readiness for product-level and partner-level conversations."
          />
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1E5AA8] sm:tracking-[0.24em]">Corporate Commitments</p>
            <h3 className="mt-3 text-xl font-semibold text-[#0B2A4A] sm:text-2xl">What Cadell stands for</h3>
            <div className="mt-7 grid gap-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-sm font-bold text-slate-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 block">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Company Culture"
            title="Corporate Events & Team Excellence"
            text="From team milestones to industry interactions, Cadell Healthcare continues building strong relationships across the healthcare ecosystem."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-950/10 transition-all duration-500 hover:shadow-2xl">
              <img
                src="/company-events/team-1.jpg"
                alt="Cadell Healthcare team event"
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[340px] md:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">Corporate Event</p>
                <h3 className="text-lg font-semibold text-white">Annual Team Meet 2025</h3>
              </div>
            </div>
            <div className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-950/10 transition-all duration-500 hover:shadow-2xl lg:translate-y-10">
              <img
                src="/company-events/team-2.jpg"
                alt="Cadell Healthcare corporate event"
                className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[260px] md:h-[340px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">Corporate Event</p>
                <h3 className="text-lg font-semibold text-white">Healthcare Leadership Event</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E5AA8]">
              Trusted Across Healthcare
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#0B2A4A] md:text-5xl">
              Building Reliable Healthcare Relationships Across India
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Cadell Healthcare supports pharmacies, hospitals, healthcare buyers, and distribution partners through quality-focused supply and long-term business relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {healthcareMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <article
                  key={metric.label}
                  className="rounded-[24px] border border-slate-100 bg-white p-7 text-center shadow-lg shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#1E5AA8]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <strong className="mt-5 block bg-gradient-to-r from-[#1E5AA8] to-[#38BDF8] bg-clip-text text-4xl font-bold text-transparent">
                    {metric.value}
                  </strong>
                  <span className="mt-3 block text-sm font-semibold leading-6 text-slate-600">
                    {metric.label}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Our Commitment"
            title="Quality Medicines. Responsible Distribution. Trusted Partnerships."
            text="Cadell Healthcare delivers professionally managed pharmaceutical supply solutions for pharmacies, hospitals, distributors, and institutional buyers across India."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#0B2A4A] sm:text-xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
