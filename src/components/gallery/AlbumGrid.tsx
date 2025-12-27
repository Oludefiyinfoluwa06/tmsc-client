import { Album } from './types';

interface AlbumGridProps {
  album: Album;
}

export default function AlbumGrid({ album }: AlbumGridProps) {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{album.title}</h2>
        <p className="text-white/70 text-lg">{album.description}</p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {album.images.map((image, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
          >
            <img
              src={image}
              alt={`${album.title} ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <p className="text-sm text-red-600 font-semibold mb-1">IMAGE {idx + 1}</p>
                <p className="text-white/90 text-sm">{album.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
