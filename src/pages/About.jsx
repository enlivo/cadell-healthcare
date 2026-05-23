import { BadgeCheck, HeartPulse, Lightbulb, ShieldCheck } from 'lucide-react';

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
    title: 'Quality Healthcare',
    text: 'Quality-driven pharmaceutical solutions across focused therapeutic segments.',
  },
  {
    icon: Lightbulb,
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

export default function About() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden bg-[#0B2A4A] py-24 text-white md:py-32">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #062b52, #0b3f78, #08315d, #0d4d8b)',
            backgroundSize: '400% 400%',
            animation: 'gradientMove 12s ease infinite',
          }}
        />
        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <span className="particle absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <span className="particle absolute left-[10%] top-[60%] h-4 w-4 rounded-full bg-white/20" />
        <span className="particle absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full bg-white/20" />

        <div className="container-pad relative z-10">
          <div className="max-w-4xl scroll-fade">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
              About Cadell
            </p>
            <h1
              className="text-5xl font-bold leading-tight md:text-7xl"
              style={{
                textShadow: '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              About Cadell Healthcare
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-semibold leading-9 text-blue-50 md:text-2xl md:leading-10">
              Committed to Affordable, Innovative, and Quality-Driven Healthcare Solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EEF7FF_44%,#FFFFFF_100%)] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_10%_78%,rgba(30,90,168,0.12),transparent_32%)]" />
        <div className="absolute right-[-12%] top-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute left-[-10%] bottom-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute left-[8%] top-24 hidden h-40 w-40 rounded-full border border-sky-200/30 md:block" />
        <div className="absolute right-[16%] bottom-24 hidden h-24 w-24 rotate-45 rounded-[2rem] border border-cyan-200/30 md:block" />
        <div className="container-pad relative z-10">
          <div className="mx-auto max-w-3xl text-center scroll-fade">
            <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#1E5AA8] to-cyan-300" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E5AA8]">
              Company Profile
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#0B2A4A] md:text-5xl">
              Pharmaceutical care built on quality, innovation, and patient trust.
            </h2>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="scroll-fade relative min-h-[360px] overflow-hidden rounded-[2.25rem] bg-[#071d3a] p-7 shadow-2xl shadow-blue-950/18">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(34,211,238,0.28),transparent_32%),linear-gradient(135deg,rgba(7,29,58,0.96),rgba(14,77,134,0.68))]" />
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                    Focused Therapeutic Segments
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Diabetic', 'Cardiovascular', 'Gynaecology', 'General', 'Orthopedic'].map((segment) => (
                      <span key={segment} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-50 backdrop-blur">
                        {segment}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative mx-auto my-8 flex h-44 w-44 items-center justify-center rounded-full bg-white/8 shadow-[0_0_80px_rgba(34,211,238,0.24)] backdrop-blur">
                  <div className="absolute inset-5 rounded-full border border-cyan-200/20" />
                  <div className="absolute inset-10 rounded-full border border-white/10" />
                  <HeartPulse className="h-16 w-16 text-cyan-100 drop-shadow-[0_0_24px_rgba(125,211,252,0.45)]" />
                </div>
                <p className="max-w-sm text-sm leading-7 text-blue-50/75">
                  Quality-led formulations, ethical practices, and patient-focused care form the foundation of Cadell Healthcare.
                </p>
              </div>
            </div>

            <div className="scroll-fade rounded-[2.25rem] bg-white/78 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-md sm:p-8 md:p-10">
              <div className="mb-7 inline-flex rounded-full bg-[#1E5AA8]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1E5AA8]">
                Company Profile
              </div>
              <div className="space-y-6 text-base leading-8 text-slate-600 md:text-lg md:leading-9">
                <p>
                  Cadell Healthcare, established in 2008, is a fast-growing pharmaceutical company committed to delivering affordable and innovative healthcare solutions across Diabetic, Cardiovascular, Gynaecology, General, and Orthopedic segments.
                </p>
                <p>
                  Driven by quality, ethical practices, and a customer-centric approach, we focus on improving patient lives through trusted formulations manufactured in WHO-GMP certified facilities with global quality standards.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="scroll-fade group flex min-h-[250px] flex-col rounded-3xl bg-white/82 p-6 shadow-[0_18px_60px_rgba(15,47,95,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(30,90,168,0.14)]"
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

      <section className="relative overflow-hidden bg-[#071d3a] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(59,130,246,0.16),transparent_34%),linear-gradient(135deg,rgba(7,29,58,1),rgba(2,12,27,0.92))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-400/18 blur-3xl" />
        <div className="container-pad relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.eyebrow}
                className="scroll-fade group relative overflow-hidden rounded-[2.25rem] bg-white/8 p-7 shadow-2xl shadow-blue-950/25 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(34,211,238,0.12)] sm:p-9"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl transition duration-500 group-hover:bg-cyan-300/16" />
                <span className="absolute right-7 top-5 text-7xl font-bold leading-none text-white/[0.04]">
                  {principle.mark}
                </span>
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                    {principle.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                    {principle.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-blue-50/85 md:text-lg">
                    {principle.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
