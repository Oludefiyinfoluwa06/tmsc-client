export default function SystemSection() {
  const points = [
    "Machine & Skills centers are designed around a standardized, production-led model.",
    "Training happens within live industrial environments, where learning is tied directly to real production and use of machines.",
    "Each centre follows a defined structure and operating approach, allowing the same model to be deployed consistently across locations.",
    "This approach prioritizes execution, repeatability, and measurable outcomes, rather than classroom-only instruction or ad-hoc customisation."
  ];

  return (
    <section className="w-full py-32 bg-linear-to-b from-white via-red-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">How the Model Works</h2>
          <div className="w-20 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 hover:bg-red-50/30">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-red-500 to-red-600 text-white font-bold text-lg mt-0.5">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
