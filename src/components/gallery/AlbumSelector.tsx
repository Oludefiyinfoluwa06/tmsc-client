import { Album } from './types';

interface AlbumSelectorProps {
  albums: Album[];
  selectedAlbum: string;
  onSelectAlbum: (id: string) => void;
}

export default function AlbumSelector({ albums, selectedAlbum, onSelectAlbum }: AlbumSelectorProps) {
  return (
    <div className="mb-16">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {albums.map((album) => (
          <button
            key={album.id}
            onClick={() => onSelectAlbum(album.id)}
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
  );
}
