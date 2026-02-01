import { OurPartners, PartnersCTA, PartnershipOpportunities, PartnershipProcess, WhyPartnerWithUs } from "../components/partners";

export default function Partners() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766813852/WhatsApp_Video_2025-12-22_at_9.17.20_PM_am07yf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-12 text-left pt-20 max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur">
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Partnerships</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Our Partners</h1>
          <p className="text-white/90 text-base leading-relaxed font-light max-w-3xl">Industry leaders and collaborators who support our mission to transform artisanal and industrial sectors.</p>
        </div>
      </section>

      <PartnershipOpportunities />
      <WhyPartnerWithUs />
      <PartnershipProcess />
      <OurPartners />
      <PartnersCTA />
    </>
  )
}
