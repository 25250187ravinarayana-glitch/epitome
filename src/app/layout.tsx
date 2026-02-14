import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import LenisScrollProvider from "@/lib/lenis-provider";
import { NavigationBar } from "@/components/navigation/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EPITOME - Strange Events Await",
  description: "Experience the extraordinary at EPITOME - A Stranger Things themed tech and cultural fest. Join us for coding challenges, cultural performances, and mind-bending quizzes.",
  keywords: ["tech fest", "cultural fest", "college events", "stranger things", "coding competition", "quiz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {/* <LenisScrollProvider> */}
          {children}
        {/* </LenisScrollProvider> */}
      </body>
    </html>
  );
}
