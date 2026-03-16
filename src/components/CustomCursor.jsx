import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth trailing physics for the cursor
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hovers on clickable elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-pointer') ||
        e.target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
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
  }, [cursorX, cursorY, isVisible]);

  // Hide on small devices where touch is primary
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999] mix-blend-screen flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0
        }}
      >
        <motion.div 
          animate={{ 
            scale: isHovering ? 2 : 1,
            backgroundColor: isHovering ? "rgba(0, 255, 136, 0.2)" : "rgba(0, 255, 136, 1)",
            border: isHovering ? "1px solid rgba(0, 255, 136, 1)" : "0px solid rgba(0, 255, 136, 0)",
          }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 rounded-full drop-shadow-[0_0_10px_#00ff88]"
        ></motion.div>
      </motion.div>
      <style>{`
        body, a, button {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
