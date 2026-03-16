import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#00ff88]/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="text-2xl font-bold font-orbitron tracking-widest text-[#00ff88] glow-text cursor-pointer flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border-2 border-[#00ff88] flex items-center justify-center animate-[spin_5s_linear_infinite] shadow-[0_0_10px_#00ff88] group-hover:scale-110 transition-transform">
            <div className="w-4 h-4 bg-[#00ff88] rounded-sm transform rotate-45"></div>
          </div>
          <span className="mt-1">OMNITRIX</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-rajdhani text-lg uppercase tracking-wider">
          {['Home', 'Aliens', 'Technology', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-[#00ff88] transition-all duration-300 relative group flex items-center gap-1"
            >
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#00ff88] transition-all duration-300">[</span>
              {item}
              <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#00ff88] transition-all duration-300">]</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00ff88] transition-all duration-300 group-hover:w-full drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
