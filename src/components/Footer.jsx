import { Link } from 'react-router-dom';
import { contact, navItems } from '../data/site.js';

const trustBadges = ['WHO-GMP', 'ISO Certified', 'Ethical Supply', 'Pan India Distribution'];

export default function Footer() {
  return (
    <footer className="bg-[#071d3a] text-white">
      <div className="container-pad grid gap-10 border-b border-white/10 py-14 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div>
          <img src="/images/cadell-logo.jpeg" alt="Cadell Healthcare logo" className="mb-5 h-14 rounded bg-white px-2 object-contain" />
          <h2 className="max-w-sm text-xl font-semibold leading-tight text-white sm:text-2xl">
            Reliable Pharma Distribution Across India
          </h2>
          <p className="max-w-md text-sm leading-7 text-blue-100">
            Supporting pharmacies, hospitals, distributors, and institutional buyers with dependable healthcare supply solutions.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.24em]">Quick Links</h3>
          <div className="grid gap-3 text-sm text-blue-100">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="transition hover:translate-x-1 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-200 sm:tracking-[0.24em]">Business Contact</h3>
          <div className="grid gap-3 text-sm leading-6 text-blue-100">
            <span className="flex flex-wrap gap-x-1">
              <strong className="text-white">Phone:</strong>{' '}
              <a href="tel:+918971799998" className="transition hover:text-white">{contact.phone}</a>
              <span className="text-white/30"> / </span>
              <a href="tel:+919060644409" className="transition hover:text-white">{contact.secondaryPhone}</a>
            </span>
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
              className="rounded-full border border-sky-300/15 bg-white/8 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-sky-100 sm:px-4 sm:text-xs sm:tracking-[0.12em]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="py-5">
        <div className="container-pad text-xs text-blue-200">
          © 2026 Cadell Healthcare. Replace legal and registration details before launch.
        </div>
      </div>
    </footer>
  );
}
