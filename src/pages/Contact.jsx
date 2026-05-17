import { ArrowRight, Building2, Clock3, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { contact } from '../data/site.js';

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="contact-hero relative overflow-hidden bg-[#0B2A4A] pt-36 text-white">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #062b52, #0b3f78, #08315d, #0d4d8b)',
            backgroundSize: '400% 400%',
            animation: 'contactGradientMove 12s ease infinite',
          }}
        />
        <div className="absolute inset-0 soft-grid opacity-20" />
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="contact-particle absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="contact-particle absolute left-[10%] top-[60%] h-4 w-4 rounded-full bg-white/20" />
        <div className="contact-particle absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full bg-white/20" />

        <div className="container-pad relative z-10 pb-20 pt-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.3em]">
              Contact
            </p>
            <h1
              className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl"
              style={{
                textShadow: '0 0 36px rgba(56, 189, 248, 0.28), 0 16px 60px rgba(7, 31, 59, 0.35)',
              }}
            >
              Send a product, distribution, or business enquiry.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 md:text-lg">
              Replace the placeholder contact information with Cadell Healthcare phone, email, address, and enquiry process details before publishing.
            </p>
          </div>
        </div>

        <style>{`
          .contact-hero .contact-particle {
            animation: contactFloatParticle 8s infinite ease-in-out;
            box-shadow: 0 0 24px rgba(255, 255, 255, 0.2);
          }

          .contact-hero .contact-particle:nth-of-type(7) {
            animation-delay: 1.4s;
          }

          .contact-hero .contact-particle:nth-of-type(8) {
            animation-delay: 2.7s;
          }

          @keyframes contactGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes contactFloatParticle {
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
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Reach Cadell"
              title="Business enquiries are handled with clear follow-up."
              text="Connect with Cadell Healthcare for product availability, distribution enquiries, partnership discussions, and business support."
            />
            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: (
                    <>
                      <a href="tel:+918971799998" className="transition hover:text-[#1E5AA8]">{contact.phone}</a>
                      <span className="text-slate-400"> / </span>
                      <a href="tel:+919060644409" className="transition hover:text-[#1E5AA8]">{contact.secondaryPhone}</a>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: <a href={`mailto:${contact.email}`} className="transition hover:text-[#1E5AA8]">{contact.email}</a>,
                },
                {
                  icon: MapPin,
                  label: 'Address',
                  value: (
                    <a href={contact.maps} target="_blank" rel="noreferrer" className="transition hover:text-[#1E5AA8]">
                      {contact.address}
                    </a>
                  ),
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex gap-4">
                      <Icon className="h-6 w-6 text-[#1E5AA8] transition duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                      <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                      <p className="mt-1 font-semibold text-[#0B2A4A]">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-[#0B2A4A]">
                Name
                <input className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#0B2A4A]">
                Phone / Email
                <input className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Contact detail" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#0B2A4A]">
                Enquiry Type
                <select className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                  <option>Product availability</option>
                  <option>Distribution enquiry</option>
                  <option>Vendor partnership</option>
                  <option>General business enquiry</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#0B2A4A]">
                Message
                <textarea className="min-h-36 min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition-all duration-300 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Mention products, quantity, location, and expected timeline." />
              </label>
              <a
                href={contact.whatsapp}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E5AA8] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-[#1E5AA8]"
              >
                <MessageSquare className="h-4 w-4" />
                Send Enquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Visit Our Office"
            title="Mysuru office for business meetings and coordination."
            text="Cadell Healthcare welcomes distributors, hospitals, and healthcare partners for focused business discussions and operational follow-up."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-blue-950/5">
              <iframe
                title="Cadell Healthcare office map"
                src="https://www.google.com/maps?q=Cadell%20Healthcare%20Pvt%20Ltd%20Mysuru&output=embed"
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-6">
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#1E5AA8] transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Office Details</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#0B2A4A]">Cadell Healthcare Pvt. Ltd.</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{contact.address}</p>
                    <a
                      href={contact.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5AA8] transition hover:text-[#0B2A4A]"
                    >
                      Open in Google Maps
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#1E5AA8] transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-600">
                    <Clock3 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Business Hours</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#0B2A4A]">Office Schedule</h3>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                      <p>Monday - Saturday: 9:30 AM - 6:30 PM</p>
                      <p>Sunday: Closed</p>
                      <p>Enquiries are reviewed during business hours with prompt follow-up.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src="/images/cadell-office.jpg"
                  alt="Cadell Healthcare office"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
