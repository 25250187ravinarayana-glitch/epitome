"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Copy, Check, ArrowUpRight } from "lucide-react";

type Coordinator = {
  name: string;
  role: string;
  phone: string;
  email?: string;
  image?: string;
};

const studentCoordinators: Coordinator[] = [
  {
    name: "Leander Crasto",
    role: "Student Coordinator",
    phone: "8861718464",
    image: "/pfp/leander.jpg.jpeg",
  },
  {
    name: "DM Suhas",
    role: "Student Coordinator",
    phone: "9108847815",
    image: "/pfp/suhas.jpg.jpeg",
  },
  {
    name: "Vishaka Shetty",
    role: "Student Coordinator",
    phone: "9731846089",
    image: "/pfp/vishaka.jpg.jpeg",
  },
  {
    name: "Ann Maria Baby",
    role: "Student Coordinator",
    phone: "9544693813",
    image: "/pfp/annmaria.jpg.jpeg",
  },
];

const facultyCoordinators: Coordinator[] = [
  {
    name: "Mr. Aravinda Prabu S",
    role: "Faculty Coordinator",
    phone: "9986263916",
    image: "/pfp/Aravindsir.jpg",
  },
  {
    name: "Ms. Gana K V",
    role: "Faculty Coordinator",
    phone: "9995259225",
    image: "/pfp/gaanamaam.jpeg",
  },
];

export const CoordinatorsSection = () => {
  return (
    <section
      id="coordinators"
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
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-benguiat text-4xl font-bold text-st-cream md:text-5xl lg:text-6xl mb-4">
            MEET THE TEAM
          </h2>
          <p className="font-mono text-lg text-st-text-dim">
            The minds behind EPITOME 2026
          </p>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-16">
          <h3 className="mb-8 text-center font-benguiat text-3xl font-bold text-st-red md:text-4xl">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {facultyCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} coordinator={coordinator} />
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div>
          <h3 className="mb-8 text-center font-benguiat text-3xl font-bold text-st-red md:text-4xl">
            Student Coordinators
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} coordinator={coordinator} />
            ))}
          </div>
        </div>

        {/* Call to Action - Explore Institution */}
<div className="mt-16 text-center">
  <h3 className="mb-4 font-benguiat text-3xl font-bold text-white md:text-4xl">
    Discover St Aloysius (Deemed to be University) – AIMIT Centre
  </h3>
  <p className="mx-auto mb-8 max-w-2xl font-mono text-st-text md:text-lg">
    Learn more about our academic programs, facilities, rankings, and admission process.
  </p>

  <Link
    href="/aimit"
    className="group inline-flex items-center gap-3 rounded-lg border-4 border-st-cream bg-st-cream px-8 py-4 font-benguiat text-xl font-bold text-st-black shadow-2xl transition-all duration-300 hover:scale-105 hover:border-st-red hover:bg-st-red hover:text-white hover:shadow-st-red/50"
  >
    <span>Explore the Institution</span>
    <ArrowUpRight
      size={28}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>
</div>

      </div>
    </section>
  );
};

const CoordinatorCard = ({ coordinator }: { coordinator: Coordinator }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async () => {
    if (coordinator.phone) {
      try {
        await navigator.clipboard.writeText(coordinator.phone);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy phone number:", err);
      }
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border-4 border-st-cream bg-st-cream shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-st-red/50">
      {/* Card Content */}
      <div className="relative p-6">
        {/* Profile Image Placeholder */}
        <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-st-red bg-st-darker">
          {coordinator.image ? (
            <Image
              src={coordinator.image}
              alt={coordinator.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-benguiat text-4xl text-st-cream">
                {coordinator.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Name */}
        <h4 className="mb-2 text-center font-benguiat text-xl font-bold text-st-black">
          {coordinator.name}
        </h4>

        {/* Role */}
        <p className="mb-4 text-center font-mono text-sm text-st-darker">
          {coordinator.role}
        </p>

        {/* Contact Info */}
        <div className="space-y-2">
          {coordinator.phone && (
            <button
              onClick={handleCopyPhone}
              className="flex w-full items-center justify-center gap-2 rounded bg-st-red px-4 py-2 font-mono text-sm text-white transition-all hover:bg-st-red-light"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  {coordinator.phone}
                </>
              )}
            </button>
          )}
          {coordinator.email && (
            <a
              href={`mailto:${coordinator.email}`}
              className="flex items-center justify-center gap-2 rounded bg-st-darker px-4 py-2 font-mono text-sm text-white transition-all hover:bg-st-black"
            >
              <Mail size={16} />
              Email
            </a>
          )}
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-st-red/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};
