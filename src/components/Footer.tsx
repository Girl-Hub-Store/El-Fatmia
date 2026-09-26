import { useState } from 'react';
import Logo from './Logo';
import type { Page } from '../App';

interface FooterProps {
  navigateTo: (p: Page) => void;
}

const quickLinks: { label: string; page: Page }[] = [
  { label: 'الرئيسية', page: 'home' },
  { label: 'المنتجات', page: 'products' },
  { label: 'من نحن', page: 'about' },
  { label: 'أعمالنا', page: 'projects' },
  { label: 'اتصل بنا', page: 'contact' },
];

const productLinks = [
  'ستائر بلاك أوت',
  'ستائر زيبرا',
  'ستائر صن سكرين',
  'ستائر رأسية',
  'ستائر معدنية',
  'ستائر خشبية',
  'ستائر بامبو',
];

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#0F303A', color: '#FFFFFF' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Column 1: Logo + about */}
          <div className="lg:col-span-1">
            <Logo white size="md" />
            <p className="mt-5 leading-loose font-normal text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 2 }}>
              الفاطمية للستائر — نقدم لك جميع حلول الستائر والبرادي بأعلى معايير الجودة والتصميم المصري الراقي.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {['facebook', 'instagram', 'youtube', 'tiktok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/15"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="font-bold mb-5" style={{ color: '#FFFFFF', fontSize: '15px' }}>
              روابط سريعة
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="text-sm font-medium transition-all duration-200 hover:text-champagne flex items-center gap-1.5 group"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#D4AF7C' }}
                    >
                      ›
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="font-bold mb-5" style={{ color: '#FFFFFF', fontSize: '15px' }}>
              منتجاتنا
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((name) => (
                <li key={name}>
                  <button
                    onClick={() => navigateTo('products')}
                    className="text-sm font-medium transition-all duration-200 hover:text-champagne flex items-center gap-1.5 group"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#D4AF7C' }}
                    >
                      ›
                    </span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold mb-5" style={{ color: '#FFFFFF', fontSize: '15px' }}>
              تواصل معنا
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+201012345678"
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(212,175,124,0.15)', color: '#D4AF7C' }}
                  >
                    <PhoneIcon />
                  </span>
                  <span style={{ direction: 'ltr' }}>010 1234 5678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@elfatimia.com"
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(212,175,124,0.15)', color: '#D4AF7C' }}
                  >
                    <EmailIcon />
                  </span>
                  info@elfatimia.com
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-3 text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(212,175,124,0.15)', color: '#D4AF7C' }}
                  >
                    <LocationIcon />
                  </span>
                  الجيزة — مصر
                </div>
              </li>
            </ul>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/201012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            >
              <WhatsAppIcon />
              <span>واتساب</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-xs font-medium text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © ٢٠٢٥ الفاطمية — جميع الحقوق محفوظة
          </p>
          <button
            className="text-xs font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            سياسة الخصوصية
          </button>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.5 9.2c-.4-.4-1-.4-1.4 0l-.7.7c-.9-.5-1.9-1.5-2.4-2.4l.7-.7c.4-.4.4-1 0-1.4L6.5 4.2c-.4-.4-1-.4-1.4 0l-.9 1c-.3.2-.4.6-.3 1 .4 1.9 2.2 3.7 4.1 4.1.4.1.7 0 1-.3l1-.9c.4-.5.4-1.1-.5-1.9z" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2 5.5l6 4 6-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.7 4.5 8.5 4.5 8.5s4.5-4.8 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.406 13.155c-.242-.121-1.432-.707-1.654-.788-.222-.08-.384-.121-.545.121-.16.242-.626.788-.768.95-.141.161-.283.18-.525.06-.242-.121-1.02-.376-1.943-1.2-.718-.64-1.203-1.43-1.344-1.672-.141-.242-.015-.373.106-.494.11-.109.242-.283.363-.424.121-.141.16-.242.242-.404.08-.16.04-.302-.02-.424-.06-.121-.545-1.314-.748-1.8-.197-.472-.397-.408-.545-.415l-.464-.009a.888.888 0 00-.646.304c-.222.242-.848.828-.848 2.02s.868 2.345.99 2.506c.12.16 1.71 2.61 4.14 3.66.578.25 1.03.4 1.383.512.58.185 1.11.16 1.527.097.466-.07 1.432-.585 1.634-1.15.2-.565.2-1.05.141-1.15-.06-.1-.222-.161-.464-.282z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'facebook') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
  if (name === 'instagram') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
  if (name === 'youtube') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
  if (name === 'tiktok') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z" />
    </svg>
  );
  return null;
}
