import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import ForGovernments from './pages/ForGovernments'
import ForInvestors from './pages/ForInvestors'
import ForOEMs from './pages/ForOEMs'
import ForLocal from './pages/ForLocal'
import Products from './pages/Products'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for-governments" element={<ForGovernments />} />
          <Route path="/for-investors" element={<ForInvestors />} />
          <Route path="/for-oems" element={<ForOEMs />} />
          <Route path="/for-local" element={<ForLocal />} />
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
