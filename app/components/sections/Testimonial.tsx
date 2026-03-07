"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
    {
        name: "Dr. Anil Kumar",
        designation: "HR Director",
        company: "Vertex Solutions Pvt. Ltd.",
        rating: 3,
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
        text: "We were looking for a system that could combine security, technical depth evaluation, and reporting in one platform. The adaptive AI interview and structured scoring framework made our shortlisting process faster and more data-driven.",
    },
    {
        name: "Priya Sharma",
        designation: "Dean – Training & Placements",
        company: "Global Institute of Engineering",
        rating: 4.5,
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
        text: "The platform brought standardization and fairness to our campus recruitment drives. Its multi-layer identity verification and AI-based project questioning ensured genuine participation and deep skill validation.",
    },
    {
        name: "James Whitfield",
        designation: "Talent Acquisition Lead",
        company: "NovaTech Systems",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
        text: "The AI-driven evaluations replaced generic screening calls entirely. We now get structured, data-backed shortlists with real technical depth insight. Our time-to-hire dropped by 40%.",
    },
    {
        name: "Ananya Menon",
        designation: "VP of People & Culture",
        company: "Horizon Fintech Ltd.",
        rating: 4,
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
        text: "What impressed us most was the identity verification layer. Impersonation was a real concern for us. Knitnet solved it comprehensively while keeping the candidate experience smooth.",
    },
    {
        name: "Rahul Desai",
        designation: "CTO",
        company: "CloudStack Innovations",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
        text: "The resume-driven AI conversations are remarkable. Candidates are evaluated on their actual project history, not rehearsed answers. The depth of technical assessment blew our engineering team away.",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = rating >= star;
                const half = !filled && rating >= star - 0.5;
                return (
                    <span key={star} className="text-yellow-400 text-lg">
                        {filled ? "★" : half ? "⭐" : "☆"}
                    </span>
                );
            })}
        </div>
    );
}

export default function Testimonial() {
    const [paused, setPaused] = useState(false);
    const doubled = [...testimonials, ...testimonials];

    return (
        <section id="testimonial" className="w-full bg-[#F2F2F2] py-20 px-4 overflow-hidden mt-30 rounded-[15px] border border-gray-100 shadow-lg relative">

            {/* Section Header */}
            <div className="max-w-5xl mx-auto text-center mb-6">
                <h2 className="text-4xl md:text-5xl text-black font-mono leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
                    Trusted by recruiters, HR teams, and institutions for secure and intelligent candidate evaluation.
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                    The platform helped us standardize our campus hiring process. The AI-driven project-based interview
                    revealed real candidate depth, which traditional interviews often miss.
                </p>
            </div>

            {/* ── Testimonial Card Marquee ───────────────────────── */}
            <div className="mt-12 -mx-4">
                <div
                    className={`marquee-track${paused ? " paused" : ""}`}
                    style={{ display: "flex", alignItems: "flex-start" }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {doubled.map((t, i) => (
                        <div
                            key={i}
                            className="relative flex-shrink-0"
                            style={{ width: "600px", height: "280px", marginRight: "32px" }}
                        >
                            {/* Slanted gray back card */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "#bdc2cbff",
                                    borderRadius: "16px",
                                    transform: "rotate(-3deg) translateY(6px)",
                                    zIndex: 0,
                                }}
                            />

                            {/* White front card */}
                            <div
                                className="absolute inset-0 bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                                style={{ display: "flex", flexDirection: "row", zIndex: 1 }}
                            >
                                {/* Photo — left strip */}
                                <div className="relative flex-shrink-0" style={{ width: "140px" }}>
                                    <Image
                                        src={t.photo}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>

                                {/* Text — right */}
                                <div className="flex flex-col gap-1 p-4 flex-1 overflow-hidden">
                                    <p className="text-xs font-semibold text-gray-800">
                                        <span className="font-bold">Name:</span> {t.name}
                                    </p>
                                    <p className="text-xs text-gray-700">
                                        <span className="font-bold">Designation:</span> {t.designation}
                                    </p>
                                    <p className="text-xs font-bold text-gray-900">
                                        <span className="font-bold">Company:</span> {t.company}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-xs font-bold text-gray-800">Ratings:</span>
                                        <StarRating rating={t.rating} />
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                                        <span className="font-bold">Testimonial: </span>{t.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
