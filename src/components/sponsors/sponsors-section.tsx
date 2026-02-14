"use client";

import React from "react";
import Image from "next/image";
import { sponsorsData, SPONSOR_CONTACT_EMAIL, type Sponsor } from "@/lib/data/sponsors";
import { Mail } from "lucide-react";

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="relative min-h-screen bg-st-darker py-20 px-4"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="relative mx-auto mb-4 h-32 w-full max-w-2xl">
            <Image
              src="/svg/sponsors.png"
              alt="Sponsors"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-mono text-lg text-st-text-dim">
            Powered by These Amazing Partners
          </p>
        </div>

        {/* Sponsors Grid */}
        {sponsorsData.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sponsorsData.map((sponsor: Sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        ) : (
          <div className="mb-12 text-center">
            <div className="vhs-effect relative mx-auto max-w-md rounded-lg border-4 border-st-text-dim bg-st-black p-12">
              <p className="font-mono text-2xl text-st-text-dim">
                [ NO SIGNAL ]
              </p>
              <p className="mt-4 font-mono text-sm text-st-text-dim">
                Sponsor slots available
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl rounded-lg border-4 border-st-red bg-st-black p-8 text-center shadow-2xl">
            <h3 className="mb-4 font-benguiat text-3xl font-bold text-st-cream">
              Become a Sponsor
            </h3>
            <p className="mb-6 font-mono text-st-text">
              Join us in making this event extraordinary. Partner with us and
              get your brand in front of hundreds of talented students.
            </p>
            <a
              href={`mailto:${SPONSOR_CONTACT_EMAIL}`}
              className="glow-red-pulse inline-flex items-center gap-2 rounded-lg bg-st-red px-8 py-4 font-benguiat text-lg font-bold text-white transition-all hover:bg-st-red-light"
            >
              <Mail size={24} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SponsorCard = ({
  sponsor,
}: {
  sponsor: Sponsor;
}) => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "border-gray-400 bg-gray-900";
      case "gold":
        return "border-yellow-500 bg-yellow-950";
      case "silver":
        return "border-gray-300 bg-gray-800";
      case "bronze":
        return "border-orange-600 bg-orange-950";
      default:
        return "border-st-text-dim bg-st-black";
    }
  };

  return (
    <div
      className={`vhs-effect group relative overflow-hidden rounded-lg border-4 p-6 transition-all hover:scale-105 ${getTierColor(sponsor.tier)}`}
    >
      {/* TV Screen Effect */}
      <div className="flex-center h-48 w-full">
        {sponsor.logo ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="font-benguiat text-2xl text-st-text">
            {sponsor.name}
          </div>
        )}
      </div>

      {/* Sponsor Info */}
      <div className="mt-4 text-center">
        <h4 className="font-benguiat text-xl font-bold text-st-cream">
          {sponsor.name}
        </h4>
        <p className="mt-2 font-mono text-xs uppercase text-st-text-dim">
          {sponsor.tier} Sponsor
        </p>
      </div>

      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center font-mono text-sm text-st-red hover:underline"
        >
          Visit Website →
        </a>
      )}
    </div>
  );
};
