import { motion } from "framer-motion";
import Magnet from "./Magnet";

const aliens = [
  { 
    id: "01", 
    name: "Heatblast", 
    class: "Pyronite", 
    power: "Pyrokinesis", 
    image: "/Alien 1.jpg"
  },
  { 
    id: "02", 
    name: "Four Arms", 
    class: "Tetramand", 
    power: "Super Strength", 
    image: "/Alien 2.jpg"
  },
  { 
    id: "03", 
    name: "XLR8", 
    class: "Kineceleran", 
    power: "Super Speed", 
    image: "/Alien 3.jpg"
  },
  { 
    id: "04", 
    name: "Diamondhead", 
    class: "Petrosapien", 
    power: "Crystallokinesis", 
    image: "/Alien5.jpg"
  },
  { 
    id: "05", 
    name: "Cannonbolt", 
    class: "Arburian Pelarota", 
    power: "Spherical Armor", 
    image: "/Alien 6.jpg"
  },
  { 
    id: "06", 
    name: "Ghostfreak", 
    class: "Ectonurite", 
    power: "Intangibility", 
    image: "/Alien 7.jpg"
  }
];

export default function AlienSection() {
  return (
    <section id="aliens" className="bg-[#050505] relative overflow-hidden">
      <div className="ambient-mesh opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-[#00ff88] tracking-[0.5em] uppercase mb-4 block opacity-60">Database // Extraterrestrial</span>
            <h2 className="text-fluid-md font-syncopate font-bold text-white uppercase tracking-tighter italic">
              DNA <span className="text-[#00ff88]">Arsenal</span>
            </h2>
          </div>
          <div className="font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase hidden lg:block">
            Scanning DNA Matrix... 100% COMPLETE
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {aliens.map((alien, index) => (
            <Magnet key={alien.id} strength={0.2} range={40}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="gaming-card group cursor-pointer aspect-[3/4] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                
                {/* Image Section - Optimized */}
                <div className="relative h-2/3 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[#00ff88]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={alien.image} 
                    alt={alien.name} 
                    className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4" 
                  />
                  <div className="scanline-overlay z-20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-20 flex-grow flex flex-col justify-end">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-mono text-[9px] text-[#00ff88]/60 tracking-widest">{alien.id} // {alien.class}</span>
                  </div>
                  <h3 className="font-syncopate font-bold text-lg text-white group-hover:text-[#00ff88] transition-colors mb-1">{alien.name}</h3>
                  <div className="h-[1px] w-0 group-hover:w-full bg-[#00ff88]/40 transition-all duration-500"></div>
                  <p className="font-inter text-[9px] text-white/40 uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Primary Power: {alien.power}
                  </p>
                </div>
              </motion.div>
            </Magnet>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
