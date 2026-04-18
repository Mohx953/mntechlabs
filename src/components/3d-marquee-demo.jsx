"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const images = [
    "https://i.imghippo.com/files/ceGf9815lY.png",
    "https://i.imghippo.com/files/MOX9037xFU.png",
    "https://i.imghippo.com/files/rus8596dQ.png",
    "https://i.imghippo.com/files/kAHW7580GMA.png",
    "https://i.imghippo.com/files/Mz2865Ff.png",
    "https://i.imghippo.com/files/MOX9037xFU.png",
    "https://i.imghippo.com/files/Mz2865Ff.png",
    "https://i.imghippo.com/files/DFFs8486rc.png",
    "https://i.imghippo.com/files/xwMK2132fo.png",
    "https://i.imghippo.com/files/Wfkh5606aQE.png",
    "https://i.imghippo.com/files/DFFs8486rc.png",
    "https://i.imghippo.com/files/hYx4340iJQ.png",
    "https://i.imghippo.com/files/JDR2730Dow.png",
    "https://i.imghippo.com/files/sEqq7943ZW.png",
    "https://i.imghippo.com/files/MOX9037xFU.png",
    "https://i.imghippo.com/files/Mz2865Ff.png",
    "https://i.imghippo.com/files/DFFs8486rc.png",
    "https://i.imghippo.com/files/xwMK2132fo.png",
    "https://i.imghippo.com/files/Wfkh5606aQE.png",
    "https://i.imghippo.com/files/DFFs8486rc.png",
    "https://i.imghippo.com/files/hYx4340iJQ.png",
    "https://i.imghippo.com/files/JDR2730Dow.png",
    "https://i.imghippo.com/files/sEqq7943ZW.png",
    "https://i.imghippo.com/files/MOX9037xFU.png",
    "https://i.imghippo.com/files/Mz2865Ff.png",
    "https://i.imghippo.com/files/DFFs8486rc.png",
    "https://i.imghippo.com/files/xwMK2132fo.png",
    "https://i.imghippo.com/files/Wfkh5606aQE.png",
    "https://i.imghippo.com/files/DFFs8486rc.png",
    "https://i.imghippo.com/files/hYx4340iJQ.png",
    "https://i.imghippo.com/files/JDR2730Dow.png",
    "https://i.imghippo.com/files/sEqq7943ZW.png",
  ];
  return (
    <div
      className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
