"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { eventsData, EVENT_DATE, EVENT_VENUE, type Event } from "@/lib/data/events";

export const EventsSection = () => {
  return (
    <section
      id="events"
      className="relative min-h-screen bg-st-dark py-20 px-4"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <div className="relative mx-auto mb-4 h-40 w-full max-w-2xl">
            <Image
        
              src="/titles/events.png"
              alt="Events"
              fill
              className="object-contain h-60 w-full"
            />
          </div>
          <p className="font-mono text-lg text-st-text-dim">
            HAVE YOU SEEN THESE CHALLENGES?
          </p>
          <div className="mt-2 flex flex-col items-center gap-2 font-mono text-sm text-st-cream">
            <p>Last seen: {EVENT_DATE}</p>
            <p>Location: {EVENT_VENUE}</p>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event: Event, index: number) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({
  event,
  index,
}: {
  event: Event;
  index: number;
}) => {
  return (
    <div
      className="group relative mx-auto w-full max-w-sm transition-transform duration-300 hover:scale-105"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {/* Paper Background with tape effect */}
      <div className="relative rounded-lg border-4 border-st-darker bg-st-cream p-6 shadow-2xl">
        {/* Logo and Title Image - centered at same level */}
        <div className="mb-4 flex items-center justify-center gap-4 border-b-4 border-dashed border-st-darker pb-4">
          {/* Logo */}
          <div className="relative h-20 w-20 flex-shrink-0 border-4 border-st-darker bg-white shadow-lg">
            <Image
              src={event.logo}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Title Image */}
          <div className="relative h-20 flex-1">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Stranger Things Themed Background Image */}
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded border-4 border-st-darker bg-white">
          <Image
            src={event.titleimg}
            alt={`${event.title} background`}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Title */}
        <h4 className="mb-2 font-benguiat text-2xl font-bold text-st-black">
          {event.title}
        </h4>

        {/* Event Details */}
        <div className="mb-4 space-y-1 font-mono text-sm text-st-black">
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>
        </div>

        {/* View More Button */}
        <Link
          href={`/event/${event.id}`}
          className="block w-full rounded bg-st-red px-6 py-3 text-center font-benguiat text-lg font-bold text-white shadow-lg transition-all hover:bg-st-red-light hover:shadow-xl"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};
