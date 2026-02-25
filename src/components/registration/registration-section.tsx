"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export const RegistrationSection = () => {
  const handleBrochureDownload = () => {
    const brochureLink = process.env.NEXT_PUBLIC_BROCHURE_LINK;
    if (brochureLink) {
      window.open(brochureLink, "_blank");
    } else {
      console.log("Brochure download URL not configured");
    }
  };

  const handleRegistration = () => {
    const registrationLink = process.env.NEXT_PUBLIC_REGISTRATION_LINK ;
    window.open(registrationLink, "_blank");
  };

  return (
    <section
      id="register"
      className="relative min-h-screen py-20 px-4"
      style={{
        backgroundImage: "url('/images/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-st-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header Image */}
        <div className="mb-12 md:mb-16">
          <div className="relative mx-auto h-20 w-80 max-w-4xl md:h-56 lg:h-64">
            <Image
              src="/titles/join.png"
              alt="Join"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Side - Brochure Card */}
          <div className="flex items-center justify-center">
            <div
              onClick={handleBrochureDownload}
              className="group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-lg border-4 border-st-cream bg-linear-to-b from-st-cream to-st-cream/80 p-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-st-red/50"
            >
              {/* Brochure Header */}
              <div className="mb-3 text-center">
                <h4 className="font-benguiat text-3xl font-bold text-st-black md:text-4xl">
                  BROCHURE
                </h4>
                <p className="mt-1 font-mono text-xs text-st-darker">
                  GET FULL EVENT DETAILS
                </p>
              </div>

              {/* Brochure Image */}
              <div className="relative mb-3 h-48 w-full overflow-hidden rounded border-4 border-st-darker bg-linear-to-br from-st-red/80 to-st-darker md:h-56">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <Download className="mx-auto mb-3 h-16 w-16 text-white md:h-20 md:w-20" />
                    <p className="font-benguiat text-2xl text-white md:text-3xl">
                      EPITOME
                    </p>
                    <p className="mt-1 font-mono text-xs text-st-cream md:text-sm">
                      2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Date */}
              <div className="mb-3 text-center">
                <p className="font-benguiat text-xl text-st-black md:text-2xl">
                  MAR 10
                </p>
              </div>

              {/* Download CTA */}
              <button className="w-full rounded-lg border-2 border-st-darker bg-st-red py-3 text-center transition-all duration-300 hover:bg-st-darker hover:scale-105 active:scale-95">
                <div className="flex items-center justify-center gap-2">
                  <Download className="h-5 w-5 text-white" />
                  <p className="font-benguiat text-lg text-white md:text-xl">
                    DOWNLOAD NOW
                  </p>
                </div>
              </button>

              {/* Event Name Footer */}
              <div className="mt-3 text-center">
                <p className="font-benguiat text-2xl font-bold text-st-black md:text-3xl">
                  EPITOME
                </p>
                <p className="font-mono text-xs text-st-darker">
                  AIMIT
                </p>
              </div>

              
            </div>
          </div>

          {/* Right Side - Registration CTA */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-benguiat text-3xl font-bold text-st-cream md:text-4xl lg:text-5xl">
              Secure Your Spot 
            </h3>
            
            <p className="font-mono text-base text-st-text leading-relaxed md:text-lg">
              Register now and be part of EPITOME 2026. Experience mysterious challenges,
              mind-bending competitions, and extraordinary events that await you.
            </p>

            {/* Register Button */}
            <button
              onClick={handleRegistration}
              className="group relative w-full overflow-hidden rounded-lg border-4 border-st-red bg-st-red px-8 py-4 font-benguiat text-2xl font-bold text-white shadow-lg transition-all duration-300 hover:bg-st-red-light hover:shadow-st-red/50"
            >
              <span className="relative z-10">REGISTER</span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>

            {/* Additional Info */}
            <div className="space-y-1.5 font-mono text-m text-st-text md:text-sm">
              <p className="flex items-center gap-2">
                <span className="text-st-red">→</span>
                No registration fees
              </p>
              <p className="flex items-center gap-2">
                <span className="text-st-red">→</span>
                Limited slots available
              </p>
              <p className="flex items-center gap-2">
                <span className="text-st-red">→</span>
                Open to all ug college students
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-st-text">
            For any queries or help, contact us at{" "}
            <a
              href="mailto:epitome@staloysius.ac.in"
              className="text-st-red underline transition-colors hover:text-st-red-light"
            >
              epitome@staloysius.ac.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
