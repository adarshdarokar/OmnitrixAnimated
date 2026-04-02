import { motion } from "framer-motion";
import Magnet from "./Magnet";

const features = [
  {
    id: "01",
    title: "DNA Matix",
    desc: "Infinite storage of extraterrestrial DNA sequences with instant access.",
    icon: "🧬"
  },
  {
    id: "02",
    title: "Metamorph",
    desc: "Seamless atomic restructuring for high-speed biological transformation.",
    icon: "⚙️"
  },
  {
    id: "03",
    title: "Quantum Link",
    desc: "Encrypted connection to the Primus core for DNA sequence updates.",
    icon: "📡"
  },
  {
    id: "04",
    title: "Safety Node",
    desc: "Failsafe mechanisms for transformation time-limits and user health.",
    icon: "🛡️"
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="bg-[#050505] relative overflow-hidden">
      <div className="ambient-mesh opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Schematic Overview - LEFT */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[10px] font-mono text-[#00ff88] tracking-[0.6em] uppercase mb-4 block opacity-60">System // Engineering</span>
            <h2 className="text-fluid-md font-syncopate font-bold text-white uppercase italic mb-12">
              The <span className="text-[#00ff88]">Schematic</span>
            </h2>
            
            <p className="font-inter text-white/40 text-sm leading-relaxed mb-12 max-w-md tracking-wider">
              Engineered by the First Thinker, the Omnitrix represents the pinnacle of intergalactic peace-keeping technology.
            </p>
            
            <div className="relative p-8 border border-[#00ff88]/10 bg-[#00ff88]/5 rounded-sm overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-[#00ff88]/40">REV_4.0.2</div>
              <div className="flex flex-col gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="h-1 bg-[#00ff88]/20 w-full rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 2, delay: i * 0.3 }}
                        className="h-full bg-[#00ff88] w-2/3"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="scanline-overlay opacity-20"></div>
            </div>
          </div>

          {/* Feature Grid - RIGHT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <Magnet key={feature.id} strength={0.15} range={30}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }
                  }}
                  className="p-8 glass-panel-glow hover:border-[#00ff88]/40 transition-all duration-500 flex flex-col gap-6 group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">{feature.icon}</span>
                    <span className="font-mono text-[9px] text-[#00ff88]/40 tracking-widest">{feature.id}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-syncopate font-bold text-sm text-white group-hover:text-[#00ff88] transition-colors uppercase tracking-widest">{feature.title}</h3>
                    <p className="font-inter text-xs text-white/40 leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="h-[1px] w-full bg-[#00ff88]/10 relative overflow-hidden">
                    <motion.div 
                      whileHover={{ x: "100%" }}
                      initial={{ x: "-100%" }}
                      transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent w-1/2"
                    />
                  </div>
                </motion.div>
              </Magnet>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
