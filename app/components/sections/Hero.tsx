"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full py-20 flex flex-col items-center justify-center text-center gap-6 px-6 md:px-20 overflow-hidden bg-white">
      {/* Badge container */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-[#fef08a] px-6 py-2.5 rounded-2xl shadow-lg border border-yellow-200/50">
          <span className="text-xl">✦</span>
          <span className="text-black font-semibold tracking-tight text-lg">
            AI - Powered Interview Platform
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto space-y-4 mb-8">
        <h1 className="text-[46px] md:text-[64px] font-[900] leading-[1.1] tracking-normal [word-spacing:0.75rem] text-black">
          Ace Your Next Interview
        </h1>
        <div className="flex justify-center">
          <div className="bg-[#ffff00] px-8 py-2 md:px-5 md:py-1 rounded-[14px] shadow-sm">
            <span className="text-[52px] md:text-[60px] font-[900] tracking-[-0.03em] leading-tight text-black">
              With AI
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[700px] mx-auto mb-12">
        <p className="text-[#6b7280] text-xl md:text-[18px] font-medium leading-[1.6]">
          Practice with our intelligent AI interviewer, get real-time feedback, and land your dream job with confidence. Tailored questions for every role.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="group relative overflow-hidden bg-black text-[#ffff00] px-7 py-3 rounded-[10px] text-[20px] font-bold cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-yellow-400/20 active:scale-95">
          <span className="relative z-10">Take Test</span>
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </button>
      </div>

      {/* Abstract Background elements (optional but adds premium feel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-10">
        {/* subtle glow or grid could go here */}
      </div>
    </section>
  );
}