import SEO from '../components/SEO'
import Hero from '../components/Hero'
import FeaturedDinosaurs from '../components/FeaturedDinosaurs'
import ExploreEras from '../components/ExploreEras'
import ExploreHabitats from '../components/ExploreHabitats'
import EarthHistory from '../components/EarthHistory'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <div id="main-content">
      <SEO url="https://www.dinorex.org" />
      <Hero />
      <div id="dinosaurios"><FeaturedDinosaurs /></div>
      <div id="eras"><ExploreEras /></div>
      <div id="habitats"><ExploreHabitats /></div>
      <EarthHistory />
      <CallToAction />
    </div>
  )
}

