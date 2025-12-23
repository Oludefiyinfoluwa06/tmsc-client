export default function CTASection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Deploy Capacity?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Choose your pathway. Book a call with our team to discuss your specific industrial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline">
              Book Strategy Call
            </a>
            <a href="/for-governments" className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 no-underline">
              Find Your Solution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
