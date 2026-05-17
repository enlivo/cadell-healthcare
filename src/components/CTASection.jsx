import { ArrowRight, Handshake } from 'lucide-react';
import { contact } from '../data/site.js';

export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-pad overflow-hidden rounded-[2rem] bg-[#0B2A4A] p-6 text-white shadow-2xl shadow-blue-950/15 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.28em]">
              Business Enquiries
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl">
              Move faster with a responsive pharma supply partner.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-blue-50 sm:text-base">
              Request category information, product availability, partnership terms, or a portfolio discussion with Cadell Healthcare.
            </p>
          </div>
          <div className="space-y-5">
            <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900 shadow-2xl shadow-blue-950/25 sm:min-h-[340px] md:min-h-[390px]">
              <img
                src="/images/cadell-office.jpg"
                alt="Cadell Healthcare business operations"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#061a38]/90 via-[#0B2A4A]/72 to-[#1E5AA8]/35" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <div className="mb-5 h-1 w-16 rounded-full bg-[#38BDF8]" />
                <h3 className="max-w-xl text-xl font-semibold leading-tight tracking-tight sm:text-2xl md:text-4xl">
                  Trusted by Pharmacies, Hospitals & Distributors
                </h3>
                <p className="mt-4 text-base font-semibold text-sky-100 sm:text-lg">
                  500+ Partners Across India
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request Product Catalogue
                <ArrowRight size={18} className="transition-all duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full border border-blue-400 bg-transparent px-8 py-4 font-medium text-blue-100 transition-all duration-300 hover:bg-blue-800/40"
              >
                <Handshake size={18} className="transition-all duration-300 group-hover:scale-110" />
                Become Distribution Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
