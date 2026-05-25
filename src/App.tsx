import { lazy, Suspense } from 'react'
import './index.css'
import SEO from './components/SEO'
import Hero from './components/Hero'

// Lazy load components below the fold to improve PageSpeed
const FeaturedDinosaurs = lazy(() => import('./components/FeaturedDinosaurs'))
const ExploreEras = lazy(() => import('./components/ExploreEras'))
const ExploreHabitats = lazy(() => import('./components/ExploreHabitats'))
const EarthHistory = lazy(() => import('./components/EarthHistory'))
const CallToAction = lazy(() => import('./components/CallToAction'))

function App() {
  return (
    <div>
      <SEO />
      <Hero />
      <Suspense fallback={<div style={{ height: '100vh', background: '#000' }} />}>
        <FeaturedDinosaurs />
        <ExploreEras />
        <ExploreHabitats />
        <EarthHistory />
        <CallToAction />
      </Suspense>
    </div>
  )
}

export default App
