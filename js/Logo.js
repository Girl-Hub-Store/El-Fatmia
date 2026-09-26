import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Logo({ white = false, size = 'md' }) {
    const textColor = white ? '#FFFFFF' : '#0F303A';
    const subColor = white ? 'rgba(255,255,255,0.5)' : 'rgba(15,48,58,0.45)';
    const goldColor = '#D4AF7C';
    const sizes = {
        sm: { icon: 32, title: 15, sub: 8 },
        md: { icon: 40, title: 18, sub: 10 },
        lg: { icon: 48, title: 22, sub: 11 },
    };
    const s = sizes[size];
    return (_jsxs("div", { className: "flex items-center gap-2.5", style: { direction: 'rtl' }, children: [_jsxs("div", { className: "flex flex-col items-end leading-none gap-0.5", children: [_jsx("span", { style: {
                            color: textColor,
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: 800,
                            fontSize: s.title,
                            letterSpacing: '-0.3px',
                        }, children: "\u0627\u0644\u0641\u0627\u0637\u0645\u064A\u0629" }), _jsx("span", { style: {
                            color: subColor,
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: 500,
                            fontSize: s.sub,
                            letterSpacing: '3px',
                        }, children: "EL FATIMIA" })] }), _jsxs("svg", { width: s.icon, height: s.icon, viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("rect", { x: "3", y: "4", width: "34", height: "5", rx: "2.5", fill: textColor, opacity: "1" }), _jsx("rect", { x: "3", y: "12", width: "34", height: "5", rx: "2.5", fill: textColor, opacity: "0.75" }), _jsx("rect", { x: "3", y: "20", width: "34", height: "5", rx: "2.5", fill: textColor, opacity: "0.5" }), _jsx("rect", { x: "3", y: "28", width: "34", height: "5", rx: "2.5", fill: goldColor, opacity: "0.95" })] })] }));
}
