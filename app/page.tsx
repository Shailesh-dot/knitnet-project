import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Solve from "./components/sections/Solve";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="overflow-hidden pt-24">
        <Navbar />
        <Hero />
        <About />
        <Solve />
        <Testimonial />
        <Contact />
      </main>
    </SmoothScrollProvider>
  );
}
