"use client";

import React from "react";
import Image from "next/image";

export const MapSection = () => {
  return (
    <section
      id="map"
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
      
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-2 text-center">
          <div className="relative mx-auto mb-2 h-40 w-80 max-w-2xl">
            <Image
              src="/titles/location.png"
              alt="Location"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-mono text-lg text-st-text-dim">
            Find Us in the Real World
          </p>
        </div>

        {/* Map Container */}
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg border-4 border-st-red shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=St+Aloysius+Institute+of+Management+and+Information+Technology,+Beeri,+Kotekkar,+Mangaluru&output=embed"
              className="h-96 w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location Map"
            />
          </div>

          {/* Location Details */}
          <div className="mt-8 rounded-lg border-2 border-st-red bg-st-darker/50 p-6 backdrop-blur-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-benguiat text-xl font-bold text-st-cream">
                  Venue Address
                </h3>
                <p className="font-mono text-st-text">
                  St Aloysius Institute of Management
                  <br />
                  and Information Technology
                  <br />
                  Beeri, Mangaluru
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-benguiat text-xl font-bold text-st-cream">
                  Contact Information
                </h3>
                <p className="font-mono text-st-text">
                  <strong>Phone:</strong> +91 1234567890
                  <br />
                  <strong>Email:</strong> events@epitome.com
                  <br />
                  <strong>Hours:</strong> 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Directions Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 rounded-lg border border-st-red/30 bg-st-darker/50 px-6 py-3 backdrop-blur-sm">
            <span className="font-mono text-sm text-st-text">Free parking available</span>
            <span className="text-st-red">•</span>
            <span className="font-mono text-sm text-st-text">Public transport accessible</span>
          </div>
        </div>
      </div>
    </section>
  );
};
