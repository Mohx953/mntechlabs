import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroSectionOne from './components/hero-section-demo-1'
import CarouselDemo from './components/carousel-demo'
import StickyScrollRevealDemo from './components/sticky-scroll-reveal-demo'
import MacbookScrollDemo from './components/macbook-scroll-demo'
import CardHoverEffectDemo from './components/card-hover-effect-demo'
import Footer from './components/Footer'
import WorldMapDemo from './components/world-map-demo'
import WorldMap from './components/ui/world-map'
import InfiniteMovingCardsDemo from './components/infinite-moving-cards-demo'
import StickyBannerDemo from './components/sticky-banner-demo'
import HeroParallaxDemo from './components/hero-parallax-demo'
import Globe3DDemo from './components/3d-globe-demo'
import ThreeDMarqueeDemo from './components/3d-marquee-demo'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StickyBannerDemo/>
      <Hero/>  
      <HeroParallaxDemo/>
      {/* <MacbookScrollDemo/> */}
      <HeroSectionOne/> 
      <StickyScrollRevealDemo/>
      <CarouselDemo/>
      <CardHoverEffectDemo/>
      <ThreeDMarqueeDemo/>
      {/* <InfiniteMovingCardsDemo/> */}

      <Footer/>

      
    </>
  )
}

export default App
