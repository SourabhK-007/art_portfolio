"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // ScrollTrigger to play/pause video when it hits top
    const trigger = ScrollTrigger.create({
      trigger: videoEl,
      start: "top top", // when video top hits viewport top
      end: "bottom top", // until video bottom leaves viewport top
      onEnter: () => videoEl.play(),
      onEnterBack: () => videoEl.play(),
      onLeave: () => videoEl.pause(),
      onLeaveBack: () => videoEl.pause(),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="sticky top-0 z-20">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto"
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
