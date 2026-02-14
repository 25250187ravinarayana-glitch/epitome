"use client";

import React, { useLayoutEffect, useRef, useState, memo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const animationUtils = {
  createInitialAnimation: (
    letterRefs: React.MutableRefObject<HTMLSpanElement[]>,
    letters: string[]
  ) => {
    const tl = gsap.timeline();
    const ltr = letterRefs.current;

    gsap.set(ltr, {
      opacity: 0,
      y: 50,
    });

    // Animate each letter with flickering effect
    ltr.forEach((letter, index) => {
      const delay = index * 0.1;
      const char = letters[index];

      if (char === " ") {
        // Just make space visible
        tl.to(letter, { opacity: 1, duration: 0.1 }, delay);
      } else if (["E", "P", "I", "T", "O", "M"].includes(char)) {
        // Main letters with flicker effect
        tl.to(
          letter,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              // Add flicker effect after appearing
              gsap.to(letter, {
                opacity: 0.4,
                duration: 0.05,
                repeat: 3,
                yoyo: true,
                ease: "none",
              });
            },
          },
          delay
        );
      } else {
        // Default animation for other characters
        tl.to(
          letter,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          delay
        );
      }
    });

    return tl;
  },
};

export const LandingVideo = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<HTMLSpanElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const text = "EPITOME";
  const letters = text.split("");

  useLayoutEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const timeline = animationUtils.createInitialAnimation(
        letterRefs,
        letters
      );
      timeline.play();
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, letters]);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToEvents = () => {
    const element = document.querySelector("#events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg"
          alt="Stranger Things Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* VHS Effect Overlay */}
      <div className="vhs-effect absolute inset-0 z-10" />

      {/* College Logo */}
      <div className="absolute left-4 top-4 z-20 h-16 w-16 md:h-20 md:w-20">
        <Image
          src="/clg/clglogo.png"
          alt="College Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Animated Title */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <h1 className="flex flex-wrap justify-center gap-2 font-benguiat text-6xl font-bold tracking-wider text-st-text sm:text-7xl md:text-8xl lg:text-9xl">
          {letters.map((letter, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) letterRefs.current[index] = el;
              }}
              className={`inline-block glow-red ${letter === " " ? "w-4" : ""}`}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-center font-mono text-lg text-st-text-dim md:text-xl">
          Strange Events • Stranger Challenges
        </p>

        {/* Event Date */}
        <p className="mt-4 rounded-lg border border-st-red bg-st-darker/80 px-6 py-2 font-mono text-sm text-st-cream backdrop-blur-sm">
          March 10, 2026
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToEvents}
        className="absolute bottom-8 z-20 animate-bounce cursor-pointer text-st-text hover:text-st-red"
        aria-label="Scroll to events"
      >
        <ChevronDown size={48} />
      </button>
    </div>
  );
});

LandingVideo.displayName = "LandingVideo";
