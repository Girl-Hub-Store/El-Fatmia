import type { Product } from '../data/products';
import products from '../data/products';
import type { Page } from '../App';

interface ProductDetailsProps {
  product: Product;
  openProduct: (p: Product) => void;
  navigateTo: (p: Page) => void;
}

export default function ProductDetails({ product, openProduct, navigateTo }: ProductDetailsProps) {
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-16 md:pt-20" style={{ backgroundColor: '#F7F5EF' }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: '#888' }}>
          <button onClick={() => navigateTo('home')} className="hover:text-deep-teal transition-colors font-medium">
            الرئيسية
          </button>
          <span>›</span>
          <button onClick={() => navigateTo('products')} className="hover:text-deep-teal transition-colors font-medium">
            المنتجات
          </button>
          <span>›</span>
          <span className="font-semibold" style={{ color: '#0F303A' }}>{product.name}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Product image */}
          <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: '4/3', backgroundColor: '#e0dbd0' }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="text-xs font-bold tracking-[4px] uppercase mb-2 block"
                style={{ color: '#D4AF7C' }}
              >
                منتجاتنا
              </span>
              <h1
                className="font-black"
                style={{ color: '#0F303A', fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2 }}
              >
                {product.name}
              </h1>
            </div>

            <p
              className="leading-loose font-normal"
              style={{ color: '#555', fontSize: '15px', lineHeight: 1.9 }}
            >
              {product.description}
            </p>

            {/* Features list */}
            <div
              className="p-5 rounded-2xl"
              style={{ backgroundColor: 'rgba(15,48,58,0.04)', border: '1px solid rgba(15,48,58,0.08)' }}
            >
              <h3 className="font-bold mb-4 text-sm" style={{ color: '#0F303A' }}>
                مميزات المنتج
              </h3>
              <ul className="flex flex-col gap-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(212,175,124,0.2)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="#D4AF7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium text-sm" style={{ color: '#2E2E2E' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigateTo('contact')}
              className="py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#D4AF7C', color: '#0F303A' }}
            >
              اطلب عرض سعر
            </button>
            <a
              href="https://wa.me/201012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            >
              <WhatsAppIcon />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 md:py-12">
        <h2
          className="font-bold mb-6"
          style={{ color: '#0F303A', fontSize: 'clamp(20px, 3vw, 28px)' }}
        >
          مميزات المنتج
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {product.featureCards.map((fc) => (
            <div
              key={fc.title}
              className="p-5 rounded-2xl"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 16px rgba(15,48,58,0.06)',
                border: '1px solid rgba(15,48,58,0.06)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-lg"
                style={{ backgroundColor: 'rgba(212,175,124,0.12)', color: '#D4AF7C' }}
              >
                {fc.icon}
              </div>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#0F303A' }}>{fc.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: '#888', lineHeight: 1.8 }}>{fc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 md:py-12">
        <h2
          className="font-bold mb-6"
          style={{ color: '#0F303A', fontSize: 'clamp(20px, 3vw, 28px)' }}
        >
          معرض صور المنتج
        </h2>
        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="carousel-scroll flex gap-3 -mx-5 px-5 pb-2">
            {product.gallery.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 overflow-hidden rounded-2xl"
                style={{ width: '240px', height: '160px', backgroundColor: '#e0dbd0' }}
              >
                <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {product.gallery.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl group cursor-pointer"
              style={{ aspectRatio: '4/3', backgroundColor: '#e0dbd0' }}
            >
              <img
                src={src}
                alt={`${product.name} ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Related products */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: 'rgba(15,48,58,0.03)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2
            className="font-bold mb-6"
            style={{ color: '#0F303A', fontSize: 'clamp(20px, 3vw, 28px)' }}
          >
            منتجات مشابهة
          </h2>
          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="carousel-scroll flex gap-4 -mx-5 px-5 pb-2">
              {related.map((p) => (
                <button
                  key={p.id}
                  onClick={() => openProduct(p)}
                  className="flex-shrink-0 group text-right focus:outline-none"
                  style={{ width: '220px' }}
                >
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 16px rgba(15,48,58,0.08)' }}
                  >
                    <div className="overflow-hidden" style={{ height: '150px', backgroundColor: '#e0dbd0' }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <h4 className="font-bold text-sm" style={{ color: '#0F303A' }}>{p.name}</h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-4 gap-5">
            {related.map((p) => (
              <button
                key={p.id}
                onClick={() => openProduct(p)}
                className="group text-right focus:outline-none"
              >
                <div
                  className="overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1"
                  style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 16px rgba(15,48,58,0.08)' }}
                >
                  <div className="overflow-hidden" style={{ height: '180px', backgroundColor: '#e0dbd0' }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <h4 className="font-bold text-sm" style={{ color: '#0F303A' }}>{p.name}</h4>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.406 13.155c-.242-.121-1.432-.707-1.654-.788-.222-.08-.384-.121-.545.121-.16.242-.626.788-.768.95-.141.161-.283.18-.525.06-.242-.121-1.02-.376-1.943-1.2-.718-.64-1.203-1.43-1.344-1.672-.141-.242-.015-.373.106-.494.11-.109.242-.283.363-.424.121-.141.16-.242.242-.404.08-.16.04-.302-.02-.424-.06-.121-.545-1.314-.748-1.8-.197-.472-.397-.408-.545-.415l-.464-.009a.888.888 0 00-.646.304c-.222.242-.848.828-.848 2.02s.868 2.345.99 2.506c.12.16 1.71 2.61 4.14 3.66.578.25 1.03.4 1.383.512.58.185 1.11.16 1.527.097.466-.07 1.432-.585 1.634-1.15.2-.565.2-1.05.141-1.15-.06-.1-.222-.161-.464-.282z" />
    </svg>
  );
}
