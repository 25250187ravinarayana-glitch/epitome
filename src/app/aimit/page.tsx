"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function AIMITPage() {
  const router = useRouter();

  const handleBrochureDownload = () => {
    // TODO: Add actual brochure download link
    window.open("https://drive.google.com/file/d/1F9nqUA9ZRwgPo5ZsZwWaXTZv61b7h6m8/view?usp=sharing", "_blank");
  };

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
        {/* Gradient overlay */}
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
            BACK TO HOME
          </button>
        </div>

        {/* Page Content */}
        <div className="mx-auto max-w-6xl px-4 py-12 pb-20">
          {/* College Logo and Name */}
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="relative mb-6 h-32 w-32 md:h-40 md:w-40">
              <Image
                src="/clg/clglogo.png"
                alt="AIMIT Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="mb-4 font-benguiat text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              ST ALOYSIUS INSTITUTE OF MANAGEMENT AND INFORMATION TECHNOLOGY
            </h1>
            <p className="font-mono text-lg text-st-text-dim">
              (AIMIT)
            </p>
          </div>

          {/* About Section */}
        <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
        <h2 className="mb-4 font-benguiat text-2xl font-bold text-white md:text-3xl">
            About AIMIT
        </h2>
        <div className="space-y-4 font-mono text-base leading-relaxed text-st-text md:text-lg">
            <p>
            St Aloysius Institute of Management & Information Technology (AIMIT) is a
            centre of St Aloysius (Deemed to be University), Mangaluru, with a
            remarkable legacy of 146 years of excellence in education. Established
            in 1880, the institution holds an A++ NAAC accreditation with a CGPA of
            3.67.
            </p>
            <p>
            AIMIT offers MBA and IT programmes designed with strong career prospects
            in mind. With industry exposure, high-end facilities, and access to a
            growing alumni network, the institution provides transformative
            education with real-world application.
            </p>
            <p>
            Guided by the Jesuit motto “Lucet et Ardet” (Shine to Enkindle), the
            University is committed to holistic education that nurtures academic
            excellence, moral integrity, social responsibility, and professional
            dedication.
            </p>
        </div>
        </div>


          {/* Key Highlights */}
            <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-benguiat text-2xl font-bold text-white md:text-3xl">
                Key Highlights
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-st-red/50 bg-st-black/50 p-4">
                <h3 className="mb-2 font-benguiat text-xl text-st-cream">
                    NAAC A++ Accredited
                </h3>
                <p className="font-mono text-sm text-st-text">
                    Accredited with A++ grade and 3.67 CGPA, reflecting academic excellence.
                </p>
                </div>

                <div className="rounded-lg border border-st-red/50 bg-st-black/50 p-4">
                <h3 className="mb-2 font-benguiat text-xl text-st-cream">
                    Outlook ICARE Rankings 2025
                </h3>
                <p className="font-mono text-sm text-st-text">
                    Ranked 43rd Top B-School in India and 1st in Mangalore.
                </p>
                </div>

                <div className="rounded-lg border border-st-red/50 bg-st-black/50 p-4">
                <h3 className="mb-2 font-benguiat text-xl text-st-cream">
                    Industry-Focused Curriculum
                </h3>
                <p className="font-mono text-sm text-st-text">
                    Specializations in Strategic Management, Finance, Marketing, HR,
                    Business Analytics, Cybersecurity, and IT Project Management.
                </p>
                </div>

                <div className="rounded-lg border border-st-red/50 bg-st-black/50 p-4">
                <h3 className="mb-2 font-benguiat text-xl text-st-cream">
                    Modern Infrastructure
                </h3>
                <p className="font-mono text-sm text-st-text">
                    State-of-the-art labs, digital classrooms, placement & training centre,
                    hostel facilities, and eco-friendly campus.
                </p>
                </div>
            </div>
            </div>


          {/* Programs Offered */}
            <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-benguiat text-2xl font-bold text-white md:text-3xl">
                Programs Offered
            </h2>
            <ul className="space-y-3 font-mono text-st-text">
                <li className="flex items-center gap-3">
                <span className="text-st-red">•</span>
                <span>Master of Business Administration (MBA)</span>
                </li>
                <li className="flex items-center gap-3">
                <span className="text-st-red">•</span>
                <span>Master of Computer Applications (MCA)</span>
                </li>
                <li className="flex items-center gap-3">
                <span className="text-st-red">•</span>
                <span>Master of Science (MSc)</span>
                </li>
            </ul>
            <p className="mt-4 font-mono text-sm text-st-text">
                Admissions Open 2026–2027
            </p>
            </div>


          {/* Contact Information */}
            <div className="mb-8 rounded-lg border-2 border-st-red bg-st-darker/90 p-6 backdrop-blur-sm">
            <h2 className="mb-6 font-benguiat text-2xl font-bold text-white md:text-3xl">
                Contact Information
            </h2>
            <div className="space-y-4 font-mono text-st-text">
                <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-st-red" size={20} />
                <div>
                    <p className="font-bold text-white">Address</p>
                    <p>St Aloysius (Deemed to be University) – AIMIT Centre</p>
                    <p>Beeri, Kotekar, Mangaluru – 575022</p>
                </div>
                </div>

                <div className="flex items-start gap-3">
                <Phone className="mt-1 text-st-red" size={20} />
                <div>
                    <p className="font-bold text-white">Phone</p>
                    <p>+91 91412 01851 / 91412 01852</p>
                    <p>+91 91410 10299</p>
                    <p>0824-2286881 / 82</p>
                </div>
                </div>

                <div className="flex items-start gap-3">
                <Mail className="mt-1 text-st-red" size={20} />
                <div>
                    <p className="font-bold text-white">Email</p>
                    <p>admissions@staloysius.ac.in</p>
                </div>
                </div>

                <div className="flex items-start gap-3">
                <Globe className="mt-1 text-st-red" size={20} />
                <div>
                    <p className="font-bold text-white">Website</p>
                    <a
                    href="https://staloysius.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-st-red hover:underline"
                    >
                    www.staloysius.edu.in
                    </a>
                </div>
                </div>
            </div>
            </div>

          {/* Brochure Download Section */}
          <div className="rounded-lg border-2 border-st-red bg-st-darker/90 p-8 text-center backdrop-blur-sm">
            <h2 className="mb-4 font-benguiat text-2xl font-bold text-white md:text-3xl">
              Download Brochure
            </h2>
            <p className="mb-6 font-mono text-st-text">
              Get detailed information about our institution, programs, facilities, and admission process
            </p>
            <button
              onClick={handleBrochureDownload}
              className="inline-flex items-center gap-2 rounded-lg border-4 border-st-red bg-st-red px-8 py-4 font-benguiat text-xl font-bold text-white shadow-lg transition-all hover:bg-st-red-light hover:shadow-st-red/50"
            >
              <Download size={24} />
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
