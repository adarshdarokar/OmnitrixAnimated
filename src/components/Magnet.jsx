import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Magnet = ({ children, strength = 0.5, range = 100 }) => {
  const ref = useRef(null);
  
  // Use MotionValues to bypass React re-renders for every mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configuration for smooth motion
  const springConfig = { 
    type: 'spring', 
    stiffness: 150, 
    damping: 15, 
    mass: 0.1,
    restDelta: 0.001 
  };
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const [isHovered, setIsHovered] = useState(false);
  const boundsRef = useRef(null);

  const updateBounds = useCallback(() => {
    if (ref.current) {
      boundsRef.current = ref.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!boundsRef.current) updateBounds();
    
    const { left, top, width, height } = boundsRef.current;
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      if (!isHovered) setIsHovered(true);
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      if (isHovered) {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }
    }
  }, [range, strength, x, y, isHovered, updateBounds]);

  const resetPosition = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Only add global listener if it's actually beneficial,
    // but caching bounds on mouse move start is key.
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', updateBounds);
    window.addEventListener('resize', updateBounds);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', updateBounds);
      window.removeEventListener('resize', updateBounds);
    };
  }, [handleMouseMove, updateBounds]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={updateBounds}
      onMouseLeave={resetPosition}
      style={{ x: springX, y: springY }}
      className="inline-block will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
