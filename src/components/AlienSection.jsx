import { motion } from "framer-motion";

const ALIENS = [
  { name: "Heatblast", power: "Pyrokinesis & Fire Manipulation" },
  { name: "Four Arms", power: "Superhuman Strength & Durability" },
  { name: "XLR8", power: "Extreme Frictionless Speed" },
  { name: "Diamondhead", power: "Crystallokinesis & Weapon Generation" },
];

export default function AlienSection() {
  return (
    <section id="aliens" className="min-h-screen py-24 relative z-20 bg-[#0a0a0a] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
            Alien <span className="text-[#00ff88] glow-text">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ff88] mx-auto glow-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ALIENS.map((alien, index) => (
            <motion.div
              key={alien.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-8 rounded-2xl glow-border group cursor-pointer h-64 flex flex-col justify-end relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00ff88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-orbitron text-white group-hover:text-[#00ff88] transition-colors duration-300 mb-2">
                  {alien.name}
                </h3>
                <p className="font-mono text-white/50 text-sm group-hover:text-white/80 transition-colors">
                  {alien.power}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
