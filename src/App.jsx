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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>  
      <MacbookScrollDemo/>
      <HeroSectionOne/> 
      <StickyScrollRevealDemo/>
      <CardHoverEffectDemo/>
      
    </>
  )
}

export default App
