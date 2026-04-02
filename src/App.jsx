import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import BootLoader from "./components/BootLoader";
import CustomCursor from "./components/CustomCursor";
import BackgroundMusic from "./components/BackgroundMusic";
import SmoothScroll from "./components/SmoothScroll";
import NoiseOverlay from "./components/NoiseOverlay";
import SVGFilters from "./components/SVGFilters";

export default function App() {
  const [booting, setBooting] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const startSite = () => {
    setBooting(false);
    setAudioStarted(true);
  };

  return (
    <SmoothScroll>
      <div className={`w-full min-h-screen bg-[#0a0a0a] text-white ${booting ? 'overflow-hidden h-screen' : ''}`}>
        <CustomCursor />
        <NoiseOverlay />
        <SVGFilters />
        <BackgroundMusic play={audioStarted} />
        
        <AnimatePresence>
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
          <Home onProgress={setLoadProgress} />
        </motion.div>
      </div>
    </SmoothScroll>
  );
}
