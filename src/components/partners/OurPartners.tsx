import nnpc from '../../assets/partners/nnpc.png'
import nnpc2 from '../../assets/partners/nnpc2.png'
import ccnl from '../../assets/partners/ccnl.png'
import hongniu from '../../assets/partners/hongniu.png'
import itf from '../../assets/partners/itf.jpeg'
import naf from '../../assets/partners/naf.png'
import nigeriapresidentseal from '../../assets/partners/nigeriapresidentseal.png'
import npa from '../../assets/partners/npa.webp'
import rif from '../../assets/partners/rif.png'
import south from '../../assets/partners/south.png'

const partners = [nnpc, ccnl, hongniu, itf, naf, nnpc2, nigeriapresidentseal, npa, rif, south]

export default function OurPartners() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Our Partners</h2>
        <p className="text-gray-700 text-center mb-20 max-w-2xl mx-auto text-lg">
          We work with leading organizations across government, industry, and finance to transform African manufacturing.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-red-500/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32 group hover:-translate-y-2">
              <img 
                src={partner} 
                alt={`Partner ${idx + 1}`}
                className="h-20 w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
