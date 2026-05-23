import { ArrowRight, ChevronLeft, ChevronRight, Send, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { productCatalog } from '../data/productCatalog.generated.js';

const categoryFilters = [
  { slug: 'all', label: 'All' },
  { slug: 'cardiac', label: 'Cardiac Care' },
  { slug: 'general-medicine', label: 'General Medicine' },
  { slug: 'orthopedic', label: 'Orthopedic' },
  { slug: 'gynaecology', label: 'Gynaecology' },
  { slug: 'diabetic', label: 'Diabetic Care' },
];

const categoryProductCopy = {
  cardiac: 'Supports cardiovascular care with quality-focused formulation for healthcare needs.',
  diabetic: 'Supports blood sugar management and metabolic wellness for diabetic care needs.',
  'general-medicine': 'Supports everyday clinical care, recovery, and symptom management needs.',
  gynaecology: 'Supports women’s health, hormonal wellness, and reproductive care needs.',
  orthopedic: 'Supports bone, joint, mobility, and musculoskeletal recovery care.',
};

const cardiacProductCopy = {
  'Amlosure AT': 'Supports blood pressure management and cardiovascular stability for long-term cardiac care.',
  'Cilicad 5': 'Calcium channel support designed for controlled hypertension management in adults.',
  'Cilicad 10': 'Helps regulate elevated blood pressure with dependable cardiovascular support.',
  'Cilicad T': 'Dual-action cardiac formulation for hypertension control and vascular support.',
  'Olmicheck 20': 'Angiotensin receptor support formulated for daily blood pressure management.',
  'Olmicheck 40': 'Higher-strength cardiovascular support for advanced hypertension management.',
  'Olmicheck H': 'Combination therapy designed for stronger blood pressure regulation and vascular protection.',
  'Ontel 20': 'Helps maintain healthy blood pressure and long-term heart health.',
  'Ontel 40': 'Higher-strength telmisartan support for sustained hypertension control and vascular wellness.',
  'Ontel AM': 'Combination blood pressure support for vascular relaxation and daily cardiovascular stability.',
  'Ontel AMH': 'Triple-action hypertension support for stronger pressure control and fluid balance.',
  'Ontel H': 'Hypertension care support combining vascular protection with diuretic-assisted pressure management.',
  'Powermet AM': 'Cardiac combination support for blood pressure control, heart rate balance, and vascular care.',
  'Powermet XL 25': 'Beta-blocker support formulated for heart rhythm balance and blood pressure management.',
  'Powermet XL 50': 'Advanced beta-blocker formulation for cardiovascular stability and daily cardiac care.',
  'Rosucad 5': 'Supports cholesterol management and cardiovascular risk reduction.',
  'Rosucad 10': 'Higher-strength lipid management support for heart and vascular wellness.',
  'Rosucad 10 F': 'Combination lipid-control formulation designed for cholesterol and triglyceride balance.',
  'Rosucad Gold 10': 'Advanced cardiac protection support combining lipid control with antiplatelet wellness.',
  'Rosucad Gold 20': 'Higher-intensity cardiovascular protection support for lipid management and heart-risk care.',
  'Thyrovo 12.5': 'Low-dose thyroid hormone support for metabolic balance that contributes to cardiovascular wellness.',
  'Thyrovo 25': 'Daily thyroid support for endocrine balance and steady cardiometabolic function.',
  'Thyrovo 50': 'Higher-strength thyroid care support for metabolic regulation and long-term wellness.',
};

const generalMedicineProductCopy = {
  'Ambright EX': 'Supports respiratory comfort and recovery during cough, cold, and chest congestion care.',
  'Ambright LX': 'Helps manage productive cough and airway irritation with clinically focused respiratory support.',
  Azicad: 'Antibiotic support for bacterial infection management across routine clinical treatment needs.',
  'Cefect 200': 'Cephalosporin antibiotic support for infection care and physician-directed recovery plans.',
  'Cefect O': 'Combination infection-support formulation for broader antibacterial coverage in clinical care.',
  'Cetwet M': 'Supports allergy and cold symptom relief with antihistamine-based respiratory comfort.',
  'Pentodell 40': 'Acidity and gastric protection support for daily digestive and clinical treatment needs.',
  'Pentodell DSR': 'Gastrointestinal support for acid reflux, nausea, and smoother digestive recovery.',
  'Rabirap D': 'Helps manage acidity and reflux discomfort with digestive motility and gastric care support.',
  'Thyrovo 12.5': 'Low-strength thyroid support for hormone balance and daily endocrine wellness.',
  'Thyrovo 25': 'Thyroid hormone support designed for consistent daily metabolic balance.',
  'Thyrovo 50': 'Higher-strength thyroid care formulation for ongoing metabolic and endocrine support.',
};

const orthopedicProductCopy = {
  'Calcilow XT': 'Supports bone strength and calcium replenishment for orthopedic recovery and wellness.',
  'Etocad 90': 'Anti-inflammatory pain support for joint stiffness, swelling, and musculoskeletal discomfort.',
  'Etocad TH4': 'Combination support for muscle spasm relief, inflammation control, and mobility recovery.',
  Etocad: 'Helps manage orthopedic pain and inflammation for joint and soft-tissue comfort.',
  'Onenac P': 'Pain and fever support for musculoskeletal discomfort and post-strain recovery needs.',
  'Onenac SP': 'Inflammation and swelling support for joint pain, injury recovery, and mobility care.',
  'Onenac TH 4': 'Muscle relaxant support for spasms, stiffness, and orthopedic pain management.',
  'Onenac TH 8': 'Higher-strength spasm and pain support for musculoskeletal mobility restoration.',
  'Rabirap D': 'Gastric protection support often paired with pain-care regimens for digestive comfort.',
  'Rejufast OD': 'Nerve wellness support for musculoskeletal recovery and daily mobility care.',
  'Rejufast PG': 'Neuropathic pain support for nerve-related discomfort and orthopedic recovery needs.',
};

const diabeticProductCopy = {
  'Accuglim M1 Fort': 'Combination glucose support for sustained blood sugar control and metabolic balance.',
  'Accuglim M1': 'Daily diabetic care support for blood sugar regulation and insulin sensitivity.',
  'Accuglim M2 Fort': 'Enhanced combination support for stronger glycemic control in diabetes management.',
  'Accuglim M2': 'Blood sugar management support formulated for ongoing metabolic wellness.',
  'Accuglim MP1': 'Triple-combination diabetic support for glucose control and metabolic response.',
  'Accuglim MP2': 'Advanced glycemic support designed for stronger blood sugar management needs.',
  'Dapadel M': 'Dual-action glucose support for diabetic wellness and cardiometabolic balance.',
  Dapadel: 'SGLT2-based support for blood sugar management and metabolic health.',
  'Empavita 10': 'Glucose control support designed to aid diabetic and cardiometabolic wellness.',
  'Empavita 25': 'Higher-strength glucose support for daily diabetes and metabolic management.',
  'Empavita L5': 'Combination diabetic care support for glucose balance and insulin response.',
  'Empavita M 12.5': 'Metabolic support formulation for blood sugar control and diabetic wellness.',
  'Rejufast OD': 'Nerve wellness support for diabetic neuropathy care and metabolic recovery.',
  'Rejufast PG': 'Neuropathic discomfort support for diabetic nerve health and daily wellness.',
  'Sitapil 50': 'DPP-4 based support for glucose regulation and pancreatic response in diabetic care.',
  'Sitapil 100': 'Higher-strength glucose regulation support for long-term diabetes management.',
  'Sitapil D': 'Dual diabetic care support for blood sugar balance and metabolic control.',
  'Sitapil DM 500': 'Combination glucose management support for daily diabetes treatment plans.',
  'Sitapil GM Fort': 'Comprehensive glycemic support for blood sugar control and metabolic stability.',
  'Sitapil M 50': 'Combination diabetic support for glucose balance and insulin sensitivity.',
  'Tenlicad M 20': 'DPP-4 and metformin support for blood sugar management and metabolic wellness.',
  'Vilapil 50': 'Glucose regulation support designed for daily diabetes care and metabolic balance.',
  'Vilapil 100 SR': 'Sustained-release diabetic support for consistent glucose management.',
  'Vilapil D': 'Dual-action diabetes support for glucose balance and metabolic control.',
  'Vilapil M': 'Combination formulation supporting blood sugar control and insulin response.',
  'Volpost 0.2': 'Post-meal glucose support for carbohydrate control and diabetic wellness.',
  'Volpost 0.3': 'Higher-strength postprandial glucose support for meal-time sugar management.',
  'Volpost GM 1': 'Combination diabetic care support for fasting and post-meal glucose balance.',
  'Volpost GM 2': 'Enhanced combination support for stronger daily blood sugar management.',
  'Volpost M 0.2': 'Meal-time glucose support with metabolic balance for diabetic care.',
  'Volpost M 0.3': 'Advanced post-meal glucose management support for diabetic wellness.',
};

const gynaecologyProductCopy = {
  'Cadofer XT': 'Advanced iron and folate support for women’s nutritional wellness and pregnancy care.',
  Cadofer: 'Iron support formulated for women’s health, haemoglobin balance, and clinical recovery needs.',
  'Calcilow XT': 'Calcium and vitamin support for bone strength during women’s wellness and pregnancy care.',
  'Fitpro Mom': 'Maternal nutrition support designed for pregnancy wellness and daily micronutrient balance.',
  'Thyrovo 25': 'Thyroid hormone support for women’s endocrine balance and reproductive wellness.',
  'Thyrovo 50': 'Higher-strength thyroid care support for hormonal balance and long-term women’s health.',
};

const productCopyByCategory = {
  cardiac: cardiacProductCopy,
  diabetic: diabeticProductCopy,
  gynaecology: gynaecologyProductCopy,
  'general-medicine': generalMedicineProductCopy,
  orthopedic: orthopedicProductCopy,
};

const getProductDescription = (product, category) => {
  return productCopyByCategory[category.slug]?.[product.name] ?? categoryProductCopy[category.slug];
};

const getProductWhatsAppUrl = (productName) => {
  const message = `Hello Cadell Healthcare,
I would like to enquire about this pharmaceutical product.

Product: ${productName}

Please share availability and details.`;

  return `https://wa.me/919060644409?text=${encodeURIComponent(message)}`;
};

const buildCatalog = () =>
  categoryFilters
    .filter((category) => category.slug !== 'all')
    .flatMap((category) =>
      (productCatalog[category.slug]?.products ?? []).map((product) => ({
        ...product,
        category: category.label,
        categorySlug: category.slug,
        description: getProductDescription(product, category),
      })),
    );

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    return productCatalog[category] ? category : 'all';
  });
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const allProducts = useMemo(() => buildCatalog(), []);
  const filteredProducts = useMemo(
    () =>
      activeCategory === 'all'
        ? allProducts
        : allProducts.filter((product) => product.categorySlug === activeCategory),
    [activeCategory, allProducts],
  );
  const activeProduct = activeProductIndex === null ? null : filteredProducts[activeProductIndex];

  const setFilter = (category) => {
    setActiveCategory(category);
    setActiveProductIndex(null);
  };

  const showPreviousProduct = () => {
    setActiveProductIndex((index) => (index === null ? null : (index - 1 + filteredProducts.length) % filteredProducts.length));
  };

  const showNextProduct = () => {
    setActiveProductIndex((index) => (index === null ? null : (index + 1) % filteredProducts.length));
  };

  return (
    <main className="page-shell">
      <section className="relative overflow-hidden bg-[#0B2A4A] pt-36 text-white">
        <div className="absolute inset-0 soft-grid opacity-15" />
        <div className="container-pad relative z-10 pb-16 pt-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-sky-200">
            Cadell Product Catalog
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">Our Products</h1>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Quality Products', 'Healthcare Solutions', 'Patient-Focused Care'].map((metric) => (
              <span
                key={metric}
                className="inline-flex items-center rounded-full border border-blue-300/20 bg-blue-800/30 px-4 py-2 text-xs font-bold tracking-[0.14em] text-sky-100 shadow-lg shadow-blue-950/10 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {metric}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-50 md:text-lg">
            A trusted portfolio of healthcare products focused on quality pharmaceutical solutions and patient care.
          </p>
        </div>
      </section>

      <section className="cinematic-light py-8">
        <div className="container-pad relative z-10 flex flex-wrap gap-3">
          {categoryFilters.map((category) => {
            const isActive = activeCategory === category.slug;
            const count =
              category.slug === 'all'
                ? allProducts.length
                : allProducts.filter((product) => product.categorySlug === category.slug).length;
            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => setFilter(category.slug)}
                className={`rounded-full border px-5 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-md ${
                  isActive
                    ? 'border-[#0B2A4A] bg-[#0B2A4A] text-white shadow-lg shadow-blue-950/15'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-[#0B2A4A]'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span>{category.label}</span>
                  <span className="text-[11px] font-semibold text-current/70">({count})</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="cinematic-bluewash py-16 md:py-20">
        <div className="container-pad relative z-10">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1E5AA8] sm:tracking-[0.28em]">
                Product Portfolio
              </p>
              <h2 className="text-2xl font-semibold text-[#0B2A4A] sm:text-3xl md:text-5xl">
                {activeCategory === 'all'
                  ? 'Complete Product Catalog'
                  : `${productCatalog[activeCategory].label} Products`}
              </h2>
            </div>
            <p className="hidden text-sm font-semibold text-slate-500 md:block">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <article
                key={`${product.categorySlug}-${product.name}`}
                className="premium-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-100/70 bg-white/92 backdrop-blur-sm transition-all duration-500 hover:border-sky-100"
              >
                <button
                  type="button"
                  onClick={() => setActiveProductIndex(index)}
                  className="relative flex h-[230px] w-full items-center justify-center overflow-hidden bg-[#F5F8FC] outline-none focus-visible:ring-4 focus-visible:ring-sky-100 sm:h-[285px]"
                  aria-label={`Preview ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-125 object-cover opacity-14 blur-xl"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 h-full w-full scale-[1.35] object-contain object-center transition duration-700 group-hover:scale-105 sm:scale-[1.65]"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                </button>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-4 inline-flex w-fit rounded-full bg-[#1E5AA8]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B2A4A] sm:text-xs sm:tracking-[0.18em]">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-semibold text-[#0B2A4A] transition-colors group-hover:text-[#1E5AA8] sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {product.description}
                  </p>
                  <a
                    href={getProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-6 inline-flex w-full translate-y-1 items-center justify-center gap-2 rounded-xl bg-[#0F9D76] px-5 py-3 font-bold text-white opacity-95 shadow-lg shadow-emerald-800/15 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0 hover:bg-[#0b8766] hover:shadow-xl hover:shadow-emerald-500/25 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Send className="h-5 w-5" />
                    Request Availability
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveProductIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B2A4A] shadow-xl transition hover:bg-sky-50 md:right-8 md:top-8"
            aria-label="Close product preview"
            onClick={() => setActiveProductIndex(null)}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B2A4A] shadow-xl transition hover:bg-sky-50 md:inline-flex"
            aria-label="Previous product"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousProduct();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="modal-pop w-full max-w-5xl rounded-3xl bg-white p-4 shadow-2xl md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="max-h-[72vh] w-full object-contain"
            />
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E5AA8]">
                  {activeProduct.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-[#0B2A4A]">{activeProduct.name}</h3>
              </div>
              <div className="flex gap-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0B2A4A]"
                  aria-label="Previous product"
                  onClick={showPreviousProduct}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0B2A4A]"
                  aria-label="Next product"
                  onClick={showNextProduct}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B2A4A] shadow-xl transition hover:bg-sky-50 md:inline-flex"
            aria-label="Next product"
            onClick={(event) => {
              event.stopPropagation();
              showNextProduct();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </main>
  );
}
