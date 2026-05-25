import { lazy, Suspense } from 'react'

const Hero = lazy(() => import('../components/Hero'))
const FeaturedDinosaurs = lazy(() => import('../components/FeaturedDinosaurs'))
const ExploreEras = lazy(() => import('../components/ExploreEras'))
const ExploreHabitats = lazy(() => import('../components/ExploreHabitats'))
const EarthHistory = lazy(() => import('../components/EarthHistory'))
const CallToAction = lazy(() => import('../components/CallToAction'))

export default function Home() {
  return (
    <div id="main-content">
      <Suspense fallback={<div style={{ height: '100vh', background: '#070504' }} />}>
        <Hero />
        <FeaturedDinosaurs />
        <ExploreEras />
        <ExploreHabitats />
        <EarthHistory />
        <CallToAction />
      </Suspense>
    </div>
  )
}
