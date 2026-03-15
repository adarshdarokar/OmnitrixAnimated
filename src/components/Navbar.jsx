import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold font-orbitron tracking-widest text-[#00ff88] glow-text cursor-pointer">
          OMNITRIX
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-rajdhani text-lg uppercase tracking-wider">
          {['Home', 'Aliens', 'Technology', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-[#00ff88] transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff88] transition-all duration-300 group-hover:w-full drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
