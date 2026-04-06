import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfiniteMarquee from "../components/InfiniteMarquee";
import OmnitrixScroll from "../components/OmnitrixScroll";

// Lazy load heavy sections for faster initial paint and bundle splitting
const AlienSection = lazy(() => import("../components/AlienSection"));
const TechnologySection = lazy(() => import("../components/TechnologySection"));
const Footer = lazy(() => import("../components/Footer"));

// High-performance placeholder to maintain layout stability (CLS)
const SectionPlaceholder = ({ height = "100vh" }) => (
  <div style={{ height }} className="w-full bg-[#050505] animate-pulse flex items-center justify-center">
    <div className="w-1/4 h-1 bg-[#00ff88]/10 rounded-full"></div>
  </div>
);

export default function Home({ onProgress }) {
  return (
    <main className="w-full relative bg-[#0a0a0a]">
      <Navbar />
      
      {/* Cinematic Gaming Hero Section */}
      <HeroSection />
      
      {/* Global Ambient Glows - Optimized with transform-gpu and will-change */}
      <div className="ambient-patch -top-20 -left-20 opacity-40 transform-gpu will-change-transform"></div>
      <div className="ambient-patch top-1/4 -right-40 opacity-30 transform-gpu will-change-transform"></div>
      <div className="ambient-patch top-1/2 left-1/4 opacity-20 transform-gpu will-change-transform"></div>
      <div className="ambient-patch bottom-1/4 -left-40 opacity-30 transform-gpu will-change-transform"></div>

      {/* Infinite scrolling branded text */}
      <InfiniteMarquee />

      {/* Scroll-based animation section - High priority */}
      <OmnitrixScroll onProgress={onProgress} />
      
      {/* Production-level Deferred Rendering with Suspense */}
      <Suspense fallback={<SectionPlaceholder height="100vh" />}>
        <AlienSection />
      </Suspense>

      <div className="ambient-patch top-[60%] -right-20 opacity-40 animate-pulse transform-gpu"></div>
      
      <Suspense fallback={<SectionPlaceholder height="80vh" />}>
        <TechnologySection />
      </Suspense>

      <div className="ambient-patch bottom-20 left-10 opacity-30 transform-gpu"></div>
      
      {/* About Section Refined - Componentized or Inline */}
      <section id="about" className="py-48 bg-[#050505] relative overflow-hidden border-t border-white/5 content-visibility-auto">
        <div className="ambient-mesh opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00ff88]/5 blur-[40px] rounded-full pointer-events-none transform-gpu"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center mb-16 px-4">
            <div className="w-[1px] h-16 bg-gradient-to-t from-[#00ff88] to-transparent opacity-30 mb-8"></div>
            <span className="text-[10px] font-mono text-[#00ff88] tracking-[0.8em] uppercase">Ethos // Origins</span>
          </div>

          <h2 className="text-fluid-md font-syncopate font-bold text-white mb-12 leading-none uppercase italic tracking-tighter">
            "Gadgets Fade, <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#004d2c] drop-shadow-[0_0_20px_rgba(0,255,136,0.2)]">Heroes Evolve</span>"
          </h2>
          
          <p className="font-inter text-white/30 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto tracking-widest uppercase opacity-80">
            The Omnitrix isn't just a weapon. It's a bridge between worlds. Created to promote inter-species understanding, it allows the user to experience existence through a million different lenses.
          </p>
          
          <div className="mt-20 flex justify-center gap-4">
            <div className="w-1 h-1 rounded-full bg-[#00ff88]"></div>
            <div className="w-1 h-1 rounded-full bg-[#00ff88]/30"></div>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionPlaceholder height="40vh" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
