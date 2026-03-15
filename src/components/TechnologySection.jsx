import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "DNA Scanner",
    desc: "Acquires and catalogues extraterrestrial genetic signatures across the universe.",
    icon: "🧬"
  },
  {
    title: "Transformation Engine",
    desc: "Rewrites the user's DNA dynamically to morph into the selected species.",
    icon: "⚡"
  },
  {
    title: "Quantum Energy Core",
    desc: "Powers the device using zero-point energy, ensuring immediate charge regeneration.",
    icon: "🔋"
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-32 relative z-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-tight">
              Core <br/> <span className="text-[#00ff88] glow-text">Technology</span>
            </h2>
            <p className="font-mono text-white/60 text-lg mb-8 leading-relaxed">
              The Omnitrix is a Level 20 technology device created by Azmuth. It serves as a repository for the DNA of over a million intelligent species in the Milky Way galaxy.
            </p>
            <div className="w-16 h-1 bg-[#00ff88] glow-border"></div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-panel p-8 rounded-xl border border-white/5 hover:border-[#00ff88]/50 transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 cursor-default"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#00ff88]/20 transition-all duration-500"></div>
                
                <div className="text-4xl mb-6">{feat.icon}</div>
                <h3 className="text-xl font-orbitron text-white mb-3 group-hover:text-[#00ff88] transition-colors">{feat.title}</h3>
                <p className="font-mono text-white/50 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
