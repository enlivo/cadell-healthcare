import { ArrowRight, ClipboardCheck, Cross, MapPin, MessageCircle, PackageCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import CTASection from '../components/CTASection.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import TrustBar from '../components/TrustBar.jsx';
import { contact } from '../data/site.js';

const workflow = [
  {
    icon: ClipboardCheck,
    title: 'Requirement Mapping',
    text: 'Product, quantity, geography, and supply expectations are captured clearly before commitments are made.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-First Selection',
    text: 'Vendor and product decisions are guided by documentation, consistency, and practical market suitability.',
  },
  {
    icon: PackageCheck,
    title: 'Dependable Fulfillment',
    text: 'Orders are coordinated with attention to availability, dispatch timelines, and communication discipline.',
  },
];

const counters = [
  { value: 500, suffix: '+', label: 'Pharmacies Served' },
  { value: 100, suffix: '+', label: 'Healthcare Products' },
  { value: 8, suffix: '+', label: 'Product Categories' },
  { value: 0, suffix: '', label: 'Pan India Distribution', custom: 'Pan India' },
];

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
    <text x="52" y="38" font-family="Arial, sans-serif" font-size="10" fill="#607090">Quality Assured Supply</text>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fbff] via-[#f7fbfd] to-white px-0 pt-24 md:px-4 md:pt-28">
        <div
          className="absolute inset-0 bg-cover md:hidden"
          style={{
            backgroundImage: "url('/mobile-pharma-bg.jpg')",
            backgroundPosition: 'center right',
            filter: 'contrast(1.08) saturate(1.08)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.88)_38%,rgba(255,255,255,0.68)_66%,rgba(255,255,255,0.3)_100%)] md:hidden" />
        <div className="absolute inset-0 hidden soft-grid opacity-60 md:block" />
        <div className="absolute left-0 top-24 hidden h-72 w-72 rounded-full bg-sky-200/30 blur-3xl md:block" />
        <div className="absolute right-0 top-40 hidden h-96 w-96 rounded-full bg-blue-200/40 blur-3xl md:block" />
        <div className="relative z-10 block overflow-hidden md:hidden">
          <div className="relative z-10 px-6 pb-12 pt-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2">
              <span className="text-xs font-semibold tracking-wider text-blue-700">
                PHARMA DISTRIBUTION & HEALTHCARE SOLUTIONS
              </span>
            </div>
            <h1 className="mb-7 max-w-[11ch] text-[42px] font-bold leading-[1.08] text-[#0B2A4A]">
              Enterprise-grade healthcare supply for modern pharma trade.
            </h1>
            <p className="mb-9 text-lg leading-9 text-slate-700">
              Cadell Healthcare supports pharmacies, hospitals, distributors,
              and healthcare buyers with quality-led product access,
              dependable coordination, and partnership-first distribution.
            </p>
            <div className="mb-9 flex flex-col gap-4">
              <Link
                to="/products"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Portfolio
                <ArrowRight size={18} />
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-blue-700 bg-blue-50 px-8 py-4 font-semibold text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Send Enquiry
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {counters.map((counter) =>
                counter.custom ? (
                  <div key={counter.label} className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-lg shadow-blue-950/5">
                    <strong className="flex items-center gap-2 text-xl font-semibold text-[#0B2A4A]">
                      <MapPin className="h-5 w-5 text-[#1E5AA8]" />
                      {counter.custom}
                    </strong>
                    <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      {counter.label}
                    </span>
                  </div>
                ) : (
                  <AnimatedCounter key={counter.label} {...counter} />
                ),
              )}
            </div>
          </div>
        </div>
        <div
          className="relative z-10 mx-auto hidden max-w-[1320px] overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 bg-cover bg-center px-4 pb-6 pt-7 shadow-2xl shadow-blue-950/8 backdrop-blur sm:px-5 md:block md:rounded-[2.5rem] md:bg-none md:px-8 md:pb-8 lg:px-10"
        >
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E5AA8] shadow-sm sm:text-xs sm:tracking-[0.24em]">
              <Cross className="h-4 w-4" />
              <span className="min-w-0">Pharma Distribution & Healthcare Solutions</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] text-[#0B2A4A] sm:text-5xl md:text-6xl xl:text-7xl">
              Enterprise-grade healthcare supply for modern pharma trade.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Cadell Healthcare supports pharmacies, hospitals, distributors, and healthcare buyers with
              quality-led product access, dependable coordination, and partnership-first distribution.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row md:mt-8">
              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-700/25 sm:w-auto"
              >
                View Portfolio
                <ArrowRight size={18} />
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-700 bg-blue-50 px-8 py-4 text-sm font-bold text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-lg sm:w-auto"
              >
                <MessageCircle size={18} />
                Send Enquiry
              </a>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {counters.map((counter) =>
                counter.custom ? (
                  <div key={counter.label} className="rounded-2xl border border-white/70 bg-white p-4 shadow-lg shadow-blue-950/5 sm:p-5">
                    <strong className="flex items-center gap-2 text-2xl font-semibold text-[#0B2A4A] md:text-3xl">
                      <MapPin className="h-6 w-6 text-[#1E5AA8]" />
                      {counter.custom}
                    </strong>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      {counter.label}
                    </span>
                  </div>
                ) : (
                  <AnimatedCounter key={counter.label} {...counter} />
                ),
              )}
            </div>
          </div>
          <div className="relative mt-6 hidden min-h-[220px] sm:min-h-[380px] md:block lg:mt-0 lg:min-h-full">
            <div
              className="hero-float relative h-full min-h-[220px] overflow-hidden rounded-[22px] shadow-2xl shadow-blue-950/12 sm:min-h-[380px] sm:rounded-[24px] lg:min-h-full"
              style={{ background: 'linear-gradient(145deg, #e8f4f0 0%, #ddeef8 50%, #e4f0f8 100%)' }}
            >
              <img
                src="/images/hero/hero-pharma-bg.jpg"
                alt="Cadell Healthcare pharmaceutical supply"
                className="absolute inset-0 hidden h-full w-full rounded-[24px] object-cover object-center contrast-[1.05] saturate-[1.05] md:block"
              />
              <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(135deg,#EAF4FF_0%,#DCEBFA_45%,#F5F8FC_100%)] md:hidden" />
              <svg
                className="absolute inset-0 h-full w-full opacity-35 md:hidden"
                viewBox="0 0 420 220"
                fill="none"
                aria-hidden="true"
              >
                <path d="M28 52H392M28 112H392M28 172H392M74 20V200M158 20V200M242 20V200M326 20V200" stroke="#1E5AA8" strokeWidth="1" strokeOpacity="0.22" />
                <path d="M72 128L132 90L196 122L258 78L334 116" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                {[72, 132, 196, 258, 334].map((cx, index) => (
                  <circle
                    key={cx}
                    cx={cx}
                    cy={[128, 90, 122, 78, 116][index]}
                    r="13"
                    fill="white"
                    stroke="#1E5AA8"
                    strokeWidth="3"
                  />
                ))}
                <circle cx="336" cy="58" r="42" fill="#38BDF8" fillOpacity="0.18" />
                <circle cx="92" cy="178" r="54" fill="#1E5AA8" fillOpacity="0.1" />
                <path d="M318 162H374M346 134V190" stroke="#0B2A4A" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.22" />
              </svg>
              <div className="absolute right-3 top-3 rounded-full border border-white/45 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0B2A4A] shadow-xl shadow-blue-950/15 backdrop-blur sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
                100+ Products
              </div>
              <div className="absolute bottom-5 left-5 hidden rounded-full border border-white/45 bg-[#0B2A4A]/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-blue-950/15 backdrop-blur sm:block">
                Trusted Healthcare Supply
              </div>
            </div>
          </div>
          </div>
          <div className="mt-6 md:mt-4">
            <TrustBar />
          </div>
        </div>
      </section>

      <section className="bg-white pb-10 pt-12 md:pb-14 md:pt-16">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Product Portfolio"
            title="Pharmaceutical categories presented with enterprise clarity."
            text="Cadell Healthcare works across tablets, capsules, syrups, injections, nutraceuticals, diabetic care, cardiac care, and general healthcare products."
          />
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Operating Model"
            title="Corporate supply discipline from enquiry to dispatch."
            text="Every interaction is designed around clear requirements, responsible sourcing, realistic availability commitments, and professional follow-through."
          />
          <div className="space-y-6">
            {workflow.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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
