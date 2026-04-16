import React from 'react'
import Beams from './Beams';
import { ReactTyped } from "react-typed";
import Navbar from './Navbar';
import { div } from 'motion/react-client';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Landing from './Landing';

const Hero = () => {
  return (
   <BackgroundBeamsWithCollision>
    <Navbar/>
    <Landing/>
    </BackgroundBeamsWithCollision>
  )
}

export default Hero
