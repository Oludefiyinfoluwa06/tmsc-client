import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GalleryHero, AlbumSelector, AlbumGrid, GalleryCTA, type Album } from '../components/gallery';
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
      <GalleryHero />

      {/* Gallery Content */}
      <section id="gallery-content" className="w-full py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AlbumSelector albums={albums} selectedAlbum={selectedAlbum} onSelectAlbum={setSelectedAlbum} />

          {currentAlbum && <AlbumGrid album={currentAlbum} />}

          <GalleryCTA />
        </div>
      </section>
    </>
  );
}
