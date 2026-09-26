import { useState, useEffect } from 'react';
import type { Page } from '../App';

interface HeroProps {
  navigateTo: (p: Page) => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1772112334845-86016056137b?w=1400&h=800&fit=crop&auto=format',
    alt: 'غرفة معيشة فاخرة بستائر أنيقة',
  },
  {
    image: 'https://images.unsplash.com/photo-1778731660430-fca071797515?w=1400&h=800&fit=crop&auto=format',
    alt: 'غرفة معيشة عصرية مع ستائر راقية',
  },
  {
    image: 'https://images.unsplash.com/photo-1779505576192-803dd8c9b55a?w=1400&h=800&fit=crop&auto=format',
    alt: 'مساحة جلوس فاخرة مع إضاءة طبيعية',
  },
];

export default function Hero({ navigateTo }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 'calc(100svh - 0px)' }}>
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(10,25,30,0.92) 0%, rgba(10,25,30,0.55) 45%, rgba(10,25,30,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end h-full min-h-[100svh] pb-16 md:pb-24 px-5 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold"
            style={{ backgroundColor: 'rgba(212,175,124,0.2)', color: '#D4AF7C', border: '1px solid rgba(212,175,124,0.35)' }}
          >
            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse inline-block" style={{ backgroundColor: '#D4AF7C' }}></span>
            منذ ١٩٩٥ • نصنع الأناقة في كل منزل
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-tight mb-5"
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(32px, 6vw, 72px)',
              lineHeight: 1.15,
            }}
          >
            ستائر تضيف لمسة جمالية
            <br />
            <span style={{ color: '#D4AF7C' }}>لكل مساحة</span>
          </h1>

          {/* Supporting text */}
          <p
            className="font-medium mb-8 md:mb-10"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'clamp(15px, 2vw, 19px)',
              letterSpacing: '1px',
            }}
          >
            جودة عالية&nbsp;&nbsp;•&nbsp;&nbsp;خامات مميزة&nbsp;&nbsp;•&nbsp;&nbsp;تركيب احترافي
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="px-7 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#D4AF7C', color: '#0F303A' }}
            >
              اطلب عرض سعر
            </button>
            <button
              onClick={() => navigateTo('products')}
              className="px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:bg-white/15 active:scale-95"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255,255,255,0.5)',
              }}
            >
              تصفح منتجاتنا
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                backgroundColor: i === current ? '#D4AF7C' : 'rgba(255,255,255,0.4)',
              }}
              aria-label={`الشريحة ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
