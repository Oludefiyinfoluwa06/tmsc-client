import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Deploy Capacity?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a government seeking industrialization, an investor looking for returns, an OEM entering Africa, or a local manufacturer scaling up—we have a path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline">
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
