"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  // {
  //   title: "Collaborative Editing",
  //   description:
  //     "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  //   content: (
  //     <div
  //       className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
  //       Collaborative Editing
  //     </div>
  //   ),
  // },
  {
    title: "Your next watch, sorted",
    description:
      "Discover trending movies and TV shows powered by TMDB. Search for any title, explore what's hot right now, and get all the details you need — cast, ratings, overview — in one clean interface built for film lovers.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white" id="cards">
        <img
          src="https://i.imghippo.com/files/JDR2730Dow.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="/" />
      </div>
    ),
  },
  {
    title: "Everything MNTLabs, one place",
    description:
      "The central hub for all MNTLabs products. Explore the full suite, track what's live, and see what's coming next. Built to showcase the vision behind every project under the MNTLabs brand.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.imghippo.com/files/sEqq7943ZW.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="/" />
      </div>
    ),
  },
  {
    title: "Every goal. Every second",
    description:
      "Never miss a moment with live score updates and instant notifications. MNT LiveScore keeps you locked in with real-time match tracking, goal alerts, and key play highlights — all delivered the second they happen.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.imghippo.com/files/MYvA1936k.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="/" />
      </div>
    ),
  },
  {
    title: "Real time weather, anywhere",
    description:
      "Stay ahead of the forecast with live temperature, humidity, and cloud condition updates for any city. Weathora pulls accurate data and delivers push notifications straight to you — no refreshing, no guessing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.imghippo.com/files/hYx4340iJQ.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="/" />
      </div>
    ),
  },
  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div
  //       className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div
  //       className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4" id="cards">
      <StickyScroll content={content} />
    </div>
  );
}
