import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Magnet from "./Magnet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Aliens", href: "#aliens" },
    { name: "Technology", href: "#technology" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4 glass-panel border-b border-[#00ff88]/10" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Magnet strength={0.4} range={60}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#00ff88] rounded-full flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all">
              <div className="w-5 h-5 bg-[#00ff88] clip-omnitrix"></div>
            </div>
            <span className="font-syncopate font-bold text-lg md:text-xl text-white tracking-[0.2em] group-hover:text-[#00ff88] transition-colors">
              OMNITRIX
            </span>
          </a>
        </Magnet>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Magnet key={link.name} strength={0.25} range={40}>
              <a 
                href={link.href} 
                className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-[#00ff88] transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
              </a>
            </Magnet>
          ))}
          
          <Magnet strength={0.3} range={50}>
            <button className="px-8 py-2.5 rounded-full border border-[#00ff88]/30 font-syncopate text-[9px] tracking-[0.2em] text-white hover:bg-[#00ff88] hover:text-black transition-all duration-300">
              LOG IN
            </button>
          </Magnet>
        </div>
      </div>
    </nav>
  );
}
