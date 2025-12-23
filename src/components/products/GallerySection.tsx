import gallery1 from '../../assets/gallery/gallery-1.jpeg';
import gallery2 from '../../assets/gallery/gallery-2.jpeg';
import gallery3 from '../../assets/gallery/gallery-3.jpeg';
import gallery4 from '../../assets/gallery/gallery-4.jpeg';
import gallery5 from '../../assets/gallery/gallery-5.jpeg';
import gallery6 from '../../assets/gallery/gallery-6.jpeg';
import gallery7 from '../../assets/gallery/gallery-7.jpeg';
import gallery8 from '../../assets/gallery/gallery-8.jpeg';
import gallery9 from '../../assets/gallery/gallery-9.jpeg';
import gallery10 from '../../assets/gallery/gallery-10.jpeg';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10
];

export default function GallerySection() {
  return (
    <section className="w-full py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold mb-3">VISUAL SHOWCASE</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Products in Action</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real industrial capacity, deployed across Africa and beyond. Scroll to explore.
          </p>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="relative">
          <style>{`
            .gallery-scroll {
              scroll-behavior: smooth;
            }
            .gallery-scroll::-webkit-scrollbar {
              height: 8px;
            }
            .gallery-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .gallery-scroll::-webkit-scrollbar-thumb {
              background: rgba(220, 38, 38, 0.5);
              border-radius: 4px;
            }
            .gallery-scroll::-webkit-scrollbar-thumb:hover {
              background: rgba(220, 38, 38, 0.8);
            }
          `}</style>
          
          <div className="flex gap-6 overflow-x-auto pb-4 gallery-scroll">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-96 h-80 group relative overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Industrial capacity deployment ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-sm text-red-600 font-semibold mb-1">PROJECT {idx + 1}</p>
                    <p className="text-white/90 text-sm">Industrial capacity in action</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="animate-pulse text-red-600/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg mb-6">Ready to see our solutions at work?</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline">
            Schedule a Site Visit
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
