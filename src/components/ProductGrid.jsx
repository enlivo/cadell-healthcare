import { ArrowUpRight } from 'lucide-react';
import { productCategories } from '../data/site.js';

const categoryBadges = {
  Cardiology: 'CARDIOVASCULAR RANGE',
  'General Medicine & Antibiotics': 'THERAPEUTIC RANGE',
  'Orthopedics & Analgesics': 'ORTHO & PAIN SUPPORT',
  'Gynecology & Women’s Health': 'WOMEN’S HEALTH',
  'Diabetic Care': 'DIABETES CARE',
};

const categoryVisuals = {
  cardiac: {
    background: 'linear-gradient(135deg, #e6f1fb 0%, #f8f0fb 100%)',
    pattern: 'heart',
  },
  'general-medicine': {
    background: 'linear-gradient(135deg, #edf3fb 0%, #f0f4ff 100%)',
    pattern: 'cross',
  },
  orthopedic: {
    background: 'linear-gradient(160deg, #b8ead7 0%, #e1f5ee 100%)',
    pattern: 'knee',
  },
  gynaecology: {
    background: 'linear-gradient(135deg, #fef0f4 0%, #fff5f5 100%)',
    pattern: 'lotus',
  },
  diabetic: {
    background: 'linear-gradient(135deg, #edf3fb 0%, #f0f6ff 100%)',
    pattern: 'meter',
  },
};

function MedicalPattern({ type }) {
  if (type === 'heart') {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="cadellHeartGrad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ff8c7a" />
            <stop offset="60%" stopColor="#e04030" />
            <stop offset="100%" stopColor="#8b1a10" />
          </radialGradient>
          <radialGradient id="cadellHeartHilite" cx="30%" cy="25%" r="40%">
            <stop offset="0%" stopColor="#ffb8a8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff8c7a" stopOpacity="0" />
          </radialGradient>
          <filter id="cadellHeartShadow">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#c02020" floodOpacity="0.25" />
          </filter>
        </defs>
        <g filter="url(#cadellHeartShadow)">
          <path d="M70 110 C70 110 22 78 22 50 C22 35 33 24 48 24 C57 24 65 29 70 37 C75 29 83 24 92 24 C107 24 118 35 118 50 C118 78 70 110 70 110Z" fill="url(#cadellHeartGrad)" />
          <path d="M70 110 C70 110 22 78 22 50 C22 35 33 24 48 24 C57 24 65 29 70 37 C75 29 83 24 92 24 C107 24 118 35 118 50 C118 78 70 110 70 110Z" fill="url(#cadellHeartHilite)" />
        </g>
        <polyline points="30,58 44,58 50,44 56,70 62,50 68,58 80,58 86,44 92,70 98,58 112,58" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    );
  }

  if (type === 'cross') {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="cadellCrossGrad" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#7fb5f5" />
            <stop offset="60%" stopColor="#4a7fd4" />
            <stop offset="100%" stopColor="#1e4fa0" />
          </radialGradient>
          <radialGradient id="cadellPill1G" cx="30%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#a0c4f8" />
            <stop offset="100%" stopColor="#5085d4" />
          </radialGradient>
          <filter id="cadellCrossShadow">
            <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#2244aa" floodOpacity="0.2" />
          </filter>
        </defs>
        <g filter="url(#cadellCrossShadow)">
          <rect x="50" y="24" width="40" height="92" rx="12" fill="url(#cadellCrossGrad)" />
          <rect x="24" y="50" width="92" height="40" rx="12" fill="url(#cadellCrossGrad)" />
          <rect x="50" y="24" width="40" height="92" rx="12" fill="white" opacity="0.12" />
          <ellipse cx="62" cy="36" rx="8" ry="14" fill="white" opacity="0.18" transform="rotate(-10 62 36)" />
        </g>
        <g transform="rotate(-30 102 100)">
          <rect x="90" y="92" width="24" height="13" rx="6.5" fill="url(#cadellPill1G)" />
          <rect x="90" y="92" width="12" height="13" fill="white" opacity="0.3" />
          <line x1="102" y1="92" x2="102" y2="105" stroke="#5085d4" strokeWidth="1" />
        </g>
        <circle cx="28" cy="100" r="10" fill="url(#cadellPill1G)" />
        <circle cx="25" cy="97" r="3" fill="white" opacity="0.4" />
      </svg>
    );
  }

  if (type === 'knee') {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="cadellBoneGrad" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#f0f0ee" />
            <stop offset="60%" stopColor="#d8d8d4" />
            <stop offset="100%" stopColor="#aaa89e" />
          </radialGradient>
          <radialGradient id="cadellCartilGrad" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#c8e8d8" />
            <stop offset="100%" stopColor="#8fc8ac" />
          </radialGradient>
          <filter id="cadellBoneShadow">
            <feDropShadow dx="2" dy="5" stdDeviation="6" floodColor="#608060" floodOpacity="0.2" />
          </filter>
        </defs>
        <g filter="url(#cadellBoneShadow)">
          <ellipse cx="76" cy="30" rx="20" ry="16" fill="url(#cadellBoneGrad)" />
          <ellipse cx="76" cy="30" rx="20" ry="16" fill="white" opacity="0.2" />
          <rect x="68" y="30" width="16" height="42" rx="6" fill="url(#cadellBoneGrad)" />
          <ellipse cx="76" cy="72" rx="18" ry="8" fill="url(#cadellCartilGrad)" />
          <ellipse cx="68" cy="80" rx="16" ry="7" fill="url(#cadellBoneGrad)" />
          <rect x="60" y="80" width="16" height="40" rx="5" fill="url(#cadellBoneGrad)" />
          <ellipse cx="68" cy="120" rx="16" ry="8" fill="url(#cadellBoneGrad)" />
          <rect x="84" y="82" width="9" height="36" rx="4" fill="url(#cadellBoneGrad)" />
          <ellipse cx="88" cy="82" rx="7" ry="5" fill="url(#cadellBoneGrad)" />
          <ellipse cx="88" cy="118" rx="7" ry="5" fill="url(#cadellBoneGrad)" />
          <ellipse cx="70" cy="26" rx="7" ry="5" fill="white" opacity="0.4" transform="rotate(-15 70 26)" />
        </g>
      </svg>
    );
  }

  if (type === 'lotus') {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="70" cy="90" rx="10" ry="30" fill="#f4b8a8" opacity="0.5" transform="rotate(-40 70 90)" />
        <ellipse cx="70" cy="90" rx="10" ry="30" fill="#f4b8a8" opacity="0.5" transform="rotate(40 70 90)" />
        <ellipse cx="70" cy="88" rx="10" ry="32" fill="#f4b8a8" opacity="0.5" transform="rotate(-70 70 88)" />
        <ellipse cx="70" cy="88" rx="10" ry="32" fill="#f4b8a8" opacity="0.5" transform="rotate(70 70 88)" />
        <ellipse cx="70" cy="88" rx="11" ry="28" fill="#f4a090" opacity="0.8" transform="rotate(-20 70 88)" />
        <ellipse cx="70" cy="88" rx="11" ry="28" fill="#f4a090" opacity="0.8" transform="rotate(20 70 88)" />
        <ellipse cx="50" cy="88" rx="11" ry="26" fill="#f4a090" opacity="0.7" transform="rotate(-50 50 88)" />
        <ellipse cx="90" cy="88" rx="11" ry="26" fill="#f4a090" opacity="0.7" transform="rotate(50 90 88)" />
        <ellipse cx="70" cy="76" rx="14" ry="34" fill="#ffe8df" />
        <ellipse cx="66" cy="66" rx="4" ry="10" fill="white" opacity="0.35" transform="rotate(-10 66 66)" />
        <ellipse cx="42" cy="110" rx="18" ry="9" fill="#9fc898" opacity="0.7" transform="rotate(-20 42 110)" />
        <ellipse cx="98" cy="110" rx="18" ry="9" fill="#9fc898" opacity="0.7" transform="rotate(20 98 110)" />
        <line x1="42" y1="110" x2="52" y2="100" stroke="#7aaa78" strokeWidth="1" opacity="0.7" />
        <line x1="98" y1="110" x2="88" y2="100" stroke="#7aaa78" strokeWidth="1" opacity="0.7" />
      </svg>
    );
  }

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="cadellDropGrad" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ff7070" />
          <stop offset="70%" stopColor="#d43030" />
          <stop offset="100%" stopColor="#8b1010" />
        </radialGradient>
        <radialGradient id="cadellMeterGrad" cx="30%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#9ab8d8" />
          <stop offset="100%" stopColor="#4a6e94" />
        </radialGradient>
        <filter id="cadellDropShadow2">
          <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#aa2020" floodOpacity="0.3" />
        </filter>
      </defs>
      <rect x="30" y="50" width="60" height="75" rx="10" fill="url(#cadellMeterGrad)" />
      <rect x="30" y="50" width="60" height="75" rx="10" fill="white" opacity="0.1" />
      <rect x="38" y="60" width="44" height="28" rx="5" fill="#1a2a3a" opacity="0.85" />
      <text x="60" y="71" textAnchor="middle" fontSize="8" fill="#44ddaa" fontFamily="monospace" fontWeight="bold">5.4</text>
      <text x="60" y="81" textAnchor="middle" fontSize="6" fill="#aaddcc" fontFamily="monospace">mmol/L</text>
      <circle cx="48" cy="100" r="7" fill="#3a5a78" />
      <circle cx="72" cy="100" r="7" fill="#3a5a78" />
      <circle cx="48" cy="100" r="5" fill="#507090" />
      <circle cx="72" cy="100" r="5" fill="#507090" />
      <rect x="85" y="95" width="22" height="5" rx="2.5" fill="#2a4a64" />
      <ellipse cx="45" cy="58" rx="10" ry="6" fill="white" opacity="0.18" transform="rotate(-10 45 58)" />
      <g filter="url(#cadellDropShadow2)" transform="translate(88, 28)">
        <path d="M16 38 C6 28 2 18 2 14 C2 7 8 2 16 2 C24 2 30 7 30 14 C30 18 26 28 16 38Z" fill="url(#cadellDropGrad)" />
        <path d="M16 38 C6 28 2 18 2 14 C2 7 8 2 16 2 C24 2 30 7 30 14 C30 18 26 28 16 38Z" fill="white" opacity="0.12" />
        <ellipse cx="11" cy="10" rx="4" ry="5" fill="white" opacity="0.35" transform="rotate(-15 11 10)" />
      </g>
    </svg>
  );
}

function ProductCardContent({ category }) {
  const visual = categoryVisuals[category.slug];

  return (
    <>
      <div className="relative min-h-52 overflow-hidden p-4 sm:min-h-60 sm:p-5" style={{ background: visual.background }}>
        <div className="absolute inset-x-5 bottom-5 top-5 flex items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/35 bg-white/40 shadow-inner backdrop-blur-sm">
          <MedicalPattern type={visual.pattern} />
        </div>
        <div className="absolute inset-x-10 bottom-8 h-10 rounded-full bg-[#0B2A4A]/10 blur-2xl" />
      </div>
      <div className="p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="rounded-full bg-[#1E5AA8]/5 px-3 py-1 text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[#0B2A4A] sm:tracking-[0.12em]">
            {categoryBadges[category.name]}
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1E5AA8]" />
        </div>
        <h3 className="text-xl font-semibold text-[#0B2A4A]">{category.name}</h3>
        <p className="mt-3 overflow-hidden text-sm leading-7 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {category.detail}
        </p>
      </div>
    </>
  );
}

export default function ProductGrid({ onCategoryClick }) {
  const handleCategoryClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category.slug);
      return;
    }

    window.location.assign(`/products?category=${category.slug}#product-gallery`);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {productCategories.map((category, index) => {
        const isOrthopedic = category.slug === 'orthopedic';

        return (
          <button
            type="button"
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className="premium-card group overflow-hidden rounded-[1.75rem] border border-slate-100/70 bg-white/92 text-left outline-none backdrop-blur-sm transition focus-visible:ring-4 focus-visible:ring-sky-100 hover:border-sky-100"
            style={
              isOrthopedic
                ? {
                    border: '1px solid rgba(93, 202, 165, 0.35)',
                    background: 'linear-gradient(160deg, #e1f5ee 0%, #f0faf6 100%)',
                  }
                : undefined
            }
          >
            <ProductCardContent category={category} index={index} />
          </button>
        );
      })}
    </div>
  );
}
