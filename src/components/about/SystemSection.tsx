export default function SystemSection() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">How the Model Works</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
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
