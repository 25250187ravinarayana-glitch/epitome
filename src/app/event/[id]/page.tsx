"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { eventsData } from "@/lib/data/events";
import { ArrowLeft } from "lucide-react";
// import { PhoneCall } from "lucide-react";

export default function EventDetailPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params?.id as string;
  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-st-black">
        <div className="text-center">
          <h1 className="font-benguiat text-4xl text-st-text">Event Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="mt-4 rounded bg-st-red px-6 py-3 font-benguiat text-white hover:bg-st-red-light"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-st-black">
      {/* Background Image with Fade Effect */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay - image visible in top ~40%, then fades to black */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.7) 50%, #000000 80%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="sticky top-0 z-20 bg-st-darker/95 backdrop-blur-sm border-b-2 border-st-red px-4 py-4">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 rounded-lg bg-st-red px-4 py-2 font-benguiat text-white transition-all hover:bg-st-red-light"
          >
            <ArrowLeft size={20} />
            BACK
          </button>
        </div>

        {/* Event Content */}
        <div className="mx-auto max-w-4xl px-4 py-8 pb-20">
          

          {/* Event Title */}
          <h1 className="mb-4 font-benguiat text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {event.title}
          </h1>

          {/* Category Badge */}
          <div className="mb-8 inline-block rounded-lg border-2 border-st-red bg-st-darker px-4 py-2 font-mono text-sm text-st-cream">
            {event.category.toUpperCase()} EVENT
          </div>

          {/* Description Section */}
          <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-benguiat text-2xl font-bold text-white md:text-3xl">
              About This Event
            </h2>
            <p className="font-mono text-lg leading-relaxed text-st-text">
              {event.description}
            </p>
          </div>

          {/* Event Details */}
          <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-benguiat text-2xl font-bold text-white md:text-3xl">
              Event Details
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-mono text-st-text">
                  <strong className="text-white">Date:</strong> {event.date}
                </p>
              </div>
              <div>
                <p className="font-mono text-st-text">
                  <strong className="text-white">Team Size:</strong> {event.teamSize}
                </p>
              </div>
              <div>
                <p className="font-mono text-st-text">
                  <strong className="text-white">Venue:</strong> {event.venue}
                </p>
              </div>
              <div>
                <p className="font-mono text-st-text">
                  <strong className="text-white">Category:</strong>{" "}
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </p>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-4 font-benguiat text-2xl font-bold text-white md:text-3xl">
              Event Rules
            </h2>
            <ul className="list-inside list-disc space-y-3 font-mono text-st-text">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Coordinators Section */}
          <div className="rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-benguiat text-2xl font-bold text-white md:text-3xl">
              Student Coordinators
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="rounded-lg border border-st-red/50 bg-st-black/50 p-4">
                  <p className="mb-2 font-mono text-lg text-white font-bold">
                    {coordinator.name}
                  </p>
                  {coordinator.phone && (
                    <p className="font-mono text-st-text">
                      <strong className="text-white">Phone:</strong> {coordinator.phone}
                    </p>
                  )}
                  {/* <p className="mb-4 font-mono text-st-text">
                    <strong className="text-white">Email:</strong> {coordinator.email}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:flex-col sm:gap-3">
                    <Link
                      href={`tel:+91${coordinator.phone}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 rounded-lg bg-st-red px-4 py-2 font-benguiat text-white transition-all hover:bg-st-red-light sm:justify-start"
                    >
                      <PhoneCall size={18} />
                      Call
                    </Link>
                    
                    <Link
                      href={`https://wa.me/91${coordinator.phone}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-benguiat text-white transition-all hover:bg-green-700 sm:justify-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                      WhatsApp
                    </Link>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-benguiat text-2xl font-bold text-white md:text-3xl">
              Staff Coordinators
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {event.staffcoordinators.map((coordinator, index) => (
                <div key={index} className="rounded-lg border border-st-red/50 bg-st-black/50 p-4">
                  <p className="mb-2 font-mono text-lg text-white font-bold">
                    {coordinator.name}
                  </p>
                  {coordinator.phone && (
                    <p className="font-mono text-st-text">
                      <strong className="text-white">Phone:</strong> {coordinator.phone}
                    </p>
                  )}
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
