import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import MachineExchangeProgram from './pages/MachineExchangeProgram'
import ModularCenters from './pages/ModularCenters'
import Platform from './pages/Platform'
import Partners from './pages/Partners'
import Modoola from './pages/Modoola'
import MachineExchange from './pages/MachineExchange'
import TitaniumLaser from './pages/TitaniumLaser'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/machine-exchange-program" element={<MachineExchangeProgram />} />
          <Route path="/modular-centers" element={<ModularCenters />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/modoola" element={<Modoola />} />
          <Route path="/products/exchange" element={<MachineExchange />} />
          <Route path="/products/titanium" element={<TitaniumLaser />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
