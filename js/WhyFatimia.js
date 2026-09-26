import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    {
        num: '01',
        icon: (_jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", children: [_jsx("circle", { cx: "14", cy: "14", r: "12", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M9 14l3 3 7-7", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" })] })),
        title: 'خامات عالية الجودة',
        desc: 'نستخدم أفضل الخامات المستوردة التي تجمع بين الجمال والمتانة وتدوم لسنوات طويلة.',
    },
    {
        num: '02',
        icon: (_jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", children: [_jsx("path", { d: "M14 4l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z", stroke: "currentColor", strokeWidth: "1.5", strokeLinejoin: "round" }), _jsx("path", { d: "M6 22h16", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] })),
        title: 'تركيب احترافي',
        desc: 'فريق متخصص من المهندسين والفنيين يضمن تركيباً مثالياً في أقل وقت وبأعلى جودة.',
    },
    {
        num: '03',
        icon: (_jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", children: [_jsx("path", { d: "M14 3L5 7v8c0 5.5 3.9 9 9 11 5.1-2 9-5.5 9-11V7z", stroke: "currentColor", strokeWidth: "1.5", strokeLinejoin: "round" }), _jsx("path", { d: "M10 14l2.5 2.5 5-5", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round" })] })),
        title: 'ضمان على المنتجات',
        desc: 'نقدم ضماناً شاملاً على جميع منتجاتنا لمدة سنة كاملة مع دعم ما بعد البيع.',
    },
    {
        num: '04',
        icon: (_jsxs("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", children: [_jsx("circle", { cx: "14", cy: "10", r: "5", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M5 23c0-4 4-7 9-7s9 3 9 7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }), _jsx("path", { d: "M20 16l2 2-3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] })),
        title: 'خدمة ما بعد البيع',
        desc: 'دعم دائم لعملائنا ما بعد التركيب لضمان رضاهم التام وحل أي استفسار بسرعة.',
    },
];
export default function WhyFatimia() {
    return (_jsx("section", { className: "py-16 md:py-24", style: { backgroundColor: '#0F303A' }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8", children: [_jsxs("div", { className: "text-center mb-12 md:mb-16", children: [_jsx("span", { className: "text-xs font-bold tracking-[4px] uppercase mb-3 block", style: { color: '#D4AF7C' }, children: "\u0645\u0645\u064A\u0632\u0627\u062A\u0646\u0627" }), _jsx("h2", { className: "font-black", style: { color: '#FFFFFF', fontSize: 'clamp(26px, 4vw, 42px)' }, children: "\u0644\u064A\u0647 \u062A\u062E\u062A\u0627\u0631 \u0627\u0644\u0641\u0627\u0637\u0645\u064A\u0629\u061F" }), _jsx("p", { className: "mt-3 font-medium max-w-lg mx-auto", style: { color: 'rgba(255,255,255,0.6)', fontSize: '15px' }, children: "\u0646\u062D\u0646 \u0641\u064A \u0627\u0644\u0641\u0627\u0637\u0645\u064A\u0629 \u0646\u0644\u062A\u0632\u0645 \u0628\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u0627\u0644\u062D\u0644\u0648\u0644 \u0648\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629" })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6", children: features.map((f) => (_jsxs("div", { className: "group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1", style: {
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }, children: [_jsx("span", { className: "absolute top-5 left-5 font-black text-3xl leading-none select-none", style: { color: 'rgba(212,175,124,0.12)', fontFamily: 'Cairo, sans-serif' }, children: f.num }), _jsx("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-champagne/20", style: { backgroundColor: 'rgba(212,175,124,0.1)', color: '#D4AF7C' }, children: f.icon }), _jsx("div", { className: "w-8 h-0.5 mb-4", style: { backgroundColor: '#D4AF7C', opacity: 0.6 } }), _jsx("h3", { className: "font-bold mb-2", style: { color: '#FFFFFF', fontSize: '17px' }, children: f.title }), _jsx("p", { className: "font-normal leading-relaxed", style: { color: 'rgba(255,255,255,0.55)', fontSize: '14px' }, children: f.desc })] }, f.num))) })] }) }));
}
