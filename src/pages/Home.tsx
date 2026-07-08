import { lazy, Suspense } from 'react'
import SEO from '../components/SEO'

const Hero = lazy(() => import('../components/Hero'))
const FeaturedDinosaurs = lazy(() => import('../components/FeaturedDinosaurs'))
const ExploreEras = lazy(() => import('../components/ExploreEras'))
const ExploreHabitats = lazy(() => import('../components/ExploreHabitats'))
const EarthHistory = lazy(() => import('../components/EarthHistory'))
const CallToAction = lazy(() => import('../components/CallToAction'))

export default function Home() {
  return (
    <div id="main-content">
      <SEO url="https://www.dinorex.org" />
      <Suspense fallback={<div style={{ height: '100vh', background: '#070504' }} />}>
        <Hero />
        <div id="dinosaurios"><FeaturedDinosaurs /></div>
        <div id="eras"><ExploreEras /></div>
        <div id="habitats"><ExploreHabitats /></div>
        <EarthHistory />
        <CallToAction />
      </Suspense>
    </div>
  )
}

