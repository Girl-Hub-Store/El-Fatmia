const features = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'خامات عالية الجودة',
    desc: 'نستخدم أفضل الخامات المستوردة التي تجمع بين الجمال والمتانة وتدوم لسنوات طويلة.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'تركيب احترافي',
    desc: 'فريق متخصص من المهندسين والفنيين يضمن تركيباً مثالياً في أقل وقت وبأعلى جودة.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L5 7v8c0 5.5 3.9 9 9 11 5.1-2 9-5.5 9-11V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'ضمان على المنتجات',
    desc: 'نقدم ضماناً شاملاً على جميع منتجاتنا لمدة سنة كاملة مع دعم ما بعد البيع.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 23c0-4 4-7 9-7s9 3 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 16l2 2-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'خدمة ما بعد البيع',
    desc: 'دعم دائم لعملائنا ما بعد التركيب لضمان رضاهم التام وحل أي استفسار بسرعة.',
  },
];

export default function WhyFatimia() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#0F303A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="text-xs font-bold tracking-[4px] uppercase mb-3 block"
            style={{ color: '#D4AF7C' }}
          >
            مميزاتنا
          </span>
          <h2
            className="font-black"
            style={{ color: '#FFFFFF', fontSize: 'clamp(26px, 4vw, 42px)' }}
          >
            ليه تختار الفاطمية؟
          </h2>
          <p className="mt-3 font-medium max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
            نحن في الفاطمية نلتزم بتقديم أفضل الحلول وأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((f) => (
            <div
              key={f.num}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Number */}
              <span
                className="absolute top-5 left-5 font-black text-3xl leading-none select-none"
                style={{ color: 'rgba(212,175,124,0.12)', fontFamily: 'Cairo, sans-serif' }}
              >
                {f.num}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-champagne/20"
                style={{ backgroundColor: 'rgba(212,175,124,0.1)', color: '#D4AF7C' }}
              >
                {f.icon}
              </div>

              {/* Gold accent line */}
              <div
                className="w-8 h-0.5 mb-4"
                style={{ backgroundColor: '#D4AF7C', opacity: 0.6 }}
              />

              {/* Title */}
              <h3
                className="font-bold mb-2"
                style={{ color: '#FFFFFF', fontSize: '17px' }}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
