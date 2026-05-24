import './index.css'
import SEO from './components/SEO'
import Hero from './components/Hero'
import FeaturedDinosaurs from './components/FeaturedDinosaurs'
import ExploreEras from './components/ExploreEras'
import ExploreHabitats from './components/ExploreHabitats'
import EarthHistory from './components/EarthHistory'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div>
      <SEO />
      <Hero />
      <FeaturedDinosaurs />
      <ExploreEras />
      <ExploreHabitats />
      <EarthHistory />
      <CallToAction />
    </div>
  )
}

export default App
