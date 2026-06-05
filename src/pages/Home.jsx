import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Cross,
  HeartPulse,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { productCatalog } from '../data/productCatalog.generated.js';
import { contact } from '../data/site.js';

const workflow = [
  {
    icon: ClipboardCheck,
    title: 'Product Understanding',
    text: 'Product needs and healthcare priorities are understood clearly before recommendations are made.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-First Selection',
    text: 'Product decisions are guided by quality standards, documentation, consistency, and patient-care relevance.',
  },
  {
    icon: PackageCheck,
    title: 'Responsible Support',
    text: 'Healthcare enquiries are handled with attention to clarity, responsiveness, and professional follow-through.',
  },
];

const trustPillars = [
  {
    icon: BadgeCheck,
    title: 'WHO-GMP Manufactured',
    text: 'Formulated exclusively at certified, state-of-the-art facilities.',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Centric Focus',
    text: 'Meticulously designed for maximum therapeutic efficacy and safety.',
  },
  {
    icon: ClipboardCheck,
    title: 'Ethical Marketing',
    text: 'Built on clinical data, transparency, and scientific trust.',
  },
  {
    icon: Truck,
    title: 'Pan-India Distribution',
    text: 'Robust supply chain delivering medicines safely and on time.',
  },
];

const qualityCommitments = [
  {
    icon: ShieldCheck,
    title: 'Certified Operations',
    text: 'We partner strictly with plants holding valid WHO-GMP, ISO, and state drug authority approvals.',
  },
  {
    icon: ClipboardCheck,
    title: 'Stability Studies',
    text: 'All formulations undergo real-time and accelerated stability testing to ensure maximum shelf-life.',
  },
  {
    icon: Boxes,
    title: 'Advanced Packaging',
    text: 'Utilizing premium Alu-Alu and moisture-resistant blister packing to maintain chemical integrity.',
  },
];

const franchiseCards = [
  {
    title: 'Exclusive Monopoly Rights',
    text: 'Dedicated, conflict-free geographic territories for your business.',
    image: '/images/franchise/monopoly-rights.webp',
    alt: 'India distribution territory visual representing exclusive monopoly rights',
    position: 'center',
  },
  {
    title: 'Extensive Product Portfolio',
    text: 'Wide range of quality formulations across major therapeutic segments.',
    image: '/images/franchise/product-portfolio.webp',
    alt: 'Cadell Healthcare product portfolio visual with pharmaceutical formulations',
    position: 'center',
  },
  {
    title: 'Marketing & Promotional Support',
    text: 'Visual aids, product glossaries, catching cards, physician samples and promotional materials.',
    image: '/images/franchise/marketing-support.webp',
    alt: 'Medical representative kit representing marketing and promotional support',
    position: 'center',
  },
  {
    title: 'Seamless Logistics',
    text: 'Constant stock availability with rapid order fulfillment to prevent market deficits.',
    image: '/images/franchise/logistics.webp',
    alt: 'Warehouse logistics visual representing pharma supply chain and dispatch',
    position: 'center',
  },
];

const franchiseWhatsapp = `${contact.whatsapp.split('?')[0]}?text=Hello%20Cadell%20Healthcare%2C%20I%20would%20like%20to%20enquire%20about%20Franchise%20%2F%20Distribution%20opportunities.`;

const productMarqueeItems = Object.values(productCatalog).reduce((items, category, categoryIndex, categories) => {
  category.products.forEach((product, productIndex) => {
    const insertionIndex = productIndex * categories.length + categoryIndex;
    items[insertionIndex] = product.name;
  });

  return items;
}, []).filter(Boolean);

const pharmacyHeroSvg = `
<svg viewBox="0 0 640 720" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
  <defs>
    <radialGradient id="roomBg" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#e8f5f1"/>
      <stop offset="100%" stop-color="#cce0f0"/>
    </radialGradient>
    <radialGradient id="counterGrad" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#d8eaf4"/>
    </radialGradient>
    <radialGradient id="glowGreen" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2ec08a" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#2ec08a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4a90d9" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#4a90d9" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bottleRed" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#ff8080"/>
      <stop offset="100%" stop-color="#cc2020"/>
    </radialGradient>
    <radialGradient id="bottleBlue" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#80b0ff"/>
      <stop offset="100%" stop-color="#2050cc"/>
    </radialGradient>
    <radialGradient id="bottleGreen" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#80e0b0"/>
      <stop offset="100%" stop-color="#1b8a6b"/>
    </radialGradient>
    <radialGradient id="bottleOrange" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#ffcc80"/>
      <stop offset="100%" stop-color="#e07020"/>
    </radialGradient>
    <radialGradient id="bottleWhite" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#c8dce8"/>
    </radialGradient>
    <radialGradient id="screenGrad" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#1a3a6a"/>
      <stop offset="100%" stop-color="#0a1828"/>
    </radialGradient>
    <filter id="softShadow">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#0d1f3c" flood-opacity="0.13"/>
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="14"/>
    </filter>
    <filter id="pillShadow">
      <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0d1f3c" flood-opacity="0.15"/>
    </filter>
    <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="16" cy="16" r="1.2" fill="#1b8a6b" fill-opacity="0.1"/>
    </pattern>
  </defs>

  <rect width="640" height="720" fill="url(#roomBg)"/>
  <ellipse cx="500" cy="200" rx="220" ry="180" fill="url(#glowGreen)" filter="url(#glow)"/>
  <ellipse cx="150" cy="500" rx="180" ry="140" fill="url(#glowBlue)" filter="url(#glow)"/>
  <rect width="640" height="720" fill="url(#dots)"/>
  <rect x="0" y="0" width="640" height="420" fill="#eaf4f8" fill-opacity="0.6"/>
  <rect x="30" y="60" width="580" height="310" rx="16" fill="white" fill-opacity="0.55"/>
  <rect x="40" y="140" width="560" height="10" rx="3" fill="#ccdde8"/>
  <rect x="40" y="240" width="560" height="10" rx="3" fill="#ccdde8"/>
  <rect x="40" y="340" width="560" height="10" rx="3" fill="#ccdde8"/>
  <rect x="40" y="60" width="10" height="290" rx="3" fill="#b8ccd8"/>
  <rect x="590" y="60" width="10" height="290" rx="3" fill="#b8ccd8"/>
  <rect x="220" y="60" width="8" height="290" rx="2" fill="#ccdde8"/>
  <rect x="412" y="60" width="8" height="290" rx="2" fill="#ccdde8"/>

  <g filter="url(#pillShadow)">
    <rect x="62" y="80" width="30" height="56" rx="8" fill="url(#bottleRed)"/>
    <rect x="66" y="76" width="22" height="10" rx="4" fill="#cc2020"/>
    <rect x="68" y="72" width="18" height="8" rx="3" fill="#aa1818"/>
    <rect x="64" y="100" width="22" height="18" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="75" y="113" text-anchor="middle" font-family="Arial, sans-serif" font-size="5.5" fill="#cc2020" font-weight="700">RX</text>
    <ellipse cx="73" cy="88" rx="6" ry="8" fill="white" fill-opacity="0.25"/>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="104" y="88" width="34" height="48" rx="10" fill="url(#bottleWhite)"/>
    <rect x="109" y="84" width="24" height="8" rx="4" fill="#d0e0ea"/>
    <rect x="111" y="80" width="20" height="7" rx="3" fill="#b8ccd8"/>
    <rect x="106" y="104" width="26" height="16" rx="2" fill="#1b8a6b" fill-opacity="0.85"/>
    <text x="119" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="white" font-weight="700">CADELL</text>
    <ellipse cx="112" cy="96" rx="7" ry="8" fill="white" fill-opacity="0.4"/>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="150" y="82" width="26" height="54" rx="7" fill="url(#bottleBlue)"/>
    <rect x="154" y="78" width="18" height="8" rx="4" fill="#2050cc"/>
    <rect x="156" y="74" width="14" height="7" rx="3" fill="#1840aa"/>
    <rect x="152" y="100" width="18" height="20" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="161" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.5" fill="#2050cc" font-weight="700">VITA</text>
    <text x="161" y="117" text-anchor="middle" font-family="Arial, sans-serif" font-size="4" fill="#2050cc">D3</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="188" y="86" width="28" height="50" rx="8" fill="url(#bottleGreen)"/>
    <rect x="192" y="82" width="20" height="8" rx="4" fill="#1b8a6b"/>
    <rect x="194" y="78" width="16" height="7" rx="3" fill="#146050"/>
    <rect x="190" y="104" width="20" height="16" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="200" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#1b8a6b" font-weight="700">HERB</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="240" y="78" width="36" height="58" rx="10" fill="url(#bottleWhite)"/>
    <rect x="245" y="74" width="26" height="8" rx="4" fill="#d0e0ea"/>
    <rect x="247" y="70" width="22" height="7" rx="3" fill="#b8ccd8"/>
    <rect x="242" y="100" width="28" height="22" rx="2" fill="#0d1f3c" fill-opacity="0.85"/>
    <text x="256" y="113" text-anchor="middle" font-family="Arial, sans-serif" font-size="5.5" fill="white" font-weight="700">500mg</text>
    <text x="256" y="119" text-anchor="middle" font-family="Arial, sans-serif" font-size="4" fill="rgba(255,255,255,0.7)">AMOX</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="288" y="84" width="30" height="52" rx="8" fill="url(#bottleOrange)"/>
    <rect x="293" y="80" width="20" height="8" rx="4" fill="#e07020"/>
    <rect x="295" y="76" width="16" height="7" rx="3" fill="#c06010"/>
    <rect x="290" y="104" width="22" height="18" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="301" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#e07020" font-weight="700">VITA C</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="330" y="78" width="34" height="58" rx="10" fill="url(#bottleRed)"/>
    <rect x="335" y="74" width="24" height="8" rx="4" fill="#cc2020"/>
    <rect x="337" y="70" width="20" height="7" rx="3" fill="#aa1818"/>
    <rect x="332" y="100" width="26" height="22" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="347" y="113" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#cc2020" font-weight="700">CARDIO</text>
    <text x="347" y="119" text-anchor="middle" font-family="Arial, sans-serif" font-size="4" fill="#cc2020">PRO</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="432" y="82" width="28" height="54" rx="8" fill="url(#bottleBlue)"/>
    <rect x="436" y="78" width="20" height="8" rx="4" fill="#2050cc"/>
    <rect x="438" y="74" width="16" height="7" rx="3" fill="#1840aa"/>
    <rect x="434" y="100" width="20" height="20" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="446" y="113" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.5" fill="#2050cc" font-weight="700">OMEGA</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="472" y="78" width="32" height="58" rx="9" fill="url(#bottleGreen)"/>
    <rect x="477" y="74" width="22" height="8" rx="4" fill="#1b8a6b"/>
    <rect x="479" y="70" width="18" height="7" rx="3" fill="#146050"/>
    <rect x="474" y="100" width="24" height="22" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="486" y="113" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#1b8a6b" font-weight="700">DIAB</text>
    <text x="486" y="119" text-anchor="middle" font-family="Arial, sans-serif" font-size="4" fill="#1b8a6b">CARE</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="516" y="84" width="26" height="52" rx="7" fill="url(#bottleOrange)"/>
    <rect x="520" y="80" width="18" height="8" rx="4" fill="#e07020"/>
    <rect x="522" y="76" width="14" height="7" rx="3" fill="#c06010"/>
    <rect x="518" y="102" width="18" height="18" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="529" y="114" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.5" fill="#e07020" font-weight="700">IRON</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="554" y="80" width="30" height="56" rx="8" fill="url(#bottleWhite)"/>
    <rect x="558" y="76" width="22" height="8" rx="4" fill="#d0e0ea"/>
    <rect x="560" y="72" width="18" height="7" rx="3" fill="#b8ccd8"/>
    <rect x="556" y="102" width="22" height="20" rx="2" fill="#0d1f3c" fill-opacity="0.85"/>
    <text x="567" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="white" font-weight="700">NEURO</text>
  </g>

  <g filter="url(#pillShadow)">
    <rect x="55" y="158" width="70" height="40" rx="6" fill="#f0f8ff"/>
    <rect x="55" y="158" width="70" height="40" rx="6" stroke="#b0cce0" stroke-width="1"/>
    <circle cx="72" cy="172" r="7" fill="#e8e0ff"/><circle cx="72" cy="172" r="5" fill="#c8b8ff"/>
    <circle cx="88" cy="172" r="7" fill="#ffe8e0"/><circle cx="88" cy="172" r="5" fill="#ffb8a0"/>
    <circle cx="104" cy="172" r="7" fill="#e8ffe0"/><circle cx="104" cy="172" r="5" fill="#a0e8b0"/>
    <circle cx="72" cy="188" r="7" fill="#fff0e0"/><circle cx="72" cy="188" r="5" fill="#ffd090"/>
    <circle cx="88" cy="188" r="7" fill="#e0f0ff"/><circle cx="88" cy="188" r="5" fill="#90c8ff"/>
    <circle cx="104" cy="188" r="7" fill="#ffe0f0"/><circle cx="104" cy="188" r="5" fill="#ff90c8"/>
    <text x="90" y="202" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#607090" font-weight="600">BLISTER PACK · 10s</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="142" y="154" width="28" height="64" rx="6" fill="url(#bottleRed)"/>
    <rect x="148" y="150" width="16" height="8" rx="4" fill="#cc2020"/>
    <rect x="144" y="175" width="20" height="28" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="154" y="186" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.5" fill="#cc2020" font-weight="700">SYRUP</text>
    <text x="154" y="193" text-anchor="middle" font-family="Arial, sans-serif" font-size="4" fill="#607090">100ml</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="185" y="162" width="18" height="52" rx="5" fill="url(#bottleWhite)"/>
    <rect x="187" y="155" width="14" height="12" rx="3" fill="#d0e0ea"/>
    <circle cx="194" cy="157" r="5" fill="#c0d0de"/>
    <rect x="187" y="172" width="12" height="28" rx="2" fill="#e8f4fc"/>
    <rect x="208" y="162" width="18" height="52" rx="5" fill="#f0e8ff"/>
    <rect x="210" y="155" width="14" height="12" rx="3" fill="#d0b8ff"/>
    <circle cx="217" cy="157" r="5" fill="#c0a0ee"/>
    <rect x="210" y="172" width="12" height="28" rx="2" fill="#e8e0ff"/>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="244" y="156" width="26" height="48" rx="7" fill="url(#bottleOrange)"/>
    <rect x="248" y="152" width="18" height="8" rx="4" fill="#e07020"/>
    <rect x="246" y="174" width="18" height="16" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="257" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#e07020" font-weight="700">CAL-D</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="424" y="156" width="26" height="50" rx="7" fill="url(#bottleBlue)"/>
    <rect x="428" y="152" width="18" height="8" rx="4" fill="#2050cc"/>
    <rect x="426" y="174" width="18" height="18" rx="2" fill="white" fill-opacity="0.9"/>
    <text x="437" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="4.5" fill="#2050cc" font-weight="700">ASPIRIN</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="545" y="158" width="42" height="48" rx="6" fill="#f0f8ff"/>
    <rect x="545" y="158" width="42" height="48" rx="6" stroke="#b0cce0" stroke-width="1"/>
    <circle cx="561" cy="174" r="6" fill="#ffe0e0"/><circle cx="561" cy="174" r="4" fill="#ffb0b0"/>
    <circle cx="574" cy="174" r="6" fill="#e0ffe0"/><circle cx="574" cy="174" r="4" fill="#90e890"/>
    <circle cx="561" cy="188" r="6" fill="#e0e0ff"/><circle cx="561" cy="188" r="4" fill="#9090f8"/>
    <circle cx="574" cy="188" r="6" fill="#fff0e0"/><circle cx="574" cy="188" r="4" fill="#ffc870"/>
    <text x="566" y="204" text-anchor="middle" font-family="Arial, sans-serif" font-size="5.5" fill="#607090" font-weight="600">BLISTER · 4s</text>
  </g>

  <g filter="url(#pillShadow)">
    <rect x="52" y="258" width="48" height="52" rx="6" fill="#ff6060" fill-opacity="0.85"/>
    <text x="76" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">CARDIO</text>
    <text x="76" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">PLUS</text>
    <rect x="58" y="296" width="36" height="10" rx="3" fill="white" fill-opacity="0.2"/>
    <text x="76" y="304" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="white">10 TABLETS</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="108" y="258" width="48" height="52" rx="6" fill="#2050cc" fill-opacity="0.85"/>
    <text x="132" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">NEURO</text>
    <text x="132" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">CALM</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="164" y="258" width="48" height="52" rx="6" fill="#1b8a6b" fill-opacity="0.85"/>
    <text x="188" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">DIAB</text>
    <text x="188" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">SHIELD</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="240" y="258" width="48" height="52" rx="6" fill="#e07020" fill-opacity="0.85"/>
    <text x="264" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">ORTHO</text>
    <text x="264" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">FLEX</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="296" y="258" width="48" height="52" rx="6" fill="#9020cc" fill-opacity="0.85"/>
    <text x="320" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">GYNAE</text>
    <text x="320" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">CARE</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="432" y="258" width="48" height="52" rx="6" fill="#cc2060" fill-opacity="0.85"/>
    <text x="456" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">IRON</text>
    <text x="456" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">FORTE</text>
  </g>
  <g filter="url(#pillShadow)">
    <rect x="544" y="258" width="48" height="52" rx="6" fill="#1b8a6b" fill-opacity="0.85"/>
    <text x="568" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">HEPA</text>
    <text x="568" y="291" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="rgba(255,255,255,0.8)">GUARD</text>
  </g>

  <g filter="url(#softShadow)">
    <rect x="0" y="420" width="640" height="300" fill="#e8f2f8"/>
    <rect x="0" y="420" width="640" height="16" rx="4" fill="#ccdde8"/>
    <rect x="0" y="436" width="640" height="284" fill="url(#counterGrad)"/>
    <rect x="0" y="418" width="640" height="24" rx="6" fill="#d8eaf6"/>
    <rect x="0" y="418" width="640" height="4" rx="2" fill="white" fill-opacity="0.7"/>
  </g>
  <rect x="20" y="445" width="180" height="140" rx="10" fill="white" fill-opacity="0.4"/>
  <rect x="230" y="445" width="180" height="140" rx="10" fill="white" fill-opacity="0.4"/>
  <rect x="440" y="445" width="180" height="140" rx="10" fill="white" fill-opacity="0.4"/>

  <g filter="url(#softShadow)" transform="translate(170, 320)">
    <rect x="95" y="115" width="10" height="30" rx="4" fill="#a0b8c8"/>
    <rect x="75" y="143" width="50" height="8" rx="4" fill="#8a9faf"/>
    <rect x="0" y="0" width="200" height="118" rx="12" fill="#1a2a3a"/>
    <rect x="0" y="0" width="200" height="118" rx="12" stroke="#2a4a6a" stroke-width="1.5" fill="none"/>
    <rect x="8" y="8" width="184" height="102" rx="8" fill="url(#screenGrad)"/>
    <rect x="14" y="14" width="172" height="20" rx="4" fill="#1b8a6b" fill-opacity="0.8"/>
    <text x="100" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="white" font-weight="700">CADELL PHARMACY SYSTEM</text>
    <rect x="14" y="38" width="172" height="12" rx="2" fill="white" fill-opacity="0.06"/>
    <rect x="14" y="54" width="172" height="12" rx="2" fill="white" fill-opacity="0.04"/>
    <rect x="14" y="70" width="172" height="12" rx="2" fill="white" fill-opacity="0.06"/>
    <rect x="14" y="86" width="172" height="12" rx="2" fill="#2ec08a" fill-opacity="0.15"/>
    <rect x="20" y="42" width="60" height="4" rx="2" fill="#2ec08a" fill-opacity="0.7"/>
    <rect x="88" y="42" width="40" height="4" rx="2" fill="white" fill-opacity="0.3"/>
    <rect x="136" y="42" width="44" height="4" rx="2" fill="#ff8080" fill-opacity="0.5"/>
    <rect x="20" y="90" width="48" height="4" rx="2" fill="#2ec08a" fill-opacity="0.8"/>
    <rect x="88" y="90" width="36" height="4" rx="2" fill="#2ec08a" fill-opacity="0.5"/>
    <rect x="136" y="90" width="44" height="4" rx="2" fill="#2ec08a" fill-opacity="0.6"/>
  </g>

  <g filter="url(#pillShadow)" transform="translate(60, 395)">
    <rect x="0" y="0" width="70" height="80" rx="8" fill="white" fill-opacity="0.9"/>
    <rect x="0" y="0" width="70" height="80" rx="8" stroke="#d0e0ea" stroke-width="1"/>
    <rect x="0" y="0" width="70" height="14" rx="8" fill="#e8f4f8"/>
    <rect x="10" y="20" width="50" height="45" rx="4" fill="#f0f8ff"/>
    <rect x="10" y="20" width="50" height="12" rx="4" fill="#1b8a6b"/>
    <text x="35" y="29" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white" font-weight="700">Rx</text>
    <rect x="14" y="36" width="30" height="3" rx="1.5" fill="#90a8b8"/>
    <rect x="14" y="42" width="42" height="3" rx="1.5" fill="#b0c8d8"/>
  </g>
  <g transform="translate(490, 400)">
    <path d="M10 70 Q10 30 40 20 Q70 10 80 40 Q90 70 70 70 Q50 70 50 50" stroke="#2a4a6a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="14" fill="#3a6a9a" stroke="#2a4a6a" stroke-width="2"/>
    <circle cx="50" cy="50" r="9" fill="#4a7aaa"/>
    <circle cx="50" cy="50" r="4" fill="#c0d8f0"/>
  </g>
  <g filter="url(#softShadow)" transform="translate(390, 50)">
    <rect width="200" height="58" rx="16" fill="white" fill-opacity="0.96"/>
    <circle cx="29" cy="29" r="18" fill="#e6f7f2"/>
    <polyline points="21,29 27,35 37,23" stroke="#1b8a6b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <text x="52" y="24" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#0d1f3c">WHO-GMP Certified</text>
    <text x="52" y="38" font-family="Arial, sans-serif" font-size="10" fill="#607090">Quality Assured Care</text>
  </g>
  <g filter="url(#softShadow)" transform="translate(18, 440)">
    <rect width="134" height="80" rx="16" fill="#0d1f3c"/>
    <text x="16" y="30" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="white">500<tspan fill="#2ec08a">+</tspan></text>
    <text x="16" y="46" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.55)" letter-spacing="0.05em">PRODUCTS</text>
    <rect x="16" y="54" width="100" height="1" fill="rgba(255,255,255,0.1)"/>
    <text x="16" y="68" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.55)" letter-spacing="0.05em">LISTED &amp; ACTIVE</text>
  </g>
  <g filter="url(#softShadow)" transform="translate(430, 560)">
    <rect width="192" height="44" rx="22" fill="rgba(255,255,255,0.94)"/>
    <circle cx="22" cy="22" r="6" fill="#2ec08a"/>
    <circle cx="22" cy="22" r="11" fill="#2ec08a" fill-opacity="0.18"/>
    <text x="40" y="26" font-family="Arial, sans-serif" font-size="11" font-weight="500" fill="#0d1f3c">Live Order Processing</text>
  </g>
</svg>
`;

export default function Home() {
  return (
    <main className="page-shell">
      <section
        className="relative min-h-[100svh] overflow-hidden px-0 pt-[88px] md:pt-24"
        style={{
          background: 'linear-gradient(135deg, #020817 0%, #031b34 40%, #04294d 100%)',
        }}
      >
        <img
          src="/hero-healthcare-bg.png"
          alt=""
          aria-hidden="true"
          className="hero-bg-drift hero-image-reveal absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-82 md:object-[center_right]"
          style={{ filter: 'brightness(1.08) contrast(1.08) saturate(1.04)' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,12,27,0.95)_0%,rgba(2,12,27,0.9)_40%,rgba(2,12,27,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,8,23,0)_38%,rgba(0,0,0,0.38)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_34%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_62%,rgba(59,130,246,0.12),transparent_34%),linear-gradient(180deg,rgba(4,41,77,0.18)_0%,rgba(2,8,23,0.32)_100%)]" />
        <div className="pointer-events-none absolute right-[-10%] top-[16%] h-[42rem] w-[42rem] rounded-full bg-cyan-300/10 blur-[110px]" />
        <div className="pointer-events-none absolute right-[14%] top-[34%] h-72 w-72 rounded-full bg-blue-400/12 blur-[70px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_42%,rgba(0,0,0,0.42)_100%)]" />
        <div className="hero-capsule-spotlight absolute right-[6%] top-[18%] h-[34rem] w-[34rem] rounded-full" />
        <div className="hero-glow-pulse absolute right-[9%] top-[24%] h-96 w-96 rounded-full bg-cyan-300/14" />
        <span className="hero-capsule-glint right-[18%] top-[36%]" />
        <span className="hero-capsule-glint right-[13%] top-[43%] [animation-delay:2.4s]" />
        <span className="hero-capsule-glint right-[25%] top-[50%] [animation-delay:4.1s]" />
        <span className="hero-premium-particle left-[14%] top-[38%]" />
        <span className="hero-premium-particle right-[18%] top-[28%] [animation-delay:1.8s]" />
        <span className="hero-premium-particle bottom-[18%] right-[36%] [animation-delay:3.2s]" />
        <span className="hero-premium-particle right-[9%] bottom-[30%] [animation-delay:4.4s]" />
        <span className="hero-premium-particle left-[46%] top-[22%] [animation-delay:5.6s]" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-10 lg:px-10">
          <div className="hero-text-fade max-w-2xl">
            <div className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200/10 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-100 shadow-[0_10px_40px_rgba(0,0,0,0.16)] backdrop-blur-md sm:text-xs sm:tracking-[0.24em]">
              <Cross className="h-4 w-4" />
              <span className="min-w-0">Pharmaceutical & Healthcare Solutions</span>
            </div>
            <h1 className="max-w-[11ch] text-[44px] font-bold leading-[0.96] tracking-normal text-white drop-shadow-[0_14px_38px_rgba(0,0,0,0.42)] sm:text-6xl md:text-[72px]">
              Advancing
              <br />
              Healthcare.
              <br />
              Empowering
              <br />
              Lives.
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-blue-50/90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)] md:text-lg">
              At Cadell Healthcare, we blend scientific integrity with marketing excellence to deliver premium, therapeutic formulations manufactured at world-class, WHO-GMP certified facilities.
            </p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-100/10 bg-gradient-to-r from-[#082A58] via-[#0E4D86] to-[#1197B2] px-9 py-4 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_45px_rgba(8,42,88,0.34)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_22px_60px_rgba(34,211,238,0.22)] sm:w-auto"
              >
                Explore Our Brand Portfolio
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white px-9 py-4 text-sm font-bold text-[#06213F] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_14px_36px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-100 hover:text-[#06213F] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:w-auto"
              >
                <MessageCircle size={18} />
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-14 overflow-hidden border-t border-white/10 bg-[#071A33]/70 backdrop-blur-md">
          <div className="group/hero-marquee flex h-full items-center overflow-hidden">
            <div className="flex w-max items-center motion-safe:animate-[trust-marquee_110s_linear_infinite] group-hover/hero-marquee:[animation-play-state:paused]">
              {[...productMarqueeItems, ...productMarqueeItems].map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center">
                  <span className="px-6 text-[11px] font-bold uppercase tracking-[0.24em] text-white/75 sm:px-8">
                    {item}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-cyan-200/60 shadow-[0_0_10px_rgba(125,211,252,0.42)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cinematic-light py-9 md:py-10" aria-label="Core healthcare pillars">
        <div className="relative z-10 mx-auto w-[min(1240px,calc(100%-32px))]">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1E5AA8] sm:tracking-[0.28em]">
              Cadell Credentials
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#0B2A4A] md:text-4xl">
              Why Healthcare Professionals Trust Cadell
            </h2>
            <p className="mt-4 text-base font-light leading-8 text-slate-600 md:text-lg">
              Built on quality, compliance, scientific integrity, and reliable healthcare partnerships.
            </p>
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative flex h-full min-h-[150px] overflow-hidden rounded-3xl border border-slate-100/80 bg-white p-4 shadow-[0_16px_48px_rgba(15,47,95,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-100 hover:shadow-[0_26px_70px_rgba(15,47,95,0.16)] md:p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0B2A4A] via-[#1E5AA8] to-cyan-400" />
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-700 transition-all duration-300 group-hover:scale-110" />
                    </span>
                    <div className="pt-0.5">
                      <h3 className="text-[17px] font-semibold leading-snug text-[#0B2A4A]">{item.title}</h3>
                      <p className="mt-2 text-sm font-light leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about-cadell" className="relative overflow-hidden bg-[linear-gradient(180deg,#F8FBFF_0%,#EEF5FB_50%,#F8FBFF_100%)] py-14 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(30,90,168,0.12),transparent_34%),radial-gradient(circle_at_68%_58%,rgba(215,182,93,0.1),transparent_28%)]" />
        <div className="container-pad relative z-10 grid gap-7 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:gap-8">
          <div className="scroll-fade max-w-[620px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1E5AA8] sm:tracking-[0.3em]">
              ABOUT CADELL HEALTHCARE
            </p>
            <h2 className="text-3xl font-semibold leading-[1.04] tracking-normal text-[#0B2A4A] sm:text-4xl md:text-[56px]">
              The Cadell Promise: Quality, Integrity, Innovation.
            </h2>
            <div className="relative mt-7 h-[360px] w-full overflow-hidden rounded-3xl bg-transparent p-0 lg:hidden">
              <img
                src="/images/cadell-ecosystem.webp"
                alt="Cadell Healthcare quality ecosystem"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8FBFF]/10" />
            </div>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 md:text-lg md:leading-9">
              <p>
                Welcome to Cadell Healthcare, a dynamic, marketing-led pharmaceutical enterprise dedicated to improving patient outcomes through premium branded formulations.
              </p>
              <p>
                By strategically partnering with elite, regulatory-compliant contract manufacturing organizations (CMOs), we focus our core expertise on what we do best: extensive medical research curation, rigorous quality governance, and high-impact healthcare marketing.
              </p>
              <p>
                Every formulation that carries the Cadell name undergoes multi-tier quality testing to guarantee the highest bio-availability and purity. We don't just distribute medicine; we deliver a commitment to a healthier, more vibrant tomorrow.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0B2A4A] via-[#1E5AA8] to-[#1197B2] px-8 py-4 text-sm font-bold text-white shadow-[0_18px_48px_rgba(15,47,95,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(30,90,168,0.24)]"
            >
              Discover Our Vision
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="scroll-fade relative hidden h-full min-h-[520px] w-full overflow-hidden rounded-3xl bg-transparent p-0 lg:flex">
            <img
              src="/images/cadell-ecosystem.webp"
              alt="Cadell Healthcare quality ecosystem"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8FBFF]/10" />
          </div>
        </div>
      </section>

      <section className="cinematic-light pb-10 pt-12 md:pb-14 md:pt-16">
        <div className="container-pad relative z-10">
          <SectionHeader
            eyebrow="Product Portfolio"
            title="Our Therapeutic Focus Areas."
            text="Bridging clinical needs with high-efficacy patient solutions across major healthcare verticals."
          />
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="cinematic-bluewash pb-10 pt-14 md:pb-12 md:pt-16 lg:pb-14 lg:pt-20">
        <div className="container-pad relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionHeader
              eyebrow="Quality Governance & Partner Vetting"
              title="Uncompromising Standards in Every Batch."
              text="While Cadell Healthcare operates on a marketing and distribution model, our internal quality assurance team acts with absolute rigor. We vet our manufacturing partners through a stringent multi-point audit system, ensuring your health is never compromised."
            />
            <div className="rounded-[1.75rem] border border-white/70 bg-white/58 p-4 shadow-[0_22px_70px_rgba(15,47,95,0.11)] backdrop-blur-xl md:p-5">
              <div className="mb-4 flex flex-wrap gap-2.5">
                {['WHO-GMP Partnered', 'ISO Standards', 'Regulatory Compliant'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-bold text-[#1E5AA8] shadow-[0_8px_24px_rgba(15,47,95,0.06)]"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {badge}
                  </span>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {qualityCommitments.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="premium-card group relative overflow-hidden rounded-3xl border border-slate-100/70 bg-white/90 p-5 backdrop-blur-md transition-all duration-500"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-blue-600 transition-transform duration-500 group-hover:scale-y-100" />
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-500 group-hover:bg-blue-100">
                        <Icon className="h-6 w-6 text-blue-700 transition-all duration-500 group-hover:scale-110" />
                      </span>
                      <h3 className="text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
                      <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm font-semibold text-[#1E5AA8]">
            Committed to consistent quality and regulatory excellence.
          </p>
          <Link
            to="/quality"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#1E5AA8]/15 bg-white px-8 py-4 text-sm font-bold text-[#0B2A4A] shadow-xl shadow-blue-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E5AA8]/35 hover:text-[#1E5AA8]"
          >
            Our Quality Framework
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section id="franchise" className="signature-section py-16 md:py-24">
        <div className="container-pad relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1E5AA8] sm:tracking-[0.28em]">
              FRANCHISE OPPORTUNITIES
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#0B2A4A] md:text-5xl">
              Partner with Cadell Healthcare: Drive Growth Together.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              We are actively expanding our footprint across domestic markets. We invite passionate Pharma Distributors, Stockists, and PCD Franchise partners to lead our brands in their exclusive territories.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {franchiseCards.map((item) => (
              <article
                key={item.title}
                className="group flex min-h-full w-full overflow-hidden rounded-3xl border border-slate-100/80 bg-white shadow-[0_20px_60px_rgba(15,47,95,0.1)] transition-all duration-500 hover:-translate-y-2.5 hover:border-cyan-100 hover:shadow-[0_34px_90px_rgba(15,47,95,0.17)]"
              >
                <div className="flex w-full flex-col">
                  <div className="relative h-[320px] overflow-hidden rounded-t-3xl bg-blue-50">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width="1200"
                      height="1200"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-100 transition-all duration-500 group-hover:scale-105"
                      style={{ imageRendering: 'auto', objectPosition: item.position }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#1E5AA8] to-cyan-400" />
                    <h3 className="text-xl font-semibold leading-snug text-[#0B2A4A]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={franchiseWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-400/20"
            >
              Apply for Franchise / Distribution
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad cinematic-bluewash">
        <div className="container-pad relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Operating Model"
            title="Healthcare engagement guided by quality, clarity, and care."
            text="Every interaction is designed around clear product understanding, responsible communication, quality standards, and professional follow-through."
          />
          <div className="space-y-6">
            {workflow.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="premium-card group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-100/70 bg-white/88 p-6 backdrop-blur-md transition-all duration-500"
                >
                  <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-blue-600 transition-transform duration-500 group-hover:scale-y-100" />
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-500 group-hover:bg-blue-100">
                      <Icon className="h-7 w-7 text-blue-700 transition-all duration-500 group-hover:scale-110 group-hover:animate-pulse" />
                    </span>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-slate-900">{item.title}</h3>
                      <p className="leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
