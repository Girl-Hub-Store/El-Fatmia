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

interface ProjectsProps {
  fullPage?: boolean;
}

export default function Projects({ fullPage = false }: ProjectsProps) {
  const [showAll, setShowAll] = useState(fullPage);

  const displayedImages = showAll ? mobileImages : mobileImages.slice(0, 4);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F5EF' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span
            className="text-xs font-bold tracking-[4px] uppercase mb-3 block"
            style={{ color: '#D4AF7C' }}
          >
            معرض الأعمال
          </span>
          <h2
            className="font-black mb-3"
            style={{ color: '#0F303A', fontSize: 'clamp(26px, 4vw, 42px)' }}
          >
            أعمالنا السابقة
          </h2>
          <p className="font-medium" style={{ color: '#555', fontSize: '16px' }}>
            بعض من مشاريعنا التي نفخر بها.
          </p>
        </div>

        {/* Desktop masonry grid */}
        <div
          className="hidden md:grid gap-4"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '200px' }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative overflow-hidden rounded-2xl group cursor-pointer`}
              style={{ backgroundColor: '#e0dbd0' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(15,48,58,0.5)' }}
              >
                <span className="text-white font-semibold text-sm px-4 py-2 rounded-xl" style={{ backgroundColor: 'rgba(212,175,124,0.9)' , color: '#0F303A' }}>
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden">
          <div className="carousel-scroll flex gap-3.5 pb-3 -mx-5 px-5">
            {mobileImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 relative overflow-hidden rounded-2xl"
                style={{ width: '270px', height: '200px', backgroundColor: '#e0dbd0' }}
              >
                <img src={src} alt={`مشروع ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:bg-deep-teal hover:text-white active:scale-95"
              style={{
                border: '2px solid #0F303A',
                color: '#0F303A',
                backgroundColor: 'transparent',
              }}
            >
              عرض المزيد
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
