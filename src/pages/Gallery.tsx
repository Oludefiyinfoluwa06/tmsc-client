import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GalleryHero, AlbumSelector, AlbumGrid, GalleryCTA, type Album } from '../components/gallery';
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
import { fetchGalleryGroups } from '../api'

const fallbackAlbums: Album[] = [
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
  const [albums, setAlbums] = useState<Album[]>(fallbackAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0].id);
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const currentAlbum = albums.find(album => album.id === selectedAlbum);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedAlbum(albums[0]?.id)
  }, [albums])

  // Scroll to machine categories section when a category is selected from Platform page
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
        const data: any = await fetchGalleryGroups('MODOOLA')
        if (!mounted) return
        // map response to Album[] safely
        const mapped: Album[] = (Array.isArray(data) ? data : []).map((g: any, i: number) => ({
          id: g.id || g._id || String(g.name || g.title),
          title: g.name || g.title || 'Untitled',
          description: g.description || '',
          images: (Array.isArray(g.images) && g.images.length) ? g.images : (fallbackAlbums[i]?.images || []),
        }))
        if (mapped.length) setAlbums(mapped)
      } catch (err) {
        // keep fallback on error
        console.error('Failed to load gallery groups', err)
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
          {/* Gallery groups are fetched from the API; no creation on the public site */}

          <AlbumSelector albums={albums} selectedAlbum={selectedAlbum} onSelectAlbum={setSelectedAlbum} />

          {currentAlbum && <AlbumGrid album={currentAlbum} />}

          <GalleryCTA />
        </div>
      </section>
    </>
  );
}
