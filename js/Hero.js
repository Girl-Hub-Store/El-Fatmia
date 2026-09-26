import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
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
export default function Hero({ navigateTo }) {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("section", { className: "relative w-full overflow-hidden", style: { minHeight: 'calc(100svh - 0px)' }, children: [slides.map((slide, i) => (_jsx("div", { className: "absolute inset-0 transition-opacity duration-1000", style: { opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }, children: _jsx("img", { src: slide.image, alt: slide.alt, className: "w-full h-full object-cover", style: { minHeight: '100%' } }) }, i))), _jsx("div", { className: "absolute inset-0 z-10", style: {
                    background: 'linear-gradient(to top, rgba(10,25,30,0.92) 0%, rgba(10,25,30,0.55) 45%, rgba(10,25,30,0.2) 100%)',
                } }), _jsxs("div", { className: "relative z-20 flex flex-col justify-end h-full min-h-[100svh] pb-16 md:pb-24 px-5 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto w-full", children: [_jsxs("div", { className: "max-w-2xl", children: [_jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold", style: { backgroundColor: 'rgba(212,175,124,0.2)', color: '#D4AF7C', border: '1px solid rgba(212,175,124,0.35)' }, children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-champagne animate-pulse inline-block", style: { backgroundColor: '#D4AF7C' } }), "\u0645\u0646\u0630 \u0661\u0669\u0669\u0665 \u2022 \u0646\u0635\u0646\u0639 \u0627\u0644\u0623\u0646\u0627\u0642\u0629 \u0641\u064A \u0643\u0644 \u0645\u0646\u0632\u0644"] }), _jsxs("h1", { className: "font-black leading-tight mb-5", style: {
                                    color: '#FFFFFF',
                                    fontSize: 'clamp(32px, 6vw, 72px)',
                                    lineHeight: 1.15,
                                }, children: ["\u0633\u062A\u0627\u0626\u0631 \u062A\u0636\u064A\u0641 \u0644\u0645\u0633\u0629 \u062C\u0645\u0627\u0644\u064A\u0629", _jsx("br", {}), _jsx("span", { style: { color: '#D4AF7C' }, children: "\u0644\u0643\u0644 \u0645\u0633\u0627\u062D\u0629" })] }), _jsx("p", { className: "font-medium mb-8 md:mb-10", style: {
                                    color: 'rgba(255,255,255,0.75)',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    letterSpacing: '1px',
                                }, children: "\u062C\u0648\u062F\u0629 \u0639\u0627\u0644\u064A\u0629\u00A0\u00A0\u2022\u00A0\u00A0\u062E\u0627\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629\u00A0\u00A0\u2022\u00A0\u00A0\u062A\u0631\u0643\u064A\u0628 \u0627\u062D\u062A\u0631\u0627\u0641\u064A" }), _jsxs("div", { className: "flex flex-wrap gap-3 md:gap-4", children: [_jsx("button", { onClick: () => navigateTo('contact'), className: "px-7 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95", style: { backgroundColor: '#D4AF7C', color: '#0F303A' }, children: "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631" }), _jsx("button", { onClick: () => navigateTo('products'), className: "px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:bg-white/15 active:scale-95", style: {
                                            backgroundColor: 'transparent',
                                            color: '#FFFFFF',
                                            border: '1.5px solid rgba(255,255,255,0.5)',
                                        }, children: "\u062A\u0635\u0641\u062D \u0645\u0646\u062A\u062C\u0627\u062A\u0646\u0627" })] })] }), _jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30", children: slides.map((_, i) => (_jsx("button", { onClick: () => setCurrent(i), className: "rounded-full transition-all duration-300", style: {
                                width: i === current ? 24 : 8,
                                height: 8,
                                backgroundColor: i === current ? '#D4AF7C' : 'rgba(255,255,255,0.4)',
                            }, "aria-label": `الشريحة ${i + 1}` }, i))) })] })] }));
}
