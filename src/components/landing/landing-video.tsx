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
  const yearRefs = useRef<HTMLSpanElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const text = "EPITOME";
  const year = "2026";
  const letters = text.split("");
  const yearLetters = year.split("");

  useLayoutEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const timeline = animationUtils.createInitialAnimation(
        letterRefs,
        letters
      );
      
      // Animate year after main title
      const yearTimeline = gsap.timeline();
      gsap.set(yearRefs.current, { opacity: 0, y: 50 });
      
      yearRefs.current.forEach((digit, index) => {
        const delay = (letters.length * 0.1) + (index * 0.08);
        yearTimeline.to(
          digit,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          delay
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, letters, yearLetters]);

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
          src="/images/epitomelanding.jpg"
          alt="Stranger Things Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* VHS Effect Overlay */}
      <div className="vhs-effect absolute inset-0 z-10" />

      {/* College Logo */}
      <a
        href="https://drive.google.com/file/d/1F9nqUA9ZRwgPo5ZsZwWaXTZv61b7h6m8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-4 top-4 z-20 h-16 w-16 md:h-20 md:w-20 cursor-pointer transition-transform hover:scale-110"
      >
        <Image
          src="/clg/clglogo.png"
          alt="College Logo"
          fill
          className="object-contain"
          priority
        />
      </a>

      {/* Animated Title */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <h1 className="flex flex-wrap justify-center gap-2 font-benguiat text-6xl font-bold tracking-wider text-white sm:text-7xl md:text-8xl lg:text-9xl">
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

        {/* Year */}
        <div className="flex items-center gap-4 mt-2">
          {/* Left Line */}
          <div className="h-0.5 w-12 bg-st-red glow-red sm:w-16 md:w-20"></div>
          
          {/* Year Text */}
          <div className="flex gap-1 font-benguiat text-3xl font-bold tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {yearLetters.map((digit, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) yearRefs.current[index] = el;
                }}
                className="inline-block glow-red"
              >
                {digit}
              </span>
            ))}
          </div>
          
          {/* Right Line */}
          <div className="h-0.5 w-12 bg-st-red glow-red sm:w-16 md:w-20"></div>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-center font-mono text-lg text-st-text-dim md:text-xl">
          An intercollegiate fest
        </p>

        {/* Event Date */}
        <p className="mt-4 rounded-lg border border-st-red bg-st-darker/80 px-6 py-2 font-mono text-sm text-st-cream backdrop-blur-sm">
          March 10, 2026
        </p>

        {/* Organized By */}
        <p className="mt-6 font-mono text-xs text-st-text-dim">
          Organised by AIMIT
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
