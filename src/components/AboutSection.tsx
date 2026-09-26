import type { Page } from '../App';

interface AboutSectionProps {
  navigateTo: (p: Page) => void;
  fullPage?: boolean;
}

const stats = [
  { value: '+٢٠', label: 'سنة خبرة' },
  { value: '+٥٠٠٠', label: 'مشروع منجز' },
  { value: '١٠٠٪', label: 'رضا العملاء' },
];

export default function AboutSection({ navigateTo, fullPage = false }: AboutSectionProps) {
  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: fullPage ? '#F7F5EF' : '#F7F5EF' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ aspectRatio: '4/3', backgroundColor: '#e0dbd0' }}
            >
              <img
                src="https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=700&h=500&fit=crop&auto=format"
                alt="الفاطمية للستائر"
                className="w-full h-full object-cover"
              />
              {/* Gold accent frame */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl"
                style={{ backgroundColor: '#D4AF7C', opacity: 0.2, zIndex: -1 }}
              />
            </div>

            {/* Floating stats card */}
            <div
              className="absolute bottom-6 left-6 right-6 md:-left-6 md:right-auto md:w-64 rounded-2xl p-5"
              style={{
                backgroundColor: '#0F303A',
                boxShadow: '0 8px 32px rgba(15,48,58,0.25)',
              }}
            >
              <div className="flex justify-between">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="font-black mb-0.5"
                      style={{ color: '#D4AF7C', fontSize: '20px', fontFamily: 'Cairo, sans-serif' }}
                    >
                      {s.value}
                    </div>
                    <div className="font-medium" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '11px' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <span
              className="text-xs font-bold tracking-[4px] uppercase"
              style={{ color: '#D4AF7C' }}
            >
              قصتنا
            </span>
            <h2
              className="font-black"
              style={{ color: '#0F303A', fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.2 }}
            >
              الفاطمية —
              <br />
              أكثر من مجرد ستائر
            </h2>
            <p
              className="leading-loose font-normal"
              style={{ color: '#555', fontSize: '15px', lineHeight: 1.9 }}
            >
              تأسست الفاطمية للستائر ولدينا خبرة طويلة في مجال تصميم وتصنيع وتركيب الستائر والبرادي،
              ونلتزم بتقديم أفضل الخامات وأعلى معايير الجودة لضمان رضا عملائنا في جميع أنحاء مصر.
            </p>
            <p
              className="leading-loose font-normal"
              style={{ color: '#555', fontSize: '15px', lineHeight: 1.9 }}
            >
              رؤيتنا أن نكون الخيار الأول لكل من يبحث عن الجودة والأناقة والاحترافية في مجال الستائر
              والبرادي في السوق المصرية.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { icon: '⬡', label: 'احترافية' },
                { icon: '◈', label: 'جودة' },
                { icon: '◉', label: 'خبرة' },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center"
                  style={{ backgroundColor: 'rgba(15,48,58,0.05)' }}
                >
                  <span style={{ fontSize: '22px', color: '#D4AF7C' }}>{b.icon}</span>
                  <span className="font-bold text-sm" style={{ color: '#0F303A' }}>{b.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigateTo('about')}
              className="self-start flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 mt-2"
              style={{ backgroundColor: '#0F303A', color: '#FFFFFF' }}
            >
              <span>اعرف المزيد</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
