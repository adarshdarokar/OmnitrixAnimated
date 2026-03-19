import { motion } from "framer-motion";
import tenisionImg from "../assets/tenision.webp";
import Magnet from "./Magnet";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex items-center pt-20">
      {/* Background Ambience Elements - Optimized */}
      <div className="ambient-mesh opacity-40"></div>
      <div className="scanline-overlay absolute inset-0 z-1 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Typography & UI */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left z-20"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping"></span>
            <span className="text-[10px] font-mono text-[#00ff88] tracking-[0.4em] uppercase">System Online // v4.0.2</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-fluid-lg font-syncopate font-bold text-white uppercase mb-8 mix-blend-difference">
            <span className="block opacity-40">Unleash</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff] drop-shadow-[0_0_40px_rgba(0,255,136,0.4)]">Omnitrix</span>
            <span className="block opacity-40 text-right md:-mt-4">Power</span>
          </h1>

          {/* Description */}
          <p className="text-white/50 font-inter text-base md:text-lg max-w-xl mb-12 leading-relaxed tracking-wide">
            Master the most advanced weapon in the universe. Seamless transformation, unlimited potential, and the evolution of intergalactic defense.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto mb-16">
            <Magnet strength={0.3} range={60}>
              <button className="gaming-card px-10 py-5 font-orbitron text-xs tracking-[0.3em] text-white hover:text-[#00ff88] transition-colors overflow-hidden group">
                <span className="relative z-10">INITIATE BOOT</span>
              </button>
            </Magnet>
            <Magnet strength={0.3} range={60}>
              <button className="px-10 py-5 font-orbitron text-xs tracking-[0.3em] text-white/60 hover:text-white border-b border-white/10 hover:border-white transition-all">
                ARCHIVES
              </button>
            </Magnet>
          </div>

          {/* HUD Stats */}
          <div className="hidden lg:flex gap-12 opacity-30 font-mono text-[9px] tracking-[0.2em] uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-[#00ff88]">SIGNAL</span>
              <span>STABLE // 98%</span>
            </div>
            <div className="flex flex-col gap-1 border-l border-white/10 pl-12">
              <span className="text-[#00ff88]">TRANSFORMATION</span>
              <span>READY // ALL</span>
            </div>
            <div className="flex flex-col gap-1 border-l border-white/10 pl-12">
              <span className="text-[#00ff88]">SECTOR</span>
              <span>MILKY WAY // 04</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Character Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="w-full md:w-2/5 h-[60vh] md:h-[90vh] flex items-end justify-center relative z-10"
        >
          {/* Subtle glow behind character */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00ff88]/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
          
          <motion.img 
            src={tenisionImg} 
            alt="Ben 10 Hero"
            className="w-auto h-[110%] object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,255,136,0.2)] relative z-10 select-none grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            style={{ 
              maxWidth: "none"
            }}
            animate={{ 
              y: [0, -15, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>

    </section>
  );
}
