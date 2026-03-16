import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BootLoader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial heavy asset loading process
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 1200); // Wait for exit animation to finish before notifying parent
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          {/* Central Logo Animation */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Spinning Outer Ring */}
            <div className="w-32 h-32 md:w-48 md:h-48 border border-[#00ff88]/30 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite]">
              <div className="w-4 h-4 bg-[#00ff88] rounded-full absolute top-0 -translate-y-1/2 drop-shadow-[0_0_15px_#00ff88]"></div>
              <div className="w-4 h-4 bg-[#00ff88] rounded-full absolute bottom-0 translate-y-1/2 drop-shadow-[0_0_15px_#00ff88]"></div>
            </div>

            {/* Pulsing Inner Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-[#00ff88] rounded-full blur-[20px] animate-pulse"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-orbitron font-bold text-lg md:text-2xl tracking-widest z-10 glow-text flex items-center justify-center">
              <div className="flex gap-1">
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>.</motion.span>
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>.</motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="font-mono text-[#00ff88] text-sm md:text-base tracking-[0.3em] mb-2 glow-text">
              INITIALIZING OMNITRIX OS
            </div>
            <div className="text-white/40 font-mono text-xs tracking-widest uppercase">
              Secure Connection Established
            </div>
          </motion.div>
          
          {/* Decoding Text Effect */}
          <div className="absolute bottom-10 left-10 font-mono text-[10px] text-[#00ff88]/50 text-left max-w-xs hidden md:block">
            <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
              &gt; loading extraterrestrial DNA matrix<br/>
              &gt; bypassing azmuth security protocols<br/>
              &gt; calibrating metamorphic sequencers...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
