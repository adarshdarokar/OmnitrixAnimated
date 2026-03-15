import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 394;

export default function OmnitrixScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images completely before triggering any views.
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    const loadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(4, "0");
        img.src = `/gravity/Ben10/${paddedIndex}.jpg`;

        img.onload = () => {
          loadedCount++;
          loadedImages[i - 1] = img; // Retain exact sorting
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

          if (loadedCount === TOTAL_FRAMES) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };

        img.onerror = () => {
          console.error(`Failed to load frame ${paddedIndex}`);
          // Count failure to ensure loading state resolves
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };
      }
    };

    loadImages();
  }, []);

  // Frame painting and sizing algorithms.
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    // Set alpha to false to heavily optimize canvas hardware rendering memory
    const context = canvas.getContext("2d", { alpha: false }); 
    let animationFrameId;
    let currentFrameIndex = 0;

    const drawFrame = (frameIndex) => {
      const img = images[frameIndex];
      // Skip draw if image is missing from cache
      if (!img) return;

      const cssWidth = window.innerWidth;
      const cssHeight = window.innerHeight;
      
      // Paint background black perfectly
      context.fillStyle = "#000000";
      context.fillRect(0, 0, cssWidth, cssHeight);

      // Perform standard "Contain" calculation
      const hRatio = cssWidth / img.width;
      const vRatio = cssHeight / img.height;
      const ratio = Math.min(hRatio, vRatio); // Contain scaling
      
      const drawWidth = img.width * ratio;
      const drawHeight = img.height * ratio;
      
      // Center the draw inside the CSS bounds
      const centerShift_x = (cssWidth - drawWidth) / 2;
      const centerShift_y = (cssHeight - drawHeight) / 2;

      context.drawImage(
        img,
        0, 0, img.width, img.height,                 // Source rect
        centerShift_x, centerShift_y, drawWidth, drawHeight // Destination rect
      );
    };

    const resizeCanvas = () => {
      // Scale Canvas to the Device Pixel Ratio for Retina/High-DPI rendering (Fixes the Blur issues)
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Normalize drawing actions down to CSS pixels
      context.scale(dpr, dpr);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high"; // Maximum visual retainment
      
      // Recalculate and redraw the frame on resize
      drawFrame(currentFrameIndex);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initialize first pass

    // Scroll value listener, binding to next free frame via requestAnimationFrame
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(latest * TOTAL_FRAMES)
      );
      
      // Deduplicate renders
      if (frameIndex !== currentFrameIndex) {
        currentFrameIndex = frameIndex;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        animationFrameId = requestAnimationFrame(() => drawFrame(currentFrameIndex));
      }
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLoaded, images, scrollYProgress]);

  // Cinematic scroll events
  // 0% - 20%
  const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  // 25% - 45%
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const text2X = useTransform(scrollYProgress, [0.25, 0.35], [-50, 0]);

  // 55% - 75%
  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const text3X = useTransform(scrollYProgress, [0.55, 0.65], [50, 0]);

  // 85% - 100%
  const text4Opacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const text4Scale = useTransform(scrollYProgress, [0.85, 1], [0.8, 1]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "1200vh" }} id="home">
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
          <div className="w-16 h-16 border-4 border-[#111] border-t-[#00ff88] rounded-full animate-spin mb-4 shadow-[0_0_15px_#00ff88]"></div>
          <div className="text-[#00ff88] font-mono text-xl glow-text">
            SYSTEM BOOTING... {loadProgress}%
          </div>
        </div>
      )}
      
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
        {/* Fullscreen Sticky Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 bg-transparent" 
          style={{ width: "100%", height: "100vh", display: "block" }} 
        />
        
        {/* Animated HUD Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
          
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }} 
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white tracking-widest uppercase drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              Ben 10 <br /> <span className="text-[#00ff88] glow-text">Transformation</span>
            </h1>
          </motion.div>

          <motion.div 
            style={{ opacity: text2Opacity, x: text2X }} 
            className="absolute left-[10%] top-[40%] max-w-lg"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron text-white leading-tight">
              Omnitrix <br /> <span className="text-[#00ff88]">Activated</span>
            </h2>
            <p className="mt-4 text-white/60 font-mono text-lg max-w-sm glass-panel p-4 rounded-xl border-[#00ff88]/20 backdrop-blur-md">
              Initializing extraterrestrial DNA sequencers. Biometric lock disengaged.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: text3Opacity, x: text3X }} 
            className="absolute right-[10%] top-[50%] max-w-lg text-right"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron text-white leading-tight">
              Alien DNA <br /> <span className="text-[#00ff88]">Unlocked</span>
            </h2>
            <p className="mt-4 text-white/60 font-mono text-lg max-w-sm ml-auto glass-panel p-4 rounded-xl border-[#00ff88]/20 backdrop-blur-md">
              Level 10 clearance granted. Metamorphic synthesis underway.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: text4Opacity, scale: text4Scale }} 
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <div className="glass-panel p-12 rounded-3xl border border-[#00ff88]/30 shadow-[0_0_50px_rgba(0,255,136,0.15)] backdrop-blur-xl">
              <h2 className="text-5xl md:text-8xl font-orbitron font-black text-white uppercase tracking-widest mb-6">
                Hero <br/> <span className="text-[#00ff88] glow-text">Transformation</span> <br/> Begins
              </h2>
              <div className="w-24 h-1 bg-[#00ff88] mx-auto glow-border"></div>
            </div>
          </motion.div>

        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-mono tracking-widest mb-2 text-[#00ff88]">SCROLL SEQUENCE</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#00ff88] to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}
