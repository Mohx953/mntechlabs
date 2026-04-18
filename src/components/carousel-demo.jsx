"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Weathora",
      button: "Explore Component",
      src: "https://i.imghippo.com/files/hYx4340iJQ.png",
      link:"https://mnt-weathora.vercel.app/",
    },
    {
      title: "MntMovies",
      button: "Explore Component",
      src: "https://i.imghippo.com/files/JDR2730Dow.png",
      link:'https://mntlabs-movies.vercel.app/',
    },
    {
      title: "MntCentre",
      button: "Explore Component",
      src: "https://i.imghippo.com/files/sEqq7943ZW.png",
      link:"#",
    },
    {
      title: "MntLiveScore",
      button: "Explore Component",
      src: "https://i.imghippo.com/files/MYvA1936k.png",
      link:"https://mohx953.github.io/mntlabs-livescore/live-score.html",
    },
    {
      title: "UniBudget",
      button: "Explore Component",
      src: "https://i.imghippo.com/files/DFFs8486rc.png",
      link:"https://unibudget.ct.ws",
    },
    {
      title: "MNTLABS AI",
      button: "Explore Component",
      src: "https://i.imghippo.com/files/yPxk3476VXM.png",
      link:"#",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 ">
      <BackgroundBeams />
      <Carousel slides={slideData} className="z-10" />
      
    </div>
  );
}
