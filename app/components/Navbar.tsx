"use client";

import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "What We Solve", href: "#solve" },
    { name: "Our Goal", href: "#goal" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(href, {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none mt-8 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 bg-white/50 backdrop-blur-[6px] rounded-[20px] shadow-sm pointer-events-auto border border-white/20">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#ffff00] w-12 h-12 flex items-center justify-center font-bold text-[28px] rounded-[10px]">
            K
          </div>
          <span className="text-xl font-bold text-black tracking-tight">Knitnet</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="relative text-gray-500 hover:text-black font-bold text-[14px] transition-colors after:content-[''] after:absolute after:-bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <button className="group relative overflow-hidden bg-black text-[#ffff00] px-8 py-2.5 rounded-[12px] text-sm font-bold cursor-pointer transition-all duration-300 shadow-md hover:shadow-yellow-400/20">
          <span className="relative z-10">Login</span>
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </button>
      </div>
    </header>
  );
}