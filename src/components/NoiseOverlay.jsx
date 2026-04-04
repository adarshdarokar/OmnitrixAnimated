import React from 'react';

/**
 * High-performance Noise Overlay
 * Replaces the expensive feTurbulence dynamic SVG with a more efficient 
 * static noise pattern to eliminate GPU lag and improve cursor responsiveness.
 */
const NoiseOverlay = () => {
  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.05] mix-blend-overlay transform-gpu"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
      }}
    />
  );
};

export default NoiseOverlay;
