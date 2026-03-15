import Navbar from "../components/Navbar";
import OmnitrixScroll from "../components/OmnitrixScroll";
import AlienSection from "../components/AlienSection";
import TechnologySection from "../components/TechnologySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <Navbar />
      
      {/* Scroll-based animation section */}
      <OmnitrixScroll />
      
      {/* Static Sections follow the scroll content */}
      <AlienSection />
      <TechnologySection />
      
      {/* About Section */}
      <section id="about" className="py-32 bg-[#0a0a0a] relative z-20 overflow-hidden">
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
