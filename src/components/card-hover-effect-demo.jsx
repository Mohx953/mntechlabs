import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "MntLabs",
    description:
      "MntLabs is a indie dev company that builds web applications for various purposes.",
    link: "https://mntlabs-centre.vercel.app",
  },
  {
    title: "Mnt-LiveScore",
    description:
      "Mnt-LiveScore is a live score website that provides live scores for various sports.",
    link: "https://mohx953.github.io/mntlabs-livescore/live-score.html",
  },
  {
    title: "Mnt-Movies",
    description:
      "Mnt-Movies is a movie & series website that provides latest & upcoming movies & series",
    link: "https://mntlabs-movies.vercel.app/",
  },
  {
    title: "Mnt-Weathora",
    description:
      "Mnt-Weathora is a weather website that provides weather for any city in the world",
    link: "https://mnt-weathora.vercel.app/",
  },
  {
    title: "Dev-Portfolio",
    description:
      "Mnt-Labs developer portfolio site - Founder of MntLabs",
    link: "https://mntlabs-mahamule.vercel.app/",
  },
  
];
