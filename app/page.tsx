import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
      </main>
    </SmoothScrollProvider>
  );
}
