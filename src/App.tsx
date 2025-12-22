import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import ForGovernments from './pages/ForGovernments'
import ForInvestors from './pages/ForInvestors'
import ForOEMs from './pages/ForOEMs'
import ForLocal from './pages/ForLocal'

function AppLayout() {
  return (
    <div className="site-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
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
