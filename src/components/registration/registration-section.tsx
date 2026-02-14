"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export const RegistrationSection = () => {
  const handleBrochureDownload = () => {
    // TODO: Add Cloudinary URL for brochure download
    console.log("Brochure download - URL to be added");
  };

  const handleRegistration = () => {
    // TODO: Add registration form URL
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeiNjEekjoymokK0UC7T2TCsxkoJtvWEdlYncVGZgvO1_vxrA/viewform", "_blank");
  };

  return (
    <section
      id="register"
      className="relative min-h-screen py-12 px-4 md:py-20"
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
        <div className="mb-8 md:mb-10">
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Side - Registration CTA */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="font-benguiat text-2xl font-bold text-st-cream md:text-3xl lg:text-4xl">
              Secure Your Spot in the Upside Down
            </h3>
            
            <p className="font-mono text-base text-st-text leading-relaxed md:text-lg">
              Register now and be part of EPITOME 2026. Experience mysterious challenges,
              mind-bending competitions, and extraordinary events that await you.
            </p>

            {/* Register Button */}
            <button
              onClick={handleRegistration}
              className="group relative w-full overflow-hidden rounded-lg border-4 border-st-red bg-st-red px-6 py-4 font-benguiat text-xl font-bold text-white shadow-lg transition-all duration-300 hover:bg-st-red-light hover:shadow-st-red/50 md:w-auto md:text-2xl"
            >
              <span className="relative z-10">REGISTER</span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>

            {/* Additional Info */}
            <div className="space-y-1.5 font-mono text-xs text-st-text-dim md:text-sm">
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
                Open to all college students
              </p>
            </div>
          </div>

          {/* Right Side - Brochure Card */}
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
                  MAR 15-16
                </p>
              </div>

              {/* Download CTA */}
              <div className="rounded-lg border-2 border-st-darker bg-st-darker/10 py-2 text-center">
                <p className="font-benguiat text-lg text-st-black md:text-xl">
                  CLICK TO DOWNLOAD
                </p>
              </div>

              {/* Event Name Footer */}
              <div className="mt-3 text-center">
                <p className="font-benguiat text-2xl font-bold text-st-black md:text-3xl">
                  EPITOME
                </p>
                <p className="font-mono text-xs text-st-darker">
                  St Aloysius Institute
                </p>
              </div>

              {/* Coming Soon Badge */}
              <div className="mt-3 text-center">
                <span className="inline-block rounded-full border-2 border-st-red bg-st-red px-3 py-1 font-mono text-xs text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="mt-8 text-center">
          <p className="font-mono text-sm text-st-text-dim">
            For any queries or help, contact us at{" "}
            <a
              href="mailto:info@epitome.com"
              className="text-st-red underline transition-colors hover:text-st-red-light"
            >
              info@epitome.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
