import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contact, navItems } from '../data/site.js';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-sky-50 text-[#1E5AA8]'
        : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B2A4A]'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/95 shadow-sm shadow-blue-950/5">
      <div className="container-pad flex min-h-24 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/cadell-logo-transparent.png"
            alt="Cadell Healthcare"
            className="h-[78px] min-w-[220px] w-auto object-contain object-center"
            style={{ imageRendering: 'auto' }}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#0F9D76] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-[#0b8766] hover:shadow-xl hover:shadow-emerald-700/25 lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Enquire
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0B2A4A] lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white/98 shadow-lg shadow-blue-950/5 lg:hidden">
          <nav className="container-pad grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0B2A4A] px-5 py-3 text-sm font-bold text-white"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
