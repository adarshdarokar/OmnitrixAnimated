import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Delay calling onComplete to allow exit animation
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Update progress every 25ms for a 2.5s total load time
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience - Optimized */}
      <div className="ambient-mesh opacity-20"></div>
      <div className="scanline-overlay absolute inset-0 z-1 opacity-5"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Omnitrix Core */}
        <div className="relative w-32 h-32 mb-12">
          {/* Inner Core */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-[#00ff88]/20 rounded-full flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-[#00ff88] clip-omnitrix shadow-[0_0_30px_rgba(0,255,136,0.3)]"></div>
          </motion.div>
          
          {/* Outer Ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-[#00ff88]/10 rounded-full border-dashed"
          ></motion.div>

          {/* Pulse Effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 bg-[#00ff88]/5 rounded-full blur-xl"
          ></motion.div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.h2 
            className="font-syncopate font-bold text-white text-xl tracking-[0.4em] uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Omnitrix <span className="text-[#00ff88]">OS</span>
          </motion.h2>
          
          <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden mt-4">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"
              style={{ width: `${progress}%` }}
            ></motion.div>
          </div>

          <div className="flex flex-col gap-1 mt-6">
            <span className="font-mono text-[9px] text-[#00ff88]/60 tracking-widest uppercase">
              Initializing DNA Archives... {progress}%
            </span>
            <span className="font-mono text-[7px] text-white/20 tracking-[0.2em] uppercase">
              // Azmuth Security Protocol Active //
            </span>
          </div>
        </div>

        {/* HUD Corners - Optimized */}
        <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-[#00ff88]/10"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-[#00ff88]/10"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-[#00ff88]/10"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-[#00ff88]/10"></div>
      </div>

      {/* Background HUD Matrix - Optimized for performance */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#00ff88_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </motion.div>
  );
}
