import { 
  motion, 
  useScroll, 
  useVelocity, 
  useTransform, 
  useSpring, 
  useAnimationFrame,
  useMotionValue
} from "framer-motion";
import { useRef, useEffect } from "react";

export default function InfiniteMarquee() {
  const words = [
    "OMNITRIX", "TRANSFORMA", "EVOLUTION", "SYSTEM_READY", "DNA_MATIX", "GALAXY_OS", "AZMUTH", "PROTOCOL_ZERO"
  ];

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });
  
  // Transform velocity into a speed multiplier (1x to 10x)
  const velocityFactor = useTransform(smoothVelocity, [0, 3000], [1, 10], { clamp: false });

  return (
    <div className="relative w-full overflow-hidden bg-black py-12 z-20 border-y border-[#00ff88]/10 content-visibility-auto">
      <div className="flex whitespace-nowrap">
        <MarqueeItem words={words} velocityFactor={velocityFactor} baseVelocity={-2} />
      </div>
    </div>
  );
}

function MarqueeItem({ words, velocityFactor, baseVelocity = -2 }) {
  const baseX = useMotionValue(0);
  
  /**
   * This is a production-level technique for infinite marquees:
   * We update the position manually in a requestAnimationFrame loop (useAnimationFrame)
   * This allows us to smoothly inject the scroll velocity into the animation speed.
   */
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * 50; // Base speed
    
    // Inject scroll velocity factor
    moveBy += moveBy * (velocityFactor.get() - 1);

    baseX.set(baseX.get() + moveBy);
    
    // Loop back to 0% when we reach -50% (since we duplicated the content)
    if (baseX.get() <= -50) {
      baseX.set(0);
    } else if (baseX.get() >= 0) {
        baseX.set(-50);
    }
  });

  // Transform raw value to percentage for CSS
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <motion.div
      className="flex whitespace-nowrap items-center font-syncopate font-bold text-xl md:text-3xl text-[#00ff88]/40 uppercase tracking-[1em] gap-20 transform-gpu will-change-transform"
      style={{ x }}
    >
      {[...Array(2)].map((_, idx) => (
        <div key={idx} className="flex items-center gap-20">
          {words.map((word, i) => (
            <div key={`${idx}-${i}`} className="flex items-center gap-20 group">
              <span className="group-hover:text-[#00ff88] group-hover:drop-shadow-[0_0_15px_#00ff88] transition-all duration-500 cursor-default">
                {word}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#00ff88]/20 group-hover:bg-[#00ff88] transition-all duration-500 shadow-[0_0_10px_rgba(0,255,136,0.2)]"></span>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
