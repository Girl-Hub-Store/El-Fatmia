import { useState, useEffect } from 'react';
import Logo from './Logo';
import type { Page } from '../App';

interface HeaderProps {
  page: Page;
  navigateTo: (p: Page) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'الرئيسية', page: 'home' },
  { label: 'المنتجات', page: 'products' },
  { label: 'من نحن', page: 'about' },
  { label: 'أعمالنا', page: 'projects' },
  { label: 'اتصل بنا', page: 'contact' },
];

export default function Header({ page, navigateTo, menuOpen, setMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(247,245,239,0.97)' : '#F7F5EF',
          boxShadow: scrolled ? '0 2px 20px rgba(15,48,58,0.08)' : '0 1px 0 rgba(15,48,58,0.08)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - right side in RTL */}
            <button onClick={() => navigateTo('home')} className="flex-shrink-0 focus:outline-none">
              <Logo size="md" />
            </button>

            {/* Desktop nav - center */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigateTo(item.page)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-deep-teal/5"
                  style={{
                    color: page === item.page ? '#0F303A' : '#555555',
                    fontWeight: page === item.page ? 700 : 600,
                    borderBottom: page === item.page ? '2px solid #D4AF7C' : '2px solid transparent',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* WhatsApp icon */}
              <a
                href="https://wa.me/201012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-green-50"
                style={{ color: '#25D366' }}
                title="تواصل واتساب"
              >
                <WhatsAppIcon size={22} />
              </a>

              {/* CTA button */}
              <button
                onClick={() => navigateTo('contact')}
                className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: '#0F303A',
                  color: '#FFFFFF',
                }}
              >
                اطلب عرض سعر
              </button>
            </div>

            {/* Mobile left actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-deep-teal/5"
                style={{ color: '#0F303A' }}
                aria-label="بحث"
              >
                <SearchIcon />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-deep-teal/5"
                style={{ color: '#0F303A' }}
                aria-label="القائمة"
              >
                {menuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        style={{ backgroundColor: 'rgba(15,48,58,0.5)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm md:hidden transition-transform duration-300 ease-in-out flex flex-col`}
        style={{
          backgroundColor: '#0F303A',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <XIcon />
          </button>
          <Logo white size="md" />
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-5 py-6 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className="flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-200 text-right"
                style={{
                  backgroundColor: page === item.page ? 'rgba(212,175,124,0.15)' : 'transparent',
                  color: page === item.page ? '#D4AF7C' : 'rgba(255,255,255,0.85)',
                  fontWeight: page === item.page ? 700 : 500,
                  fontSize: '17px',
                }}
              >
                <span style={{ color: '#D4AF7C', opacity: page === item.page ? 1 : 0 }}>›</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-5 pb-8 pt-4 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={() => navigateTo('contact')}
            className="w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-95"
            style={{ backgroundColor: '#D4AF7C', color: '#0F303A', fontSize: '16px' }}
          >
            اطلب عرض سعر
          </button>
          <a
            href="https://wa.me/201012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl font-semibold text-center flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF', fontSize: '15px' }}
          >
            <WhatsAppIcon size={20} />
            <span>تواصل معنا عبر واتساب</span>
          </a>
          <div className="flex items-center justify-center gap-4 pt-2">
            {['facebook', 'instagram', 'youtube', 'tiktok'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white/80 hover:bg-white/10 transition-colors"
              >
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.08-1.12l-.292-.174-3.03.9.862-3.03-.174-.292A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.788-.222-.08-.384-.121-.545.121-.16.242-.626.788-.768.95-.141.161-.283.18-.525.06-.242-.121-1.02-.376-1.943-1.2-.718-.64-1.203-1.43-1.344-1.672-.141-.242-.015-.373.106-.494.11-.109.242-.283.363-.424.121-.141.16-.242.242-.404.08-.16.04-.302-.02-.424-.06-.121-.545-1.314-.748-1.8-.197-.472-.397-.408-.545-.415l-.464-.009a.888.888 0 00-.646.304c-.222.242-.848.828-.848 2.02s.868 2.345.99 2.506c.12.16 1.71 2.61 4.14 3.66.578.25 1.03.4 1.383.512.58.185 1.11.16 1.527.097.466-.07 1.432-.585 1.634-1.15.2-.565.2-1.05.141-1.15-.06-.1-.222-.161-.464-.282z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'facebook') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
  if (name === 'instagram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
  if (name === 'youtube') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
  if (name === 'tiktok') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z" />
    </svg>
  );
  return null;
}
