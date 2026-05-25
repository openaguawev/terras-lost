import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './index.css'
import SEO from './components/SEO'

const Home = lazy(() => import('./pages/Home'))
const DinosaurPage = lazy(() => import('./pages/DinosaurPage'))

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Suspense fallback={<div style={{ background: '#070504', height: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criaturas/:slug" element={<DinosaurPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
