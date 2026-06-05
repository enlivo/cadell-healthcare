import { Link } from 'react-router-dom';
import { contact } from '../data/site.js';

const trustBadges = ['WHO-GMP', 'ISO Certified', 'Ethical Practice', 'Quality Focus'];
const footerLinks = [
  { label: 'About Cadell', path: '/about' },
  { label: 'Product Portfolio', path: '/products' },
  { label: 'Quality Standards', path: '/quality' },
  { label: 'Pharmacovigilance / Report Side Effects', path: '/contact' },
  { label: 'Careers', path: '/contact' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#071d3a] text-white">
      <div className="container-pad grid gap-10 border-b border-white/10 py-14 md:grid-cols-[1.25fr_0.75fr_1fr]">
        <div>
          <div className="mb-5 flex w-fit flex-col items-start justify-center">
            <img
              src="/images/cadell-logo.png"
              alt="Cadell Healthcare"
              loading="lazy"
              decoding="async"
              className="w-[260px] max-w-full object-contain object-left opacity-95 transition-all duration-300 hover:opacity-100"
              style={{ imageRendering: 'auto' }}
            />
            <p className="mt-3 text-sm font-semibold tracking-[0.12em] text-blue-100">
              Caring • Commitment • Excellence
            </p>
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
            {footerLinks.map((item) => (
              <Link
                key={item.label}
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
        <div className="grid gap-1 text-xs leading-6 text-blue-200 md:text-right">
          <span>Drug License Numbers: [Insert DL Number]</span>
          <span>Corporate Identity Number (CIN): [Insert CIN]</span>
        </div>
      </div>
      <div className="container-pad border-b border-white/10 py-6">
        <p className="max-w-4xl text-xs leading-6 text-blue-200">
          <strong className="text-white">Medical Disclaimer:</strong> The medical and product information on this website is intended solely for educational and professional informational purposes. It must not be used as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
      <div className="py-5">
        <div className="container-pad text-xs text-blue-200">
          © 2026 Cadell Healthcare. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
