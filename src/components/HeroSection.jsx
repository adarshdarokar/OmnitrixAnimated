import { motion } from "framer-motion";
import tenisionImg from "../assets/tenision.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center pt-20">
      {/* Background Ambience Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-[#00ff88]/10 via-[#0a0a0a] to-[#0a0a0a] opacity-60"></div>
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20 mix-blend-screen bg-[linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Floating Particles (CSS Animation logic placed directly) */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_15px_#00ff88] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88] animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite_1s] opacity-50"></div>
      <div className="absolute top-1/2 right-1/5 w-1 h-1 rounded-full bg-[#00ff88] shadow-[0_0_5px_#00ff88] animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite_2s] opacity-70"></div>
      
      {/* Localized Ambient Glow Patches */}
      <div className="ambient-patch -top-40 -left-60 opacity-30"></div>
      <div className="ambient-patch bottom-0 right-1/4 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
        
        {/* LEFT SIDE: Typography & UI */}
        <motion.div 
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left translate-y-[-2rem] md:translate-y-0 z-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse glow-border"></span>
            <span className="text-xs font-mono text-[#00ff88] tracking-widest">PREORDER NOW</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-orbitron font-black text-white uppercase leading-[0.9] mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff88] to-[#00ff88] drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">Omnitrix</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 font-mono text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Experience the ultimate alien technology. Unlock powerful transformations with the Omnitrix and witness the evolution of intergalactic combat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mb-10">
            <button className="glass-panel px-8 py-4 font-orbitron font-bold text-white border border-white/20 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 group shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <span className="tracking-wider relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,1)]">BUY NOW</span>
            </button>
            <button className="glass-panel px-8 py-4 font-orbitron font-bold text-white border border-white/20 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 group shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <span className="tracking-wider relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,1)]">EXPLORE TECH</span>
            </button>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center gap-6 opacity-40">
            {/* PlayStation */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-[#00ff88] hover:opacity-100 transition-all cursor-pointer">
               <path d="M12.012 3C6.471 3 2 7.472 2 13.013c0 5.541 4.471 10.013 10.012 10.013 5.542 0 10.013-4.472 10.013-10.013C22.025 7.472 17.554 3 12.012 3zm5.72 14.162l-4.757 1.625v-8.31l1.543.435v6.52l1.554-.53.518-1.554h2.24l.518 1.554h-1.616l.518 1.554zm-2.062-2.827l-.656-1.956h-1.3l-.657 1.956h2.613zm-5.717.38c-.377 0-.742-.047-1.096-.134v-3.72a4.416 4.416 0 011.096-.135c1.693 0 3.064 1.343 3.064 3.001 0 1.657-1.371 3-3.064 3m0-8.916c-2.454 0-4.444 1.947-4.444 4.352 0 1.15.449 2.193 1.176 2.972v-1.936a2.6 2.6 0 01-1.176-2.185c0-1.465 1.21-2.651 2.705-2.651 1.493 0 2.704 1.186 2.704 2.65 0 1.466-1.211 2.652-2.704 2.652v1.937c2.454 0 4.443-1.948 4.443-4.352 0-2.405-1.989-4.353-4.443-4.353m-6.427 4.571v-1.6h1.341v-.832h-1.341V8.583H2.186v.831h1.341v.832H2.186v1.6zM22.01 13.012A10 10 0 1112.01 3.012a10 10 0 0110 10z"/>
            </svg>
            {/* Xbox */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-[#00ff88] hover:opacity-100 transition-all cursor-pointer">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.75 6.3c-1.547 3.5-5.23 7.669-6.75 9.079-1.52-1.41-5.203-5.579-6.75-9.079C3.13 6.643 6.941 3.284 12 3.284c5.058 0 8.87 3.359 6.75 5.016zM12 13.43c2.47-2.31 5.4-6.45 6.25-8.25-3.32-.977-9.18-.977-12.5 0 .85 1.8 3.78 5.94 6.25 8.25zm0 1.95c-1.535-1.636-4.665-6.073-5.275-8.31-1.305 1.637-2.08 3.7-2.08 5.93 0 4.795 3.565 8.766 8.167 9.57.175-.245.548-.824 1.188-1.84.64 1.016 1.013 1.595 1.188 1.84 4.602-.804 8.167-4.775 8.167-9.57 0-2.23-.775-4.293-2.08-5.93-.61 2.237-3.74 6.674-5.275 8.31h.001z"/>
            </svg>
            {/* Windows */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 hover:text-[#00ff88] hover:opacity-100 transition-all cursor-pointer">
               <path d="M0 3.449L9.75 2.1v9.451H0m10.949-10.202L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801"/>
            </svg>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Character Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-end justify-center md:justify-end relative z-10"
        >
          {/* Subtle glow behind character */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00ff88]/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <motion.img 
            src={tenisionImg} 
            alt="Ben 10 Hero"
            className="w-auto h-full object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,255,136,0.3)] relative z-10"
            style={{ 
              maxWidth: "150%", // allow it to extend slightly left on large screens if needed 
              filter: "contrast(1.1) saturate(1.2)"
            }}
            animate={{ 
              y: [0, -10, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>

    </section>
  );
}
