import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const TOTAL_FRAMES = 30;

export default function OmnitrixScroll({ onProgress }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Lighter spring physics for smoother framerate without heavy lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Cinematic FX: Subtle Camera Zoom
  const canvasScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);


  // Preload images completely before triggering any views.
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    const loadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/gravity/Ben10/70ae154d-5cb8-4b59-816c-23a6831dbba9__1__${paddedIndex}.png`;

        img.onload = () => {
          loadedCount++;
          loadedImages[i - 1] = img; // Retain exact sorting
          const currentProgress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
          if (onProgress) onProgress(currentProgress);

          if (loadedCount === TOTAL_FRAMES) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };

        img.onerror = () => {
          console.error(`Failed to load frame ${paddedIndex}`);
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

  const drawFrame = (frameIndex, ctx, canvas) => {
    const img = images[frameIndex];
    if (!img || !ctx || !canvas) return;

    const canvasContainer = canvas.parentElement;
    const cssWidth = canvasContainer?.clientWidth || window.innerWidth;
    const cssHeight = window.innerHeight;
    
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const hRatio = cssWidth / img.width;
    const vRatio = cssHeight / img.height;
    const ratio = Math.min(hRatio, vRatio); 
    
    const drawWidth = img.width * ratio;
    const drawHeight = img.height * ratio;
    
    const centerShift_x = (cssWidth - drawWidth) / 2;
    const centerShift_y = (cssHeight - drawHeight) / 2;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, drawWidth, drawHeight
    );
  };

  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: true }); 
    let animationFrameId;
    let currentFrameIndex = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const canvasContainer = canvas.parentElement;
      const cssWidth = canvasContainer?.clientWidth || window.innerWidth;
      const cssHeight = window.innerHeight;
      
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      
      context.scale(dpr, dpr);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      
      drawFrame(currentFrameIndex, context, canvas);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    const unsubscribe = smoothProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(latest * TOTAL_FRAMES))
      );
      
      if (frameIndex !== currentFrameIndex) {
        currentFrameIndex = frameIndex;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        animationFrameId = requestAnimationFrame(() => drawFrame(currentFrameIndex, context, canvas));
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLoaded, images, smoothProgress]);

  // Cinematic scroll events
  // 0% - 20%
  const text1Opacity = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.1], [50, 0]);

  // 25% - 45%
  const text2Opacity = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const text2X = useTransform(smoothProgress, [0.25, 0.35], [-50, 0]);

  // 55% - 75%
  const text3Opacity = useTransform(smoothProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const text3X = useTransform(smoothProgress, [0.55, 0.65], [50, 0]);

  // 85% - 100%
  const text4Opacity = useTransform(smoothProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const text4Scale = useTransform(smoothProgress, [0.85, 1], [0.8, 1]);

  // Static Cover Image fades out the instant scroll begins
  const coverOpacity = useTransform(smoothProgress, [0, 0.005], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "600vh" }} id="home">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
        {/* HUD Grid Overlay */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-20 mix-blend-screen bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* HUD Crosshairs */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ff88]/50 z-10 opacity-70"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ff88]/50 z-10 opacity-70"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ff88]/50 z-10 opacity-70"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ff88]/50 z-10 opacity-70"></div>

        {/* Ambient Omnitrix Pulse behind Canvas */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[50vw] h-[50vh] bg-[#00ff88]/10 blur-[150px] rounded-full animate-pulse mix-blend-screen"></div>
        </div>

        {/* Cinematic Vignette Overlay inside viewport */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#0a0a0a_110%)]"></div>

        {/* Reduced Width Canvas Wrapper with Cinematic Zoom */}
        <motion.div 
          style={{ scale: canvasScale, willChange: "transform" }}
          className="relative w-11/12 md:w-4/5 lg:w-[60%] h-full flex items-center justify-center z-0 origin-center"
        >
          {/* Static Cover Image (Ben10.jpg) that sits perfectly until scrolling begins */}
          <motion.img 
            src="/Ben10.jpg" 
            alt="Ben 10 Cover"
            style={{ opacity: coverOpacity }}
            className="absolute mix-blend-lighten pointer-events-none object-contain w-full h-full"
          />

          <canvas 
            ref={canvasRef} 
            className="w-full h-full mix-blend-lighten" 
            style={{ display: "block" }} 
          />
        </motion.div>
        
        {/* Animated HUD Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
          
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }} 
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <div className="glass-panel p-8 rounded-xl border-l-4 border-l-[#00ff88] gaming-card inline-block">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white tracking-widest uppercase mb-2">
                Ben 10
              </h1>
              <div className="text-xl text-[#00ff88] tracking-[0.5em] glow-text font-mono">
                [ TRANSFORMATION SEQUENCE ]
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: text2Opacity, x: text2X }} 
            className="absolute left-[8%] top-[40%] max-w-lg"
          >
            <div className="gaming-card p-8 border-l-4 border-l-[#00ff88]">
              <div className="text-xs text-[#00ff88] mb-2 font-mono tracking-widest">SYS_STATUS: ACTIVE</div>
              <h2 className="text-4xl md:text-6xl font-orbitron text-white leading-tight mb-4">
                Omnitrix <br /> <span className="text-[#00ff88]">Engaged</span>
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#00ff88] to-transparent mb-4"></div>
              <p className="text-white/60 font-mono text-sm leading-relaxed">
                Initializing extraterrestrial DNA sequencers. Biometric lock disengaged. 
                Routing zero-point energy to core reactor.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: text3Opacity, x: text3X }} 
            className="absolute right-[8%] top-[50%] max-w-lg text-right"
          >
             <div className="gaming-card p-8 border-r-4 border-r-[#00ff88]">
              <div className="text-xs text-[#00ff88] mb-2 font-mono tracking-widest">DNA_MATRIX: UNLOCKED</div>
              <h2 className="text-4xl md:text-6xl font-orbitron text-white leading-tight mb-4">
                Alien DNA <br /> <span className="text-[#00ff88]">Synthesis</span>
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-l from-[#00ff88] to-transparent mb-4"></div>
              <p className="text-white/60 font-mono text-sm leading-relaxed">
                Level 10 clearance granted. Metamorphic synthesis underway. 
                Warning: high energy output detected.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: text4Opacity, scale: text4Scale }} 
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <div className="glass-panel p-12 rounded-lg border border-[#00ff88]/50 shadow-[0_0_50px_rgba(0,255,136,0.2)] gaming-card backdrop-blur-2xl">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ff88]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ff88]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ff88]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ff88]"></div>
              
              <div className="text-sm font-mono text-[#00ff88] tracking-widest mb-4">TRANSFORMATION COMPLETE</div>
              <h2 className="text-5xl md:text-8xl font-orbitron font-black text-white uppercase tracking-widest mb-6">
                Hero <br/> <span className="text-[#00ff88] glow-text">Online</span>
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/4 bg-white opacity-50 blur-sm mix-blend-overlay animate-[scan_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </motion.div>

        </div>


      </div>
    </div>
  );
}
