"use client";

import React from "react";
import Image from "next/image";

export const EventSchedule = () => {
  return (
    <section id="schedule" className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-black to-red-950/20">
      <div className="container mx-auto px-1 sm:px-2 md:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-red-600 mb-4 sm:mb-6 md:mb-8 lg:mb-12 font-benguiat">
          Event Schedule
        </h2>
        
        {/* Schedule Table */}
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="min-w-[380px] sm:min-w-[500px] md:min-w-[650px] lg:min-w-[800px] border border-red-600 sm:border-2 md:border-3 lg:border-4 rounded-md sm:rounded-lg overflow-hidden bg-black/40">
            {/* Time Headers Row */}
            <div className="grid grid-cols-7 border-b border-red-600 sm:border-b-2 md:border-b-3 lg:border-b-4">
              <div className="bg-red-900/90 border-r border-red-600 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  9:00-10:30
                </h3>
              </div>
              <div className="bg-red-900/90 border-r border-red-600 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  10:30-10:45
                </h3>
              </div>
              <div className="bg-red-900/90 border-r border-red-600 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  10:45-11:45
                </h3>
              </div>
              <div className="bg-red-900/90 border-r border-red-600 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  11:45-1:00
                </h3>
              </div>
              <div className="bg-red-900/90 border-r border-red-600 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  1:00-2:00
                </h3>
              </div>
              <div className="bg-red-900/90 border-r border-red-600 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  2:00-4:00
                </h3>
              </div>
              <div className="bg-red-900/90 p-0.5 sm:p-1 md:p-2 lg:p-3 xl:p-4 text-center">
                <h3 className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-bold text-amber-200 font-benguiat leading-tight">
                  4:00-4:30
                </h3>
              </div>
            </div>

            {/* Main Content - Using flex to span columns vertically */}
            <div className="flex">
              {/* Left side - Inauguration and Tech Break columns that span full height */}
              <div className="flex border-r border-red-600" style={{ width: '28.57%' }}>
                {/* Inauguration */}
                <div className="flex-1 bg-red-950/60 border-r border-red-600 p-1 sm:p-1.5 md:p-2 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center hover:bg-red-900/40 transition-colors duration-300">
                  <p className="text-amber-200 font-bold text-center text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-benguiat tracking-wider [writing-mode:vertical-lr] rotate-180">
                    INAUGURAL
                  </p>
                </div>

                {/* Tech Break */}
                <div className="flex-1 bg-red-950/60 border-r border-red-600 p-1 sm:p-1.5 md:p-2 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center hover:bg-red-900/40 transition-colors duration-300">
                  <p className="text-amber-200 font-bold text-center text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-benguiat tracking-wider [writing-mode:vertical-lr] rotate-180">
                    TEA BREAK
                  </p>
                </div>
              </div>

              {/* Middle - All other events in rows (10:45 - 4:00) */}
              <div className="flex-1 border-r border-red-600">
                {/* Main Events Row */}
                <div className="grid grid-cols-4 border-b border-red-600">
                  {/* Round 1 Events */}
                  <div className="bg-amber-950/50 border-r border-red-600 flex flex-col">
                    <div className="border-b border-red-600 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 flex items-center justify-center flex-1 hover:bg-amber-900/30 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-benguiat leading-tight">
                        CODING<br/>ROUND 1
                      </p>
                    </div>
                    <div className="border-b border-red-600 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 flex items-center justify-center flex-1 hover:bg-amber-900/30 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-benguiat leading-tight">
                        WEB DESIGNING<br/>ROUND 1
                      </p>
                    </div>
                    <div className="p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 flex items-center justify-center flex-1 hover:bg-amber-900/30 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-benguiat leading-tight">
                        QUIZ<br/>ROUND 1
                      </p>
                    </div>
                  </div>

                  {/* Round 2 Events */}
                  <div className="bg-amber-950/50 border-r border-red-600 flex flex-col">
                    <div className="border-b border-red-600 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 flex items-center justify-center flex-1 hover:bg-amber-900/30 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-benguiat leading-tight">
                        CODING<br/>ROUND 2
                      </p>
                    </div>
                    <div className="border-b border-red-600 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 flex items-center justify-center flex-1 hover:bg-amber-900/30 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-benguiat leading-tight">
                        WEB DESIGNING<br/>ROUND 2
                      </p>
                    </div>
                    <div className="p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-3 flex items-center justify-center flex-1 hover:bg-amber-900/30 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm font-benguiat leading-tight">
                        QUIZ<br/>ROUND 2
                      </p>
                    </div>
                  </div>

                  {/* Lunch */}
                  <div className="bg-red-950/60 border-r border-red-600 p-1 sm:p-1.5 md:p-2 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] 2xl:min-h-[200px] hover:bg-red-900/40 transition-colors duration-300">
                    <p className="text-amber-200 font-bold text-center text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-benguiat tracking-wider [writing-mode:vertical-lr] rotate-180">
                      LUNCH
                    </p>
                  </div>

                  {/* Cultural */}
                  <div className="bg-red-950/60 p-1 sm:p-1.5 md:p-2 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] 2xl:min-h-[200px] hover:bg-red-900/40 transition-colors duration-300">
                    <p className="text-amber-200 font-bold text-center text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-benguiat tracking-wider [writing-mode:vertical-lr] rotate-180">
                      CULTURAL
                    </p>
                  </div>
                </div>

                {/* Surprise Event Row (11:45 - 4:00) */}
                <div className="border-b border-red-600">
                  <div className="grid grid-cols-4">
                    <div className="col-span-1 border-r border-red-600 bg-black/20"></div>
                    <div className="col-span-3 bg-red-900/70 p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center hover:bg-red-800/60 transition-colors duration-300">
                      <p className="text-amber-200 font-bold text-center text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-2xl font-benguiat tracking-wider">
                        SURPRISE EVENT
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gaming Row (10:45 - 4:00) */}
                <div>
                  <div className="bg-red-900/70 p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center hover:bg-red-800/60 transition-colors duration-300">
                    <p className="text-amber-200 font-bold text-center text-[9px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-2xl font-benguiat tracking-wider">
                      GAMING
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Valedictory column that spans full height */}
              <div style={{ width: '14.28%' }}>
                <div className="h-full bg-red-950/60 p-1 sm:p-1.5 md:p-2 lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-center hover:bg-red-900/40 transition-colors duration-300">
                  <p className="text-amber-200 font-bold text-center text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl font-benguiat tracking-wider [writing-mode:vertical-lr] rotate-180">
                    VALEDICTORY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center">
            <p className="text-amber-200/70 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-mono">
              
            </p>
          </div>
        </div>

        {/* Commented out image version
        <div className="pl-4 pr-4 relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <Image
            src="/images/schedule.png"
            alt="Event Schedule"
            fill
            className="object-contain"
            priority
          />
        </div>
        */}
      </div>
    </section>
  );
};