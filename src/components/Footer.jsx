export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-3xl font-orbitron font-bold text-white/20 mb-6 tracking-widest hover:text-[#00ff88] transition-all duration-500 cursor-default">
          OMNITRIX
        </div>
        
        <div className="flex gap-6 mb-8 font-rajdhani text-white/40 uppercase tracking-widest text-sm">
          <a href="#home" className="hover:text-[#00ff88] transition-colors">Home</a>
          <a href="#aliens" className="hover:text-[#00ff88] transition-colors">Aliens</a>
          <a href="#technology" className="hover:text-[#00ff88] transition-colors">Technology</a>
        </div>
        
        <p className="font-mono text-white/30 text-xs">
          © {new Date().getFullYear()} Azmuth First Thinker. Galvan Prime. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
