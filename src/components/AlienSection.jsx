import { motion } from "framer-motion";

const ALIENS = [
  { id: "DNA-01", name: "Heatblast", class: "PYRO-CLASS", power: "Pyrokinesis & Fire Manipulation" },
  { id: "DNA-02", name: "Four Arms", class: "BRUTE-CLASS", power: "Superhuman Strength & Durability" },
  { id: "DNA-03", name: "XLR8", class: "SPEED-CLASS", power: "Extreme Frictionless Speed" },
  { id: "DNA-04", name: "Diamondhead", class: "CRYSTAL-CLASS", power: "Crystallokinesis & Weapon Generation" },
];

export default function AlienSection() {
  return (
    <section id="aliens" className="min-h-screen py-24 relative z-20 bg-transparent flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
          <div className="inline-block bg-[#0a0a0a] px-8">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-2 uppercase tracking-widest">
              DNA <span className="text-[#00ff88] glow-text">Arsenal</span>
            </h2>
            <div className="text-xs font-mono text-[#00ff88] tracking-[0.3em]">SELECT CHARACTER_</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALIENS.map((alien, index) => (
            <motion.div
              key={alien.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="gaming-card p-6 h-72 flex flex-col justify-between group cursor-pointer border border-white/5 hover:border-[#00ff88]/80 transition-all duration-300"
            >
              <div className="scan-line opacity-0 group-hover:opacity-100"></div>
              
              <div className="flex justify-between items-start z-10">
                <span className="font-mono text-xs text-[#00ff88] border border-[#00ff88]/30 px-2 py-1 bg-[#00ff88]/5">
                  {alien.id}
                </span>
                <span className="font-mono text-[10px] text-white/40 group-hover:text-[#00ff88]/60 uppercase tracking-widest transition-colors">
                  {alien.class}
                </span>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="h-[2px] w-8 bg-white/20 mb-4 group-hover:w-full group-hover:bg-[#00ff88] transition-all duration-500"></div>
                <h3 className="text-3xl font-orbitron text-white group-hover:text-[#00ff88] transition-colors duration-300 mb-2 uppercase tracking-wide">
                  {alien.name}
                </h3>
                <p className="font-mono text-white/50 text-xs leading-relaxed group-hover:text-white/80 transition-colors">
                  {alien.power}
                </p>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-[#00ff88] transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-[#00ff88] transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
