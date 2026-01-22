export default function Standardization() {
  const highlights = [
    "Standardization is the operating foundation of Machine & Skills.",
    "Each centre is deployed using the same structural layout, machine configuration, and operating logic. This ensures consistency in how centers are set up, used, and managed across locations.",
    "By standardizing the environment, we reduce variability, control costs, and enable repeatable outcomes without redesigning the model for each deployment.",
    "Flexibility exists within the framework, not outside it. Local conditions are accommodated without altering the core structure or operating approach."
  ];

  return (
    <section className="w-full py-32 bg-linear-to-b from-red-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Standardization</h2>
          <div className="w-20 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {highlights.map((text, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg hover:border-red-200 transition-all duration-300 group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-red-500 to-red-600 rounded-l-xl"></div>
              <div className="pl-6">
                <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
