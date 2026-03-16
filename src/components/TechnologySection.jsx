import { motion } from "framer-motion";

const FEATURES = [
  {
    id: "SYS-01",
    title: "DNA Scanner",
    desc: "Acquires and catalogues extraterrestrial genetic signatures across the universe with 99.9% accuracy.",
    icon: "[ 🧬 ]"
  },
  {
    id: "SYS-02",
    title: "Morph Engine",
    desc: "Rewrites the user's cellular structure dynamically to morph into the selected species.",
    icon: "[ ⚡ ]"
  },
  {
    id: "SYS-03",
    title: "Quantum Core",
    desc: "Powers the device using zero-point energy, ensuring immediate charge regeneration.",
    icon: "[ 🔋 ]"
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-32 relative z-20 bg-[#050505]">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Localized Ambient Glow Patches */}
      <div className="ambient-patch -top-20 right-0 opacity-20"></div>
      <div className="ambient-patch bottom-0 -left-20 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3 gaming-card p-10 border-l-4 border-l-[#00ff88]"
          >
            <div className="text-xs text-[#00ff88] font-mono tracking-widest mb-4">DIAGNOSTICS_MODE</div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-tight uppercase">
              Core <br/> <span className="text-[#00ff88] glow-text">Systems</span>
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#00ff88] to-transparent mb-6"></div>
            <p className="font-mono text-white/60 text-sm leading-relaxed mb-8">
              The Omnitrix is a Level 20 technology device created by Azmuth. It serves as a repository for the DNA of over a million intelligent species in the Milky Way galaxy.
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></div>
                OP_NORMAL
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88]"></div>
                SYS_ONLINE
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-panel p-8 rounded-none border border-white/5 hover:border-[#00ff88]/50 transition-all duration-300 relative group cursor-default"
              >
                {/* Scan line effect inside panel */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00ff88] opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-1000 ease-linear shadow-[0_0_10px_#00ff88]"></div>
                
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6 relative z-10">
                  <div className="font-mono text-[#00ff88] text-sm tracking-widest">{feat.id}</div>
                  <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{feat.icon}</div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron text-white mb-4 uppercase tracking-wide group-hover:text-[#00ff88] transition-colors">{feat.title}</h3>
                  <p className="font-mono text-white/50 text-xs leading-relaxed group-hover:text-white/80 transition-colors">
                    {feat.desc}
                  </p>
                </div>
                
                {/* Decorative Tech UI Nodes */}
                <div className="absolute bottom-4 right-4 flex gap-1 z-10">
                  <div className="w-1 h-2 bg-white/20 group-hover:bg-[#00ff88] transition-colors delay-75"></div>
                  <div className="w-1 h-3 bg-white/20 group-hover:bg-[#00ff88] transition-colors delay-100"></div>
                  <div className="w-1 h-4 bg-white/20 group-hover:bg-[#00ff88] transition-colors delay-150"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
