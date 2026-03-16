import { motion } from "framer-motion";

const ALIENS = [
  { id: "DNA-01", name: "Heatblast", class: "PYRO-CLASS", power: "Pyrokinesis & Fire Manipulation", img: "/Alien 1.jpg" },
  { id: "DNA-02", name: "Four Arms", class: "BRUTE-CLASS", power: "Superhuman Strength & Durability", img: "/Alien 2.jpg" },
  { id: "DNA-03", name: "XLR8", class: "SPEED-CLASS", power: "Extreme Frictionless Speed", img: "/Alien 3.jpg" },
  { id: "DNA-05", name: "Diamondhead", class: "CRYSTAL-CLASS", power: "Crystallokinesis & Weapon Generation", img: "/Alien5.jpg" },
  { id: "DNA-06", name: "Cannonbolt", class: "ARMOR-CLASS", power: "High-Speed Kinetic Impact", img: "/Alien 6.jpg" },
  { id: "DNA-07", name: "Wildmutt", class: "BEAST-CLASS", power: "Enhanced Senses & Agility", img: "/Alien 7.jpg" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ALIENS.map((alien, index) => (
            <motion.div
              key={alien.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative gaming-card h-[600px] flex flex-col justify-end overflow-hidden group cursor-pointer border border-white/10 hover:border-[#00ff88]/50 transition-all duration-500 rounded-sm shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={alien.img} 
                  alt={alien.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              </div>

              <div className="scan-line opacity-0 group-hover:opacity-100 z-30"></div>
              
              <div className="relative z-20 p-8 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-[#00ff88] border border-[#00ff88]/30 px-3 py-1 bg-black/80 backdrop-blur-sm">
                    {alien.id}
                  </span>
                  <span className="font-mono text-[10px] text-white/40 group-hover:text-[#00ff88] uppercase tracking-[0.2em] transition-colors bg-black/40 px-2 py-1 backdrop-blur-md">
                    {alien.class}
                  </span>
                </div>
                
                <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-[2px] w-12 bg-[#00ff88] mb-4 group-hover:w-full transition-all duration-700"></div>
                  <h3 className="text-3xl font-orbitron text-white group-hover:text-[#00ff88] transition-colors duration-300 mb-2 uppercase tracking-tighter font-black drop-shadow-2xl">
                    {alien.name}
                  </h3>
                  <p className="font-mono text-white/50 text-xs leading-relaxed group-hover:text-white/90 transition-colors bg-black/20 p-2 rounded backdrop-blur-sm border-l border-[#00ff88]/0 group-hover:border-[#00ff88]/50">
                    {alien.power}
                  </p>
                </div>
              </div>

              {/* Decorative HUD Elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ff88]/0 group-hover:border-[#00ff88] transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ff88]/0 group-hover:border-[#00ff88] transition-all duration-300"></div>
              <div className="absolute top-4 right-4 w-1 h-8 bg-[#00ff88]/0 group-hover:bg-[#00ff88]/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
