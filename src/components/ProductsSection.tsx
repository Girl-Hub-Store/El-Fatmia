import type { Page } from '../App';
import type { Product } from '../data/products';
import products from '../data/products';

interface ProductsSectionProps {
  openProduct: (p: Product) => void;
  navigateTo: (p: Page) => void;
}

export default function ProductsSection({ openProduct, navigateTo }: ProductsSectionProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F5EF' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <span
            className="text-xs font-bold tracking-[4px] uppercase mb-3 block"
            style={{ color: '#D4AF7C' }}
          >
            تشكيلتنا
          </span>
          <h2
            className="font-black mb-3"
            style={{ color: '#0F303A', fontSize: 'clamp(26px, 4vw, 42px)' }}
          >
            منتجاتنا
          </h2>
          <p className="font-medium" style={{ color: '#555', fontSize: '16px' }}>
            مجموعة متنوعة من الستائر تناسب جميع الأذواق والاحتياجات.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="carousel-scroll flex gap-4 pb-4 -mx-5 px-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} openProduct={openProduct} mobile />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigateTo('products')}
              className="flex items-center gap-2 font-bold text-sm transition-all hover:gap-3"
              style={{ color: '#0F303A' }}
            >
              <span>عرض جميع المنتجات</span>
              <ArrowLeftIcon />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} openProduct={openProduct} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  openProduct,
  mobile = false,
}: {
  product: Product;
  openProduct: (p: Product) => void;
  mobile?: boolean;
}) {
  return (
    <button
      onClick={() => openProduct(product)}
      className="group flex-shrink-0 text-right focus:outline-none"
      style={{ width: mobile ? '260px' : '100%' }}
    >
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          boxShadow: '0 4px 20px rgba(15,48,58,0.08)',
          backgroundColor: '#fff',
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: mobile ? '200px' : '220px' }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundColor: '#e0dbd0' }}
          />
          {/* Gradient at bottom of image */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: '80px',
              background: 'linear-gradient(to top, rgba(15,48,58,0.8), transparent)',
            }}
          />
          {/* Arrow button */}
          <div
            className="absolute bottom-3 left-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
            style={{ backgroundColor: '#D4AF7C', color: '#0F303A' }}
          >
            <ArrowLeftIcon size={16} />
          </div>
        </div>

        {/* Name */}
        <div className="px-4 py-3">
          <h3 className="font-bold text-right" style={{ color: '#0F303A', fontSize: '15px' }}>
            {product.name}
          </h3>
        </div>
      </div>
    </button>
  );
}

function ArrowLeftIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d="M11 4L6 9l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
