import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastTargetRef = useRef(null);
  const rafId = useRef(null);

  // Use raw MotionValues for maximum performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Higher stiffness and mass-less feel for "instant" responsiveness
  const springConfig = { damping: 30, stiffness: 800, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 35, stiffness: 1200, mass: 0.05 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const updateMousePosition = useCallback((e) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    
    rafId.current = requestAnimationFrame(() => {
      mouseX.set(e.clientX - 16); 
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    });
  }, [mouseX, mouseY, isVisible]);

  const handleMouseOver = useCallback((e) => {
    // Only check if the target has changed to avoid heavy closest() calls
    if (e.target === lastTargetRef.current) return;
    lastTargetRef.current = e.target;

    const isClickable = e.target.closest('button, a, .cursor-pointer, .group');
    setIsHovering(!!isClickable);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateMousePosition, handleMouseOver]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00ff88]/50 mix-blend-screen flex items-center justify-center pointer-events-none transform-gpu will-change-transform"
          style={{
            x: cursorX,
            y: cursorY,
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 1.5 : 1
          }}
        >
          <motion.div 
            animate={{ scale: isHovering ? 1.2 : 1 }}
            className="absolute inset-0 bg-[#00ff88]/10 rounded-full blur-[4px]"
          />
        </motion.div>

        <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00ff88] rounded-full pointer-events-none shadow-[0_0_10px_#00ff88] transform-gpu will-change-transform"
            style={{
                x: dotX,
                y: dotY,
                translateX: 13,
                translateY: 13,
                opacity: isVisible ? 1 : 0,
                scale: isHovering ? 0.3 : 1
            }}
        />
      </div>
      <style>{`
        body, a, button, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

