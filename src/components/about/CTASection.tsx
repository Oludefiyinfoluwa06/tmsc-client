import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 md:p-16 text-center shadow-lg">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ready to Partner?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Let's explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partners" className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline inline-flex items-center justify-center">
              Apply for Training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
