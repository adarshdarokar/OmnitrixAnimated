import Magnet from "./Magnet";

export default function Footer() {
  return (
    <footer className="py-[var(--section-padding)] bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="ambient-mesh opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-syncopate font-extrabold text-[#00ff88] text-xl tracking-widest glow-text italic">OMNITRIX</span>
          <span className="font-mono text-[8px] text-white/20 tracking-[0.4em] uppercase">Advanced Defense Matrix // v4.0.2</span>
        </div>

        <div className="flex gap-12 font-inter text-[9px] text-white/40 tracking-[0.3em] uppercase">
          {['Privacy', 'Security', 'Protocols'].map(item => (
            <Magnet key={item} strength={0.2} range={30}>
              <a href="#" className="hover:text-[#00ff88] transition-colors">{item}</a>
            </Magnet>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-right">
          <div className="hud-line w-24 mb-2"></div>
          <span className="font-mono text-[9px] text-[#00ff88]/40 tracking-widest uppercase italic">Hero Time // Authorized</span>
        </div>
      </div>
    </footer>
  );
}
