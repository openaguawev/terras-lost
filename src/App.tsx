import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'

// Route-level code splitting: non-home routes are loaded on-demand
const DinosaurPage = lazy(() => import('./pages/DinosaurPage'))
const EraHubPage = lazy(() => import('./pages/EraHubPage'))
const HabitatHubPage = lazy(() => import('./pages/HabitatHubPage'))
const ArgentineDinosaursHubPage = lazy(() => import('./pages/ArgentineDinosaursHubPage'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criaturas/:slug" element={<DinosaurPage />} />
        <Route path="/eras/:era" element={<EraHubPage />} />
        <Route path="/habitats/:habitat" element={<HabitatHubPage />} />
        <Route path="/dinosaurios-argentinos" element={<ArgentineDinosaursHubPage />} />
        <Route path="/argentina" element={<Navigate to="/dinosaurios-argentinos" replace />} />
      </Routes>
    </Suspense>
  )
}

