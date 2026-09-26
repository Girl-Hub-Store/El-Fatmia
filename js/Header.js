import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Logo from './Logo.js';
const navItems = [
    { label: 'الرئيسية', page: 'home' },
    { label: 'المنتجات', page: 'products' },
    { label: 'من نحن', page: 'about' },
    { label: 'أعمالنا', page: 'projects' },
    { label: 'اتصل بنا', page: 'contact' },
];
export default function Header({ page, navigateTo, menuOpen, setMenuOpen }) {
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
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "fixed top-0 inset-x-0 z-50 transition-all duration-300", style: {
                    backgroundColor: scrolled ? 'rgba(247,245,239,0.97)' : '#F7F5EF',
                    boxShadow: scrolled ? '0 2px 20px rgba(15,48,58,0.08)' : '0 1px 0 rgba(15,48,58,0.08)',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                }, children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16 md:h-20", children: [_jsx("button", { onClick: () => navigateTo('home'), className: "flex-shrink-0 focus:outline-none", children: _jsx(Logo, { size: "md" }) }), _jsx("nav", { className: "hidden md:flex items-center gap-1", children: navItems.map((item) => (_jsx("button", { onClick: () => navigateTo(item.page), className: "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-deep-teal/5", style: {
                                        color: page === item.page ? '#0F303A' : '#555555',
                                        fontWeight: page === item.page ? 700 : 600,
                                        borderBottom: page === item.page ? '2px solid #D4AF7C' : '2px solid transparent',
                                    }, children: item.label }, item.page))) }), _jsxs("div", { className: "hidden md:flex items-center gap-3", children: [_jsx("a", { href: "https://wa.me/201012345678", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-green-50", style: { color: '#25D366' }, title: "\u062A\u0648\u0627\u0635\u0644 \u0648\u0627\u062A\u0633\u0627\u0628", children: _jsx(WhatsAppIcon, { size: 22 }) }), _jsx("button", { onClick: () => navigateTo('contact'), className: "px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 active:scale-95", style: {
                                            backgroundColor: '#0F303A',
                                            color: '#FFFFFF',
                                        }, children: "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631" })] }), _jsxs("div", { className: "flex md:hidden items-center gap-2", children: [_jsx("button", { className: "w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-deep-teal/5", style: { color: '#0F303A' }, "aria-label": "\u0628\u062D\u062B", children: _jsx(SearchIcon, {}) }), _jsx("button", { onClick: () => setMenuOpen(!menuOpen), className: "w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-deep-teal/5", style: { color: '#0F303A' }, "aria-label": "\u0627\u0644\u0642\u0627\u0626\u0645\u0629", children: menuOpen ? _jsx(XIcon, {}) : _jsx(MenuIcon, {}) })] })] }) }) }), _jsx("div", { className: `fixed inset-0 z-40 transition-all duration-300 md:hidden ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`, style: { backgroundColor: 'rgba(15,48,58,0.5)' }, onClick: () => setMenuOpen(false) }), _jsxs("div", { className: `fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm md:hidden transition-transform duration-300 ease-in-out flex flex-col`, style: {
                    backgroundColor: '#0F303A',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                }, children: [_jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-white/10", children: [_jsx("button", { onClick: () => setMenuOpen(false), className: "w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors", children: _jsx(XIcon, {}) }), _jsx(Logo, { white: true, size: "md" })] }), _jsx("nav", { className: "flex-1 px-5 py-6 overflow-y-auto", children: _jsx("div", { className: "flex flex-col gap-1", children: navItems.map((item) => (_jsxs("button", { onClick: () => navigateTo(item.page), className: "flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-200 text-right", style: {
                                    backgroundColor: page === item.page ? 'rgba(212,175,124,0.15)' : 'transparent',
                                    color: page === item.page ? '#D4AF7C' : 'rgba(255,255,255,0.85)',
                                    fontWeight: page === item.page ? 700 : 500,
                                    fontSize: '17px',
                                }, children: [_jsx("span", { style: { color: '#D4AF7C', opacity: page === item.page ? 1 : 0 }, children: "\u203A" }), _jsx("span", { children: item.label })] }, item.page))) }) }), _jsxs("div", { className: "px-5 pb-8 pt-4 border-t border-white/10 flex flex-col gap-3", children: [_jsx("button", { onClick: () => navigateTo('contact'), className: "w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-95", style: { backgroundColor: '#D4AF7C', color: '#0F303A', fontSize: '16px' }, children: "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631" }), _jsxs("a", { href: "https://wa.me/201012345678", target: "_blank", rel: "noopener noreferrer", className: "w-full py-3.5 rounded-2xl font-semibold text-center flex items-center justify-center gap-2 transition-all active:scale-95", style: { backgroundColor: '#25D366', color: '#FFFFFF', fontSize: '15px' }, children: [_jsx(WhatsAppIcon, { size: 20 }), _jsx("span", { children: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628" })] }), _jsx("div", { className: "flex items-center justify-center gap-4 pt-2", children: ['facebook', 'instagram', 'youtube', 'tiktok'].map((s) => (_jsx("a", { href: "#", className: "w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white/80 hover:bg-white/10 transition-colors", children: _jsx(SocialIcon, { name: s }) }, s))) })] })] })] }));
}
function MenuIcon() {
    return (_jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: _jsx("path", { d: "M3 6h16M3 11h16M3 16h16", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }) }));
}
function XIcon() {
    return (_jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: _jsx("path", { d: "M4 4l12 12M16 4L4 16", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }) }));
}
function SearchIcon() {
    return (_jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: [_jsx("circle", { cx: "9", cy: "9", r: "5.5", stroke: "currentColor", strokeWidth: "1.75" }), _jsx("path", { d: "M13.5 13.5L17 17", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" })] }));
}
function WhatsAppIcon({ size = 24 }) {
    return (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.08-1.12l-.292-.174-3.03.9.862-3.03-.174-.292A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.788-.222-.08-.384-.121-.545.121-.16.242-.626.788-.768.95-.141.161-.283.18-.525.06-.242-.121-1.02-.376-1.943-1.2-.718-.64-1.203-1.43-1.344-1.672-.141-.242-.015-.373.106-.494.11-.109.242-.283.363-.424.121-.141.16-.242.242-.404.08-.16.04-.302-.02-.424-.06-.121-.545-1.314-.748-1.8-.197-.472-.397-.408-.545-.415l-.464-.009a.888.888 0 00-.646.304c-.222.242-.848.828-.848 2.02s.868 2.345.99 2.506c.12.16 1.71 2.61 4.14 3.66.578.25 1.03.4 1.383.512.58.185 1.11.16 1.527.097.466-.07 1.432-.585 1.634-1.15.2-.565.2-1.05.141-1.15-.06-.1-.222-.161-.464-.282z" }) }));
}
function SocialIcon({ name }) {
    if (name === 'facebook')
        return (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }) }));
    if (name === 'instagram')
        return (_jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }), _jsx("circle", { cx: "12", cy: "12", r: "4" }), _jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor", stroke: "none" })] }));
    if (name === 'youtube')
        return (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" }) }));
    if (name === 'tiktok')
        return (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z" }) }));
    return null;
}
