import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for that "premium" weight
  const springConfig = { damping: 30, stiffness: 450, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Faster spring for the dot
  const dotSpringConfig = { damping: 40, stiffness: 1000, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX - 16); 
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.group');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Main Ring - Weighted Spring */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00ff88]/50 mix-blend-screen flex items-center justify-center pointer-events-none"
          style={{
            x: cursorX,
            y: cursorY,
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 1.5 : 1
          }}
        >
          {/* Inner Glow */}
          <motion.div 
            animate={{ scale: isHovering ? 1.2 : 1 }}
            className="absolute inset-0 bg-[#00ff88]/5 rounded-full blur-[2px]"
          />
        </motion.div>

        {/* Inner Dot - Faster Spring */}
        <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00ff88] rounded-full pointer-events-none shadow-[0_0_10px_#00ff88]"
            style={{
                x: dotX,
                y: dotY,
                translateX: 13, // Center in the 32px ring (32-1.5)/2 approx 15, but let's align
                translateY: 13,
                opacity: isVisible ? 1 : 0,
                scale: isHovering ? 0.5 : 1
            }}
        />
      </div>
      <style>{`
        body, a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
