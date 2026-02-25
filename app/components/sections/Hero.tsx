"use client";

export default function Hero() {

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 mt-26">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#FDECC8] text-black px-5 py-2 rounded-full font-semibold text-sm mb-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default">
        <span className="text-lg">✦</span>
        AI - Powered Interview Platform
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
        Ace Your Next Interview
        <br />
        <span className="bg-[#EEFF00] text-black px-4 py-1 rounded-lg inline-block mt-2">
          With AI
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-lg max-w-200 mb-10">
        Practice with our intelligent AI interviewer, get real-time feedback, and land your
        dream job with confidence. Tailored questions for every role.
      </p>

      {/* CTA Button */}
      <button className="bg-black text-[#EEFF00] font-bold px-7 py-3 rounded-[12px] text-lg hover:scale-105 transition-transform duration-300">
        Take Test
      </button>

    </section>
  );
}