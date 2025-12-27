import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Settings, Wrench, Zap, Lightbulb, Cpu, Flame, Scissors, Search, Package, Check, FlaskConical } from 'lucide-react';
import { GalleryHero, AlbumSelector, AlbumGrid, MachineCategories, GalleryCTA, type Album, type MachineCategory } from '../components/gallery';
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

const machineCategories: MachineCategory[] = [
  { id: 'fabrication', name: 'Fabrication Equipment', Icon: Settings, images: [gallery1, gallery2] },
  { id: 'manufacturing', name: 'Manufacturing Machinery', Icon: Wrench, images: [gallery3, gallery4] },
  { id: 'processing', name: 'Processing Equipment', Icon: Zap, images: [gallery5, gallery6] },
  { id: 'laser', name: 'Laser Systems', Icon: Lightbulb, images: [gallery7, gallery8] },
  { id: 'automation', name: 'Automation Equipment', Icon: Cpu, images: [gallery9, gallery10] },
  { id: 'welding', name: 'Welding Systems', Icon: Flame, images: [gallery1, gallery3] },
  { id: 'cutting', name: 'Cutting Machines', Icon: Scissors, images: [gallery2, gallery4] },
  { id: 'inspection', name: 'Inspection Equipment', Icon: Search, images: [gallery5, gallery7] },
  { id: 'material-handling', name: 'Material Handling', Icon: Package, images: [gallery6, gallery8] },
  { id: 'quality-control', name: 'Quality Control', Icon: Check, images: [gallery9, gallery1] },
  { id: 'test', name: 'Test Equipment', Icon: FlaskConical, images: [gallery2, gallery5] },
  { id: 'support', name: 'Support Equipment', Icon: Wrench, images: [gallery3, gallery6] }
];

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0].id);
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const currentAlbum = albums.find(album => album.id === selectedAlbum);

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

  return (
    <>
      <GalleryHero />

      {/* Gallery Content */}
      <section id="gallery-content" className="w-full py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AlbumSelector albums={albums} selectedAlbum={selectedAlbum} onSelectAlbum={setSelectedAlbum} />

          {currentAlbum && <AlbumGrid album={currentAlbum} />}

          <MachineCategories categories={machineCategories} />

          <GalleryCTA />
        </div>
      </section>
    </>
  );
}
