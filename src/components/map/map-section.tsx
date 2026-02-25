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
        <div className="mb-8 text-center">
          <div className="relative mx-auto  h-40 w-80 max-w-2xl">
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
          <div className="relative overflow-hidden rounded-lg border-4 border-st-red shadow-2xl" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.306659420099!2d74.86378297483813!3d12.790111787508824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35c25b9787073%3A0x653d5e5dc9d82834!2sSt%20Aloysius%20Institute%20of%20Management%20%26%20Information%20Technology%20(AIMIT)!5e1!3m2!1sen!2sin!4v1771984664402!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location Map"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>

          {/* Location Details */}
          <div className="mt-12 rounded-lg border-2 border-st-red bg-st-darker/50 p-6 backdrop-blur-sm">
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
                  
                  <strong>Email:</strong> epitome@staloysius.ac.in
                  <br />
                  <strong>Hours:</strong> 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Directions Note */}
        <div className="mt-12 text-center">
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
