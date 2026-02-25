"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export default function SmoothScrollProvider({
    children,
}: {
    children: ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // Expose instance globally so Navbar can call lenis.scrollTo()
        (window as unknown as { __lenis: Lenis }).__lenis = lenis;

        let raf: number;
        function animate(time: number) {
            lenis.raf(time);
            raf = requestAnimationFrame(animate);
        }
        raf = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            delete (window as unknown as { __lenis?: Lenis }).__lenis;
        };
    }, []);

    return <>{children}</>;
}
