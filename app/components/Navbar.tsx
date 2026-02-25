"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";

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
  const [scrolled, setScrolled] = useState(false);

  /* ── Glass effect on scroll (nav pill only) ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth scroll handler using Lenis ── */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      // Find the Lenis instance attached to the window (set by SmoothScrollProvider)
      // and fall back to native smooth scroll if not available.
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  /* ── GSAP button hover ── */
  const handleMouseEnter = () => {
    gsap.fromTo(
      fillRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, transformOrigin: "left center", duration: 0.38, ease: "power2.out" }
    );
    gsap.to(btnRef.current, { borderColor: "#6b7280", duration: 0.2 });
    gsap.to(labelRef.current, { color: "#000000", duration: 0.2, ease: "none" });
  };

  const handleMouseLeave = () => {
    gsap.to(fillRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.35,
      ease: "power2.in",
    });
    gsap.to(btnRef.current, { borderColor: "#111827", duration: 0.25 });
    gsap.to(labelRef.current, {
      color: "#FFFB00",
      duration: 0.2,
      ease: "none",
      delay: 0.1,
    });
  };

  return (
    <header className="fixed top-1 left-0 right-0 z-50 w-full flex justify-between items-center px-8 py-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-[#F2FF00] w-12 h-12 flex items-center justify-center font-bold text-[28px] rounded-[10px]">
          K
        </div>
        <span className="text-xl font-bold">Knitnet</span>
      </div>

      {/* Nav Links */}
      <nav
        className={`hidden md:flex gap-15 px-8 py-5 rounded-2xl text-gray-700 transition-all duration-500 border ${scrolled
          ? "bg-white/60 backdrop-blur-xl backdrop-saturate-200 shadow-lg border-white/30"
          : "bg-transparent backdrop-blur-none border-transparent shadow-none"
          }`}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
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
              cursor-pointer
            "
          >
            {label}
          </a>
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