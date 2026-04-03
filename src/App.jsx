import { useState, useCallback, useMemo, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import BootLoader from "./components/BootLoader";
import CustomCursor from "./components/CustomCursor";
import BackgroundMusic from "./components/BackgroundMusic";
import SmoothScroll from "./components/SmoothScroll";
import NoiseOverlay from "./components/NoiseOverlay";
import SVGFilters from "./components/SVGFilters";

// Memoize the Home component to prevent full-tree re-renders when loadProgress updates
const MemoizedHome = memo(Home);

export default function App() {
  const [booting, setBooting] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const startSite = useCallback(() => {
    setBooting(false);
    setAudioStarted(true);
  }, []);

  const handleProgress = useCallback((progress) => {
    setLoadProgress(progress);
  }, []);

  return (
    <SmoothScroll>
      <div className={`w-full min-h-screen bg-[#0a0a0a] text-white ${booting ? 'overflow-hidden h-screen' : ''}`}>
        <CustomCursor />
        <NoiseOverlay />
        <SVGFilters />
        <BackgroundMusic play={audioStarted} />
        
        <AnimatePresence mode="wait">
          {booting && (
            <BootLoader key="loader" onComplete={startSite} progress={loadProgress} />
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={booting ? 
            { opacity: 0, scale: 0.95, filter: "blur(10px)" } : 
            { opacity: 1, scale: 1, filter: "blur(0px)" }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full ${booting ? 'pointer-events-none h-screen overflow-hidden' : ''}`}
        >
          <MemoizedHome onProgress={handleProgress} />
        </motion.div>
      </div>
    </SmoothScroll>
  );
}
