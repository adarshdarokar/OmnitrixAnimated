import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfiniteMarquee from "../components/InfiniteMarquee";
import OmnitrixScroll from "../components/OmnitrixScroll";
import AlienSection from "../components/AlienSection";
import TechnologySection from "../components/TechnologySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <Navbar />
      
      {/* Cinematic Gaming Hero Section */}
      <HeroSection />
      
      {/* Global Ambient Glows */}
      <div className="ambient-patch -top-20 -left-20 opacity-40"></div>
      <div className="ambient-patch top-1/4 -right-40 opacity-30"></div>
      <div className="ambient-patch top-1/2 left-1/4 opacity-20"></div>
      <div className="ambient-patch bottom-1/4 -left-40 opacity-30"></div>

      {/* Infinite scrolling branded text */}
      <InfiniteMarquee />

      {/* Scroll-based animation section */}
      <OmnitrixScroll />
      
      {/* Static Sections follow the scroll content */}
      <AlienSection />
      <div className="ambient-patch top-[60%] -right-20 opacity-40 animate-pulse"></div>
      <TechnologySection />
      <div className="ambient-patch bottom-20 left-10 opacity-30"></div>
      
      {/* About Section */}
      <section id="about" className="py-32 bg-[#0a0a0a] relative z-20 overflow-hidden">
        <div className="ambient-patch top-0 left-0 opacity-20"></div>
        <div className="ambient-patch bottom-0 right-0 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-8 leading-tight">
            "It's just a gadget, <br/> <span className="text-[#00ff88] glow-text">be the hero.</span>"
          </h2>
          <p className="font-mono text-white/50 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            The Omnitrix isn't just a weapon. It's a device designed to promote inter-species understanding by allowing the user to experience life in the shoes of another.
          </p>
          <div className="mt-12 w-1 h-32 bg-gradient-to-b from-[#00ff88] to-transparent mx-auto opacity-50"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
