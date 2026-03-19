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
      
      {/* About Section Refined - Optimized */}
      <section id="about" className="py-48 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="ambient-mesh opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00ff88]/5 blur-[80px] rounded-full pointer-events-none"></div>
        
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

      <Footer />
    </main>
  );
}
