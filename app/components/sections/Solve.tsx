"use client";

import Image from "next/image";

export default function Solve() {
    return (
        <section id="solve" className="w-full bg-white py-20 px-6">

            {/* Section Title */}
            <h2 className="text-center text-3xl font-bold text-gray-500 mb-16 tracking-wide">
                What We Solve
            </h2>

            {/* Main Content Row */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

                {/* ── Left Column — Text ── */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Big Heading */}
                    <h3 className="text-[28px] font-extrabold text-black leading-snug">
                        Our platform eliminates insecure and biased hiring through AI powered personalized candidate evaluation
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-[17px] leading-relaxed max-w-md">
                        We prevent impersonation and malpractice through advanced multi layer identity and environment
                        verification systems that ensure genuine candidate participation, replace generic interviews with
                        adaptive resume driven AI conversations designed to measure real project ownership and true technical depth.
                    </p>

                    {/* CTA Link */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#0099CC] font-semibold text-[17px] hover:gap-5 transition-all duration-300"
                    >
                        Explore About What We Solved
                        <span className="text-base">→</span>
                    </a>
                </div>

                {/* ── Right Column — Image Collage ── */}
                <div className="flex-1 relative flex items-end justify-center" style={{ minHeight: "340px" }}>

                    {/* Img1 — large, background (handshake) */}
                    <div
                        className="relative overflow-hidden shadow-lg"
                        style={{ width: "360px", height: "290px", zIndex: 1 }}
                    >
                        <Image
                            src="/What we solve/Img1.png"
                            alt="Handshake in interview"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Img2 — top-right overlay (AI robot hand) */}
                    <div
                        className="absolute top-0 right-0 overflow-hidden shadow-lg"
                        style={{ width: "200px", height: "170px", zIndex: 2 }}
                    >
                        <Image
                            src="/What we solve/Img2.png"
                            alt="AI robot hand"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Img3 — bottom-left overlay (LLM laptop) */}
                    <div
                        className="absolute top-60 left-0 overflow-hidden shadow-lg"
                        style={{ width: "230px", height: "170px", zIndex: 2 }}
                    >
                        <Image
                            src="/What we solve/Img3.png"
                            alt="LLM AI dashboard"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
