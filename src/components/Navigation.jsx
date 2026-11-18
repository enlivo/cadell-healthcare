import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contact, navItems } from '../data/site.js';

const navigationItems = navItems.flatMap((item) =>
  item.path === '/quality' ? [{ label: 'Franchise', path: '/#franchise' }, item] : [item],
);

// Links need "!" on colours because the site stylesheet sets a { color: inherit }.
const activeClass = 'bg-[#0B2A57] text-white! shadow-[0_6px_16px_rgba(11,42,87,0.35)]';
const idleClass = 'text-slate-800! hover:bg-white/70 hover:text-[#0B2A57]!';
const baseClass = 'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderItem = (item, onClick) =>
    item.path.includes('#') ? (
      // Section anchors on the homepage never show as the active tab.
      <Link key={item.path} to={item.path} className={`${baseClass} ${idleClass}`} onClick={onClick}>
        {item.label}
      </Link>
    ) : (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === '/'}
        className={({ isActive }) => `${baseClass} ${isActive ? activeClass : idleClass}`}
        onClick={onClick}
      >
        {item.label}
      </NavLink>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div
        className={`relative mx-auto flex w-full items-center justify-between gap-6 rounded-full border border-white/70 px-3 py-1.5 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 lg:w-fit lg:pl-4 lg:pr-2 ${
          scrolled
            ? 'bg-white/85 shadow-[0_16px_50px_rgba(6,19,38,0.28)]'
            : 'bg-white/70 shadow-[0_12px_40px_rgba(6,19,38,0.22)]'
        }`}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        <Link to="/" className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]" onClick={() => setOpen(false)}>
          <img
            src="/images/cadell-header-logo.png"
            alt="Cadell Healthcare"
            loading="eager"
            decoding="async"
            className="h-[40px] w-auto object-contain md:h-[46px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">{navigationItems.map((item) => renderItem(item))}</nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#0F9D76] px-5 py-2.5 text-sm font-bold text-white! shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_22px_rgba(15,157,118,0.35)] transition hover:bg-[#0b8766] lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Enquire
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/60 text-[#0B2A57] lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[520px] rounded-3xl border border-white/70 bg-white/85 p-4 shadow-[0_20px_60px_rgba(6,19,38,0.3)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-1.5">
            {navigationItems.map((item) => renderItem(item, () => setOpen(false)))}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0F9D76] px-5 py-3 text-sm font-bold text-white!"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
