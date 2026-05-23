import { ArrowRight, Handshake } from 'lucide-react';
import { contact } from '../data/site.js';

export default function CTASection() {
  return (
    <section className="signature-section py-16 md:py-24">
      <div className="signature-panel container-pad overflow-hidden rounded-[2.25rem] bg-[#071d3a] p-6 text-white shadow-[0_34px_110px_rgba(2,12,27,0.28)] md:p-12">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(7,29,58,0.98),rgba(11,42,74,0.88)_48%,rgba(30,90,168,0.58))]" />
        <div className="absolute inset-0 z-0 opacity-[0.07] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="scroll-fade">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.28em]">
              Business Enquiries
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl">
              Connect with a responsive pharmaceutical healthcare partner.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-blue-50 sm:text-base">
              Request category information, product details, healthcare collaboration support, or a portfolio discussion with Cadell Healthcare.
            </p>
          </div>
          <div className="space-y-5">
            <div className="hero-float relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:min-h-[340px] md:min-h-[390px]">
              <img
                src="/images/cadell-office.jpg"
                alt="Cadell Healthcare business operations"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#061a38]/90 via-[#0B2A4A]/72 to-[#1E5AA8]/35" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <div className="mb-5 h-1 w-16 rounded-full bg-[#38BDF8]" />
                <h3 className="max-w-xl text-xl font-semibold leading-tight tracking-tight sm:text-2xl md:text-4xl">
                  Trusted Healthcare Relationships Built On Quality
                </h3>
                <p className="mt-4 text-base font-semibold text-sky-100 sm:text-lg">
                  Patient-Focused Pharmaceutical Solutions
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-400/20"
              >
                Request Product Catalogue
                <ArrowRight size={18} className="transition-all duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-8 py-4 font-medium text-blue-100 shadow-[0_10px_40px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/12"
              >
                <Handshake size={18} className="transition-all duration-300 group-hover:scale-110" />
                Discuss Business Collaboration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
