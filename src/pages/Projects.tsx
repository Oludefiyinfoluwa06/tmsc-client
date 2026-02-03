import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AlbumSelector, AlbumGrid, GalleryCTA, type Album } from '../components/gallery';
import { fetchGalleryGroups } from '../api'
import { ArrowRight, Award } from 'lucide-react';

export default function Projects() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('');
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const currentAlbum = albums.find(album => album.id === selectedAlbum);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedAlbum(albums[0]?.id)
  }, [albums])

  useEffect(() => {
    if (categoryFromUrl) {
      setTimeout(() => {
        const machineSection = document.getElementById('machine-categories');
        if (machineSection) {
          machineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [categoryFromUrl]);

  // Load gallery groups from API
  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const data: any = await fetchGalleryGroups()
        if (!mounted) return
        // map response to Album[] safely
        const mapped: Album[] = (Array.isArray(data) ? data : []).map((g: any) => ({
          id: g.id,
          title: g.title,
          description: g.description,
          images: (Array.isArray(g.images) && g.images.length) ? g.images : [],
        }))
        if (mapped.length) setAlbums(mapped)
      } catch {
        // no fallback images — keep albums empty on error
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1770150721/tmsc-hero_ttnulb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Award size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Projects</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            Projects
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Selected deployed systems and project examples showing production-first deployments.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1" to="/contact">
              Contact
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section id="gallery-content" className="w-full py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AlbumSelector albums={albums} selectedAlbum={selectedAlbum} onSelectAlbum={setSelectedAlbum} />

          {currentAlbum && <AlbumGrid album={currentAlbum} />}

          <GalleryCTA />
        </div>
      </section>
    </>
  );
}
