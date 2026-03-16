import { useState } from "react";
import Home from "./pages/Home";
import BootLoader from "./components/BootLoader";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [booting, setBooting] = useState(true);

  return (
    <div className={`w-full min-h-screen bg-[#0a0a0a] text-white ${booting ? 'overflow-hidden h-screen' : ''}`}>
      <CustomCursor />
      <BootLoader onComplete={() => setBooting(false)} />
      
      {/* Remove max-h screen lock once booted */}
      <div className={`transition-opacity duration-1000 ${booting ? 'opacity-0 h-screen overflow-hidden pointer-events-none' : 'opacity-100'}`}>
        {!booting && <Home />}
      </div>
    </div>
  );
}
