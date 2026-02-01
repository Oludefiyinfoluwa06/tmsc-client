import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import MachineExchangeProgram from './pages/MachineExchangeProgram'
import Partners from './pages/Partners'
import DigitalProductionNodes from './pages/DigitalProductionNodes'
import Operations from './pages/Operations'
import Projects from './pages/Projects'
import Modoola from './pages/Modoola'
import MachineExchange from './pages/MachineExchange'
import TitaniumLaser from './pages/TitaniumLaser'
import ScrollToTop from './components/layout/ScrollTop'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/machine-exchange-program" element={<MachineExchangeProgram />} />
          <Route path="/digital-production-nodes" element={<DigitalProductionNodes />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/projects" element={<Projects />} />
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
