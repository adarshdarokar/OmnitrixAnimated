import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function InfiniteMarquee() {
  const words = [
    "OMNITRIX", "TRANSFORMA", "EVOLUTION", "SYSTEM_READY", "DNA_MATIX", "GALAXY_OS", "AZMUTH", "PROTOCOL_ZERO"
  ];

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 400,
    damping: 50,
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [1, 5], { clamp: false });

  const marqueeRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden bg-black py-8 z-20 border-y border-[#00ff88]/10">
      <div className="flex whitespace-nowrap">
        <MarqueeItem words={words} velocityFactor={velocityFactor} />
      </div>
    </div>
  );
}

function MarqueeItem({ words, velocityFactor }) {
  const baseX = useRef(0);
  const startTime = useRef(performance.now());
  const x = useSpring(0);

  // Fallback to simpler animation if complexity is too high, but let's try a custom loop here
  // Actually, let's just use the factor in the duration for simplicity if we can
  
  return (
    <motion.div
      className="flex whitespace-nowrap items-center font-syncopate font-bold text-lg md:text-xl text-[#00ff88]/40 uppercase tracking-[0.8em] gap-16"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 6, // Ultra-fast base speed
      }}
    >
            {/* First set of words */}
            {words.map((word, i) => (
              <div key={`first-${i}`} className="flex items-center gap-16 group">
                <span className="group-hover:text-[#00ff88] group-hover:drop-shadow-[0_0_10px_#00ff88] transition-all duration-500">{word}</span>
                <span className="w-2 h-2 rounded-full bg-[#00ff88]/20 group-hover:bg-[#00ff88] transition-all duration-500"></span>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {words.map((word, i) => (
              <div key={`second-${i}`} className="flex items-center gap-16 group">
                <span className="group-hover:text-[#00ff88] group-hover:drop-shadow-[0_0_10px_#00ff88] transition-all duration-500">{word}</span>
                <span className="w-2 h-2 rounded-full bg-[#00ff88]/20 group-hover:bg-[#00ff88] transition-all duration-500"></span>
              </div>
            ))}
          </motion.div>
  );
}
