import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './index.css'

const Home = lazy(() => import('./pages/Home'))
const DinosaurPage = lazy(() => import('./pages/DinosaurPage'))
const EraHubPage = lazy(() => import('./pages/EraHubPage'))
const HabitatHubPage = lazy(() => import('./pages/HabitatHubPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ background: '#070504', height: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criaturas/:slug" element={<DinosaurPage />} />
          <Route path="/eras/:era" element={<EraHubPage />} />
          <Route path="/habitats/:habitat" element={<HabitatHubPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

