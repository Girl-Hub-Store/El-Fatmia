import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import WhyFatimia from './components/WhyFatimia';
import Projects from './components/Projects';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import products from './data/products';
import type { Product } from './data/products';

export type Page = 'home' | 'products' | 'product-details' | 'projects' | 'about' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[1]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = useCallback((p: Page) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
    setPage('product-details');
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', backgroundColor: '#F7F5EF', color: '#2E2E2E', minHeight: '100vh' }}>
      <Header
        page={page}
        navigateTo={navigateTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        {page === 'home' && (
          <>
            <Hero navigateTo={navigateTo} />
            <ProductsSection openProduct={openProduct} navigateTo={navigateTo} />
            <WhyFatimia />
            <Projects />
            <AboutSection navigateTo={navigateTo} />
            <QuoteSection />
          </>
        )}

        {page === 'products' && (
          <div className="pt-16 md:pt-20" style={{ minHeight: '60vh' }}>
            <div
              className="py-14 md:py-20"
              style={{
                background: 'linear-gradient(135deg, #0F303A 0%, #1a4a57 100%)',
              }}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <span
                  className="text-xs font-bold tracking-[4px] uppercase mb-3 block"
                  style={{ color: '#D4AF7C' }}
                >
                  تشكيلتنا الكاملة
                </span>
                <h1
                  className="font-black"
                  style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 5vw, 52px)' }}
                >
                  منتجاتنا
                </h1>
                <p className="mt-3 font-medium" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px' }}>
                  مجموعة متنوعة من الستائر تناسب جميع الأذواق والاحتياجات.
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => openProduct(product)}
                    className="group text-right focus:outline-none"
                  >
                    <div
                      className="overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1"
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 4px 20px rgba(15,48,58,0.08)',
                      }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{ height: '220px', backgroundColor: '#e0dbd0' }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-x-0 bottom-0"
                          style={{
                            height: '80px',
                            background: 'linear-gradient(to top, rgba(15,48,58,0.75), transparent)',
                          }}
                        />
                        <div
                          className="absolute bottom-3 left-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                          style={{ backgroundColor: '#D4AF7C', color: '#0F303A' }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="px-4 py-4">
                        <h3 className="font-bold" style={{ color: '#0F303A', fontSize: '15px' }}>
                          {product.name}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed line-clamp-2" style={{ color: '#888' }}>
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {page === 'product-details' && (
          <ProductDetails
            product={selectedProduct}
            openProduct={openProduct}
            navigateTo={navigateTo}
          />
        )}

        {page === 'projects' && (
          <div className="pt-16 md:pt-20">
            <div
              className="py-14 md:py-20"
              style={{ background: 'linear-gradient(135deg, #0F303A 0%, #1a4a57 100%)' }}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <span className="text-xs font-bold tracking-[4px] uppercase mb-3 block" style={{ color: '#D4AF7C' }}>
                  معرض الأعمال
                </span>
                <h1 className="font-black" style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 5vw, 52px)' }}>
                  أعمالنا السابقة
                </h1>
              </div>
            </div>
            <Projects fullPage />
          </div>
        )}

        {page === 'about' && (
          <div className="pt-16 md:pt-20">
            <div
              className="py-14 md:py-20"
              style={{ background: 'linear-gradient(135deg, #0F303A 0%, #1a4a57 100%)' }}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <span className="text-xs font-bold tracking-[4px] uppercase mb-3 block" style={{ color: '#D4AF7C' }}>
                  قصتنا
                </span>
                <h1 className="font-black" style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 5vw, 52px)' }}>
                  من نحن
                </h1>
              </div>
            </div>
            <AboutSection navigateTo={navigateTo} fullPage />
          </div>
        )}

        {page === 'contact' && (
          <div className="pt-16 md:pt-20">
            <div
              className="py-14 md:py-20"
              style={{ background: 'linear-gradient(135deg, #0F303A 0%, #1a4a57 100%)' }}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <span className="text-xs font-bold tracking-[4px] uppercase mb-3 block" style={{ color: '#D4AF7C' }}>
                  تواصل معنا
                </span>
                <h1 className="font-black" style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 5vw, 52px)' }}>
                  اطلب عرض سعر
                </h1>
                <p className="mt-3 font-medium" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px' }}>
                  فريقنا جاهز للمساعدة في اختيار أفضل حل لمساحتك
                </p>
              </div>
            </div>
            <QuoteSection fullPage />
          </div>
        )}
      </main>

      <Footer navigateTo={navigateTo} />
      <FloatingWhatsApp />
    </div>
  );
}
