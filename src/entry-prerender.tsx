import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import DinosaurPage from './pages/DinosaurPage'
import EraHubPage from './pages/EraHubPage'
import HabitatHubPage from './pages/HabitatHubPage'
import ArgentineDinosaursHubPage from './pages/ArgentineDinosaursHubPage'

export function render(url: string) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criaturas/:slug" element={<DinosaurPage />} />
        <Route path="/eras/:era" element={<EraHubPage />} />
        <Route path="/habitats/:habitat" element={<HabitatHubPage />} />
        <Route path="/dinosaurios-argentinos" element={<ArgentineDinosaursHubPage />} />
        <Route path="/argentina" element={<Navigate to="/dinosaurios-argentinos" replace />} />
      </Routes>
    </MemoryRouter>
  )
  return { html }
}
