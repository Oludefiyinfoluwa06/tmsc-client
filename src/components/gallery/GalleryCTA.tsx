import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryCTA() {
  return (
    <div className="text-center border-t border-white/10 pt-16 mt-32">
      <p className="text-black text-lg mb-6">Ready to see our solutions at work?</p>
      <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline">
        Schedule a Site Visit
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
