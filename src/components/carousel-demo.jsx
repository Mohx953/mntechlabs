"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Weathora",
      button: "Explore Component",
      src: "https://d.imgvision.net/mnt/weathoraa.png",
      link:"https://mnt-weathora.vercel.app/",
    },
    {
      title: "MntMovies",
      button: "Explore Component",
      src: "https://d.imgvision.net/mnt/work_5.png",
    },
    {
      title: "MntCentre",
      button: "Explore Component",
      src: "https://d.imgvision.net/mnt/work_6.png",
    },
    {
      title: "MntLiveScore",
      button: "Explore Component",
      src: "https://d.imgvision.net/mnt/work_7.png",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 ">
      <BackgroundBeams />
      <Carousel slides={slideData} className="z-10" />
      
    </div>
  );
}
