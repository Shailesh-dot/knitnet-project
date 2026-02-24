"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "What We Solve", href: "#solve" },
  { label: "Our Goal", href: "#goal" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    // White fill wipes in from left → right
    gsap.fromTo(
      fillRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, transformOrigin: "left center", duration: 0.38, ease: "power2.out" }
    );
    // Border turns gray-500 on hover
    gsap.to(btnRef.current, { borderColor: "#6b7280", duration: 0.2 });
    // Text turns black
    gsap.to(labelRef.current, { color: "#000000", duration: 0.2, ease: "none" });
  };

  const handleMouseLeave = () => {
    // White fill wipes out from right → left
    gsap.to(fillRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.35,
      ease: "power2.in",
    });
    // Border back to gray-900 on leave
    gsap.to(btnRef.current, { borderColor: "#111827", duration: 0.25 });
    // Text back to yellow
    gsap.to(labelRef.current, { color: "#FFFB00", duration: 0.2, ease: "none", delay: 0.1 });
  };

  return (
    <header className="w-full flex justify-between items-center px-8 py-5 mt-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-[#F2FF00] w-12 h-12 flex items-center justify-center font-bold text-[28px] rounded-[10px]">
          K
        </div>
        <span className="text-xl font-bold">Knitnet</span>
      </div>

      {/* Nav Links */}
      <nav className="
        hidden md:flex
        gap-10
        px-8 py-5
        rounded-2xl
        border border-white/20
        bg-gray-50
        backdrop-blur-xl
        backdrop-saturate-200
        shadow-lg
        text-gray-700 fixed ml-100
      ">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="
              relative
              font-medium
              text-gray-700
              transition-colors duration-300
              hover:text-black
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-0.5
              after:h-0.5
              after:w-0
              after:bg-yellow-800
              after:rounded-full
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Login Button — Left-to-Right Fill Wipe */}
      <button
        ref={btnRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-black px-6 py-2 rounded-xl font-semibold cursor-pointer border border-gray-900"
      >
        {/* White fill layer — starts scaled to 0 on X axis */}
        <span
          ref={fillRef}
          className="absolute inset-0 bg-white rounded-xl"
          style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
        />
        {/* Button label — sits above the fill */}
        <span ref={labelRef} className="relative z-10 text-[#FFFB00] font-semibold">
          Login
        </span>
      </button>
    </header>
  );
}