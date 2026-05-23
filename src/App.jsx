import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Quality from './pages/Quality.jsx';
import { contact } from './data/site.js';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function FloatingEnquiryButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-8 right-8 z-[60] inline-flex items-center gap-3 rounded-full bg-[#0F9D76] px-5 py-4 text-sm font-bold text-white shadow-2xl shadow-emerald-800/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#0b8766] hover:shadow-xl hover:shadow-emerald-800/25 sm:px-6"
      aria-label="Need Product Help? Open WhatsApp enquiry"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current text-white"
        >
          <path d="M19.11 4.91A10.03 10.03 0 0 0 12.01 2C6.49 2.01 2 6.5 2 12.03c0 1.76.47 3.47 1.36 4.97L2 22l5.12-1.34a10 10 0 0 0 4.89 1.24h.01c5.52 0 10-4.49 10-10.01 0-2.68-1.04-5.19-2.91-7.01Zm-7.1 15.34h-.01a8.34 8.34 0 0 1-4.25-1.16l-.3-.17-3.04.8.81-2.96-.2-.31a8.36 8.36 0 1 1 7 3.8Zm4.85-6.22c-.27-.13-1.62-.8-1.87-.89-.25-.09-.44-.13-.63.13-.18.27-.73.89-.89 1.07-.16.18-.33.2-.6.07-.27-.13-1.14-.42-2.17-1.33-.8-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.33.41-.49.14-.16.18-.27.27-.45.09-.18.04-.33-.02-.46-.07-.13-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49h-.54c-.18 0-.46.07-.7.33-.24.27-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.18 1.84 2.81 4.47 3.95.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.31Z" />
        </svg>
      </span>
      <span className="whitespace-nowrap">Need Product Help?</span>
      <span className="h-2.5 w-2.5 rounded-full bg-white/80 animate-pulse" />
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingEnquiryButton />
    </BrowserRouter>
  );
}
