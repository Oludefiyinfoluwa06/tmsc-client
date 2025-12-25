import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gallery1 from '../assets/gallery/gallery-1.jpeg';
import gallery2 from '../assets/gallery/gallery-2.jpeg';
import gallery3 from '../assets/gallery/gallery-3.jpeg';
import gallery4 from '../assets/gallery/gallery-4.jpeg';
import gallery5 from '../assets/gallery/gallery-5.jpeg';
import gallery6 from '../assets/gallery/gallery-6.jpeg';
import gallery7 from '../assets/gallery/gallery-7.jpeg';
import gallery8 from '../assets/gallery/gallery-8.jpeg';
import gallery9 from '../assets/gallery/gallery-9.jpeg';
import gallery10 from '../assets/gallery/gallery-10.jpeg';

interface Album {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const albums: Album[] = [
  {
    id: 'deployment-1',
    title: 'African Operations',
    description: 'Industrial capacity deployment across Africa',
    images: [gallery1, gallery2, gallery3]
  },
  {
    id: 'deployment-2',
    title: 'Equipment & Machinery',
    description: 'State-of-the-art equipment in operation',
    images: [gallery4, gallery5, gallery6]
  },
  {
    id: 'deployment-3',
    title: 'Field Work',
    description: 'On-site installations and operations',
    images: [gallery7, gallery8, gallery9, gallery10]
  }
];

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0].id);
  const currentAlbum = albums.find(album => album.id === selectedAlbum);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <p className="text-red-600 text-sm font-semibold mb-3">VISUAL SHOWCASE</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real industrial capacity, deployed across Africa and beyond. Explore our projects and installations.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="w-full py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Album Selector */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {albums.map((album) => (
                <button
                  key={album.id}
                  onClick={() => setSelectedAlbum(album.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 no-underline cursor-pointer border ${
                    selectedAlbum === album.id
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-transparent text-white border-white/30 hover:border-white/50'
                  }`}
                >
                  {album.title}
                </button>
              ))}
            </div>
          </div>

          {/* Album Title & Description */}
          {currentAlbum && (
            <>
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{currentAlbum.title}</h2>
                <p className="text-white/70 text-lg">{currentAlbum.description}</p>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {currentAlbum.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${currentAlbum.title} ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <p className="text-sm text-red-600 font-semibold mb-1">IMAGE {idx + 1}</p>
                        <p className="text-white/90 text-sm">{currentAlbum.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CTA Section */}
          <div className="text-center border-t border-white/10 pt-16">
            <p className="text-white/70 text-lg mb-6">Ready to see our solutions at work?</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline">
              Schedule a Site Visit
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
