import { useState } from 'react';
import products from '../data/products';

interface QuoteSectionProps {
  fullPage?: boolean;
}

export default function QuoteSection({ fullPage = false }: QuoteSectionProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', phone: '', product: '', message: '' });
    }
  };

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: fullPage ? '#F7F5EF' : 'rgba(15,48,58,0.04)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: image + WhatsApp */}
          <div className="flex flex-col gap-5">
            {/* Image */}
            <div
              className="relative flex-1 overflow-hidden rounded-3xl min-h-[280px]"
              style={{ backgroundColor: '#e0dbd0' }}
            >
              <img
                src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=700&h=500&fit=crop&auto=format"
                alt="استشارة الستائر"
                className="w-full h-full object-cover"
              />
              {/* Overlay text */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(15,48,58,0.85) 0%, rgba(15,48,58,0.3) 60%, transparent 100%)',
                }}
              >
                <h3
                  className="font-black mb-2"
                  style={{ color: '#FFFFFF', fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: 1.25 }}
                >
                  هل تحتاج إلى استشارة
                  <br />
                  أو عرض سعر؟
                </h3>
                <p className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  تواصل معنا وسنساعدك في اختيار أفضل حل لمساحتك.
                </p>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/201012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            >
              <WhatsAppIcon />
              <span>تواصل معنا عبر واتساب</span>
            </a>
          </div>

          {/* Right: form */}
          <div
            className="rounded-3xl p-6 md:p-8 flex flex-col"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 32px rgba(15,48,58,0.08)',
            }}
          >
            {/* Form header */}
            <div className="mb-6">
              <span
                className="text-xs font-bold tracking-[4px] uppercase mb-2 block"
                style={{ color: '#D4AF7C' }}
              >
                تواصل معنا
              </span>
              <h3
                className="font-black"
                style={{ color: '#0F303A', fontSize: 'clamp(20px, 3vw, 28px)' }}
              >
                اطلب عرض سعر
              </h3>
              <p className="mt-1.5 text-sm font-medium" style={{ color: '#888' }}>
                أملأ النموذج وسنرد عليك في أقرب وقت ممكن
              </p>
            </div>

            {submitted ? (
              <div
                className="flex-1 flex flex-col items-center justify-center gap-4 rounded-2xl p-8 text-center"
                style={{ backgroundColor: 'rgba(15,48,58,0.04)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212,175,124,0.15)' }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l5 5 11-11" stroke="#D4AF7C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg" style={{ color: '#0F303A' }}>تم إرسال طلبك!</h4>
                <p className="text-sm" style={{ color: '#888' }}>سنتواصل معك في أقرب وقت ممكن</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                <FormInput
                  label="الاسم بالكامل"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3 15c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  }
                />

                <FormInput
                  label="رقم الموبايل"
                  type="tel"
                  placeholder="01X XXXX XXXX"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M13 10.5c-.5-.5-1.2-.5-1.7 0l-.8.8c-1.1-.6-2.2-1.7-2.8-2.8l.8-.8c.5-.5.5-1.2 0-1.7L7.3 4.8c-.5-.5-1.2-.5-1.7 0L4.5 5.9c-.3.3-.4.7-.3 1.1.5 2.2 2.6 4.3 4.8 4.8.4.1.8 0 1.1-.3l1.1-1.1c.5-.5.5-1.2.3-1.7z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  }
                />

                {/* Product select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: '#0F303A' }}>
                    اختيار المنتج
                  </label>
                  <div className="relative">
                    <select
                      value={form.product}
                      onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                      className="w-full appearance-none px-4 py-3.5 rounded-xl text-sm font-medium pr-4 pl-10 cursor-pointer focus:outline-none transition-all"
                      style={{
                        backgroundColor: '#F7F5EF',
                        border: '1.5px solid rgba(15,48,58,0.12)',
                        color: form.product ? '#2E2E2E' : '#999',
                        fontFamily: 'Cairo, sans-serif',
                        direction: 'rtl',
                      }}
                    >
                      <option value="">اختر نوع الستارة</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#999' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" style={{ color: '#0F303A' }}>
                    رسالتك
                  </label>
                  <textarea
                    rows={4}
                    placeholder="اكتب رسالتك هنا..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-medium resize-none focus:outline-none transition-all"
                    style={{
                      backgroundColor: '#F7F5EF',
                      border: '1.5px solid rgba(15,48,58,0.12)',
                      color: '#2E2E2E',
                      fontFamily: 'Cairo, sans-serif',
                      lineHeight: 1.8,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-auto py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#0F303A', color: '#FFFFFF' }}
                >
                  إرسال الطلب ←
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold" style={{ color: '#0F303A' }}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none transition-all"
          style={{
            backgroundColor: '#F7F5EF',
            border: '1.5px solid rgba(15,48,58,0.12)',
            color: '#2E2E2E',
            fontFamily: 'Cairo, sans-serif',
            direction: type === 'tel' ? 'ltr' : 'rtl',
            textAlign: type === 'tel' ? 'right' : 'right',
          }}
        />
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: '#999' }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.08-1.12l-.292-.174-3.03.9.862-3.03-.174-.292A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.788-.222-.08-.384-.121-.545.121-.16.242-.626.788-.768.95-.141.161-.283.18-.525.06-.242-.121-1.02-.376-1.943-1.2-.718-.64-1.203-1.43-1.344-1.672-.141-.242-.015-.373.106-.494.11-.109.242-.283.363-.424.121-.141.16-.242.242-.404.08-.16.04-.302-.02-.424-.06-.121-.545-1.314-.748-1.8-.197-.472-.397-.408-.545-.415l-.464-.009a.888.888 0 00-.646.304c-.222.242-.848.828-.848 2.02s.868 2.345.99 2.506c.12.16 1.71 2.61 4.14 3.66.578.25 1.03.4 1.383.512.58.185 1.11.16 1.527.097.466-.07 1.432-.585 1.634-1.15.2-.565.2-1.05.141-1.15-.06-.1-.222-.161-.464-.282z" />
    </svg>
  );
}
