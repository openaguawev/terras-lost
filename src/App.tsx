import { Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import DinosaurPage from './pages/DinosaurPage'
import EraHubPage from './pages/EraHubPage'
import HabitatHubPage from './pages/HabitatHubPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/criaturas/:slug" element={<DinosaurPage />} />
      <Route path="/eras/:era" element={<EraHubPage />} />
      <Route path="/habitats/:habitat" element={<HabitatHubPage />} />
    </Routes>
  )
}

