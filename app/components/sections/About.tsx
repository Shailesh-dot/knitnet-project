"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [paused, setPaused] = useState(false);
    return (
        <section id="about" className="w-full bg-[#F8FEFF] py-20 px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-black mb-4">About us</h2>
                <p className="text-gray-500 font-semibold text-base max-w-xl mx-auto">
                    Our solution unifies identity verification, assessments, and reporting into one
                    intelligent hiring platform.
                </p>
            </div>

            {/* Two-Column Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Card — How It Started */}
                <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        {/* Tag */}
                        <p className="text-[#E89A00] font-bold text-base mb-4">How It Started</p>

                        {/* Heading */}
                        <h3 className="text-4xl font-extrabold text-black leading-tight mb-6">
                            Reinventing How Organizations{" "}
                            <br />
                            Evaluate{" "}
                            <span className="bg-[#EEFF00] text-black px-2 py-0.5 rounded-md inline-block">
                                Talents
                            </span>
                        </h3>
                    </div>

                    {/* Body text */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Our AI-Powered Interview &amp; Candidate Evaluation Platform is built to
                        transform early-stage hiring by combining identity security, intelligent
                        assessments, and deep skill validation. We help organizations move beyond
                        traditional tests and generic interviews by offering a structured, reliable,
                        and personalized evaluation experience for every candidate.
                    </p>
                </div>

                {/* Right Card — Our Mission */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-56 bg-black">
                        <Image
                            src="/aboutPicture.jpg"
                            alt="AI and human hands connecting"
                            fill
                            className="object-cover opacity-90"
                        />
                    </div>

                    {/* Mission Text */}
                    <div className="p-8 flex flex-col gap-3">
                        <h3 id="goal" className="text-3xl font-extrabold text-black">Our Mission</h3>
                        <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                            To empower companies with accurate, fair, and scalable hiring intelligence,
                            while ensuring that final hiring decisions remain human-led and unbiased.
                        </p>
                    </div>
                </div>

            </div>

            {/* ── Infinite Auto-Scroll Image Marquee ───────────────── */}
            <div className="mt-20 overflow-hidden -mx-4 cursor-pointer">
                <div
                    className={`marquee-track${paused ? " paused" : ""}`}
                    style={{ display: "flex" }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {[
                        { src: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&q=80", alt: "Woman on video call" },
                        { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80", alt: "Professional interview" },
                        { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80", alt: "Tech workspace" },
                        { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", alt: "Online meeting" },
                        { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", alt: "Remote video conference" },
                        { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80", alt: "Team on laptops" },
                        { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80", alt: "People with technology" },
                        { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80", alt: "Developer coding" },
                        { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80", alt: "Business meeting" },
                        { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", alt: "Job candidate" },
                        { src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&q=80", alt: "Code on screen" },
                        { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80", alt: "Group collaboration" },
                        { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80", alt: "Office team discussion" },
                        { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80", alt: "Modern office workspace" },
                        /* ── duplicate for seamless loop ── */
                        { src: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&q=80", alt: "Woman on video call" },
                        { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80", alt: "Professional interview" },
                        { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80", alt: "Tech workspace" },
                        { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", alt: "Online meeting" },
                        { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", alt: "Remote video conference" },
                        { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80", alt: "Team on laptops" },
                        { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80", alt: "People with technology" },
                        { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80", alt: "Developer coding" },
                        { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80", alt: "Business meeting" },
                        { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", alt: "Job candidate" },
                        { src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&q=80", alt: "Code on screen" },
                        { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80", alt: "Group collaboration" },
                        { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80", alt: "Office team discussion" },
                        { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80", alt: "Modern office workspace" },
                    ].map((img, i) => (
                        <div
                            key={i}
                            className="relative flex-shrink-0 overflow-hidden shadow-md"
                            style={{ width: "480px", height: "220px", marginRight: "24px" }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
}
