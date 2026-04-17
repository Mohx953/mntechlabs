import React from 'react'
import Beams from './Beams';


import { div } from 'motion/react-client';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Landing from './Landing';
import ResizableNavbarDemo from './resizable-navbar-demo';

const Hero = () => {
  return (
   <BackgroundBeamsWithCollision>
    <ResizableNavbarDemo/>
    <Landing/>
    </BackgroundBeamsWithCollision>
  )
}

export default Hero
