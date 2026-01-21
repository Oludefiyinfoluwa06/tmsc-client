export default function SystemSection() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">How the Model Works</h2>
          
          <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            <p>Machine & Skills centers are designed around a standardized, production-led model.</p>
            <p>Training happens within live industrial environments, where learning is tied directly to real production and use of machines.</p>
            <p>Each centre follows a defined structure and operating approach, allowing the same model to be deployed consistently across locations.</p>
            <p>This approach prioritizes execution, repeatability, and measurable outcomes, rather than classroom-only instruction or ad-hoc customisation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
