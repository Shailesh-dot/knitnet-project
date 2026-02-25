"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="w-full bg-[#F0F6FF] py-20 px-4">
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
                        <h3 className="text-3xl font-extrabold text-black">Our Mission</h3>
                        <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                            To empower companies with accurate, fair, and scalable hiring intelligence,
                            while ensuring that final hiring decisions remain human-led and unbiased.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
