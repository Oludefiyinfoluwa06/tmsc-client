export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-black via-black to-black relative overflow-hidden pt-32 pb-20">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <p className="text-red-600 text-sm font-semibold mb-3">OUR SOLUTIONS</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          Three Pillars of Industrial Capacity
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Integrated solutions that move machines, skills, and capital in one direction: building Africa's industrial future.
        </p>
      </div>
    </section>
  );
}
