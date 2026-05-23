import { Link } from 'react-router-dom';
import { contact, navItems } from '../data/site.js';

const trustBadges = ['WHO-GMP', 'ISO Certified', 'Ethical Practice', 'Quality Focus'];

export default function Footer() {
  return (
    <footer className="bg-[#071d3a] text-white">
      <div className="container-pad grid gap-10 border-b border-white/10 py-14 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div>
          <div className="mb-5 flex w-fit items-center justify-center rounded-2xl border border-white/20 bg-white px-6 py-4 shadow-xl">
            <img
              src="/images/cadell-logo-transparent.png"
              alt="Cadell Healthcare"
              className="h-[95px] w-auto object-contain object-center"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <h3 className="mb-3 text-2xl font-bold text-white">
            Committed To Trusted Healthcare Solutions
          </h3>
          <p className="max-w-sm leading-relaxed text-slate-300">
            Cadell Healthcare is focused on quality pharmaceutical solutions, patient care, and trusted healthcare relationships.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.24em]">Quick Links</h3>
          <div className="grid gap-3 text-sm text-blue-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.24em]">Business Contact</h3>
          <div className="grid gap-3 text-sm leading-6 text-blue-100">
            <div>
              <strong className="block text-white">Sales & Billing:</strong>
              <a href={contact.salesPhoneHref} className="transition hover:text-white">{contact.salesPhone}</a>
            </div>
            <div>
              <strong className="block text-white">Administration & General Enquiries:</strong>
              <a href={contact.adminPhoneHref} className="transition hover:text-white">{contact.adminPhone}</a>
            </div>
            <span className="break-words">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@cadellhealthcare.com" className="transition hover:text-white">
                {contact.email}
              </a>
            </span>
            <span>
              <strong className="text-white">Location:</strong>{' '}
              <a href={contact.maps} target="_blank" rel="noreferrer" className="transition hover:text-white">
                Mysuru, Karnataka, India
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="container-pad flex flex-col gap-5 border-b border-white/10 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-blue-700 bg-blue-900/40 px-4 py-2 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="py-5">
        <div className="container-pad text-xs text-blue-200">
          © 2026 Cadell Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
