import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1772112334845-86016056137b?w=600&h=400&fit=crop&auto=format',
        alt: 'غرفة معيشة فاخرة',
        span: 'col-span-2 row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1784653549463-83c9bd94c7e2?w=400&h=300&fit=crop&auto=format',
        alt: 'غرفة نوم أنيقة',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=400&h=300&fit=crop&auto=format',
        alt: 'غرفة معيشة عصرية',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=400&h=400&fit=crop&auto=format',
        alt: 'مكتب احترافي',
        span: 'col-span-1 row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=400&h=300&fit=crop&auto=format',
        alt: 'شقة حديثة',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=300&fit=crop&auto=format',
        alt: 'ركن جلسة دافئ',
        span: 'col-span-2 row-span-1',
    },
];
const mobileImages = [
    'https://images.unsplash.com/photo-1772112334845-86016056137b?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1784653549463-83c9bd94c7e2?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400&h=300&fit=crop&auto=format',
];
export default function Projects({ fullPage = false }) {
    const [showAll, setShowAll] = useState(fullPage);
    const displayedImages = showAll ? mobileImages : mobileImages.slice(0, 4);
    return (_jsx("section", { className: "py-16 md:py-24", style: { backgroundColor: '#F7F5EF' }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8", children: [_jsxs("div", { className: "text-center mb-10 md:mb-14", children: [_jsx("span", { className: "text-xs font-bold tracking-[4px] uppercase mb-3 block", style: { color: '#D4AF7C' }, children: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644" }), _jsx("h2", { className: "font-black mb-3", style: { color: '#0F303A', fontSize: 'clamp(26px, 4vw, 42px)' }, children: "\u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u0627\u0644\u0633\u0627\u0628\u0642\u0629" }), _jsx("p", { className: "font-medium", style: { color: '#555', fontSize: '16px' }, children: "\u0628\u0639\u0636 \u0645\u0646 \u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627 \u0627\u0644\u062A\u064A \u0646\u0641\u062E\u0631 \u0628\u0647\u0627." })] }), _jsx("div", { className: "hidden md:grid gap-4", style: { gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '200px' }, children: galleryImages.map((img, i) => (_jsxs("div", { className: `${img.span} relative overflow-hidden rounded-2xl group cursor-pointer`, style: { backgroundColor: '#e0dbd0' }, children: [_jsx("img", { src: img.src, alt: img.alt, className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", style: { backgroundColor: 'rgba(15,48,58,0.5)' }, children: _jsx("span", { className: "text-white font-semibold text-sm px-4 py-2 rounded-xl", style: { backgroundColor: 'rgba(212,175,124,0.9)', color: '#0F303A' }, children: img.alt }) })] }, i))) }), _jsx("div", { className: "md:hidden", children: _jsx("div", { className: "carousel-scroll flex gap-3.5 pb-3 -mx-5 px-5", children: mobileImages.map((src, i) => (_jsx("div", { className: "flex-shrink-0 relative overflow-hidden rounded-2xl", style: { width: '270px', height: '200px', backgroundColor: '#e0dbd0' }, children: _jsx("img", { src: src, alt: `مشروع ${i + 1}`, className: "w-full h-full object-cover" }) }, i))) }) }), !showAll && (_jsx("div", { className: "flex justify-center mt-10", children: _jsx("button", { onClick: () => setShowAll(true), className: "px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:bg-deep-teal hover:text-white active:scale-95", style: {
                            border: '2px solid #0F303A',
                            color: '#0F303A',
                            backgroundColor: 'transparent',
                        }, children: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F" }) }))] }) }));
}
