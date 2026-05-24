import './index.css'
import Hero from './components/Hero'
import FeaturedDinosaurs from './components/FeaturedDinosaurs'
import ExploreEras from './components/ExploreEras'
import ExploreHabitats from './components/ExploreHabitats'
import EarthHistory from './components/EarthHistory'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div>
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
