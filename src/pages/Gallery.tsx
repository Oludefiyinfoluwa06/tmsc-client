import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlbumSelector, AlbumGrid, GalleryCTA, type Album } from '../components/gallery';
import { fetchGalleryGroups } from '../api'

export default function Gallery() {
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
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-12 text-left pt-20 max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur">
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Visual Stories</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Gallery</h1>
          <p className="text-white/90 text-base leading-relaxed font-light max-w-3xl">A showcase of our training sessions, workshops, and equipment exchange activities.</p>
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
