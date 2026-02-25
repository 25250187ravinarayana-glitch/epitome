"use client";

import React from "react";
import Image from "next/image";
import { generalRules, additionalRules, type Rule } from "@/lib/data/rules";

export const RulesSection = () => {
  return (
    <section
      id="rules"
      className="relative min-h-screen bg-st-black py-20 px-4"
    >
      <div className="mx-auto max-w-5xl">
        {/* Document Header */}
        <div className="mb-2 text-center">
          <div className="relative mx-auto  h-30 w-full max-w-3xl">
            <Image
              src="/titles/classified.png"
              alt="Classified"
              fill
              className="object-contain h-60 w-full"
            />
          </div>
          <p className="font-mono text-st-text-dim">
            TOP SECRET - EVENT REGULATIONS
          </p>
        </div>

        {/* Document Container */}
        <div className="rounded-lg border-4 border-st-red bg-st-darker/50 p-8 shadow-2xl backdrop-blur-sm">
          {/* General Rules */}
          <div className="mb-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 flex-1 bg-st-red" />
              <h3 className="font-benguiat text-2xl font-bold text-st-cream md:text-3xl">
                GENERAL PROTOCOLS
              </h3>
              <div className="h-1 flex-1 bg-st-red" />
            </div>

            <ul className="space-y-4">
              {generalRules.map((rule: Rule) => (
                <li
                  key={rule.id}
                  className="flex items-start gap-3 font-mono text-st-text whitespace-pre-wrap"
                >
                  <span className="text-2xl mt-[-4px]">{rule.icon}</span>
                  <span className="flex-1">{rule.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Rules */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 flex-1 bg-st-red" />
              <h3 className="font-benguiat text-2xl font-bold text-st-cream md:text-3xl">
                SPECIAL INSTRUCTIONS
              </h3>
              <div className="h-1 flex-1 bg-st-red" />
            </div>

            <ul className="space-y-4">
              {additionalRules.map((rule: Rule) => (
                <li
                  key={rule.id}
                  className="flex items-start gap-3 font-mono text-st-text whitespace-pre-wrap"
                >
                  <span className="text-2xl mt-[-4px]">{rule.icon}</span>
                  <span className="flex-1">{rule.text}</span>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        {/* Warning Footer */}
        <div className="mt-8 text-center font-mono text-sm text-st-text-dim">
          <p className="rounded-lg border border-st-red/30 bg-st-red/10 px-4 py-2 inline-block">
            VIOLATION OF THESE RULES MAY RESULT IN DISQUALIFICATION
          </p>
        </div>
      </div>
    </section>
  );
};
