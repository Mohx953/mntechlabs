import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import BackgroundBeamsDemo from "./background-beams-demo";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision-copy";
import BackgroundRippleEffectDemo from "./background-ripple-effect-demo";
import { Show } from "@clerk/react";

export default function MacbookScrollDemo() {
  return (
  <>
 <Show when="signed-out"></Show>
 <Show when="signed-in">
    <div className="w-full overflow-hidden   dark:bg-[#0B0B0F]">
      
      <MacbookScroll
        title={
          <span >
            This website was built in Vite + React, Tailwind Css & Aceternity UI <br /> No kidding.
          </span>
        }
        badge={
          <a href="https://mntlabs-centre.vercel.app">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`https://i.imghippo.com/files/ipeE7828rCc.png`}
        showGradient={false} />
    </div>
    </Show>
    
   </>
  );
}
// MntLabs logo
const Badge = ({
  className
}) => {
  return (
    <img
      src="https://i.imghippo.com/files/uK3985US.png"
      alt="MntLabs logo"
      className={className} />
  );
};
