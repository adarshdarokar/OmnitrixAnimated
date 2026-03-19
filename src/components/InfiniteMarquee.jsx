import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const words = [
    "OMNITRIX", "TRANSFORMA", "EVOLUTION", "SYSTEM_READY", "DNA_MATIX", "GALAXY_OS", "AZMUTH", "PROTOCOL_ZERO"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-8 z-20 border-y border-[#00ff88]/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap items-center font-syncopate font-bold text-lg md:text-xl text-[#00ff88]/40 uppercase tracking-[0.8em] gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {/* First set of words */}
          {words.map((word, i) => (
            <div key={`first-${i}`} className="flex items-center gap-16 group">
              <span className="group-hover:text-[#00ff88] group-hover:drop-shadow-[0_0_10px_#00ff88] transition-all duration-500">{word}</span>
              <span className="w-2 h-2 rounded-full bg-[#00ff88]/20 group-hover:bg-[#00ff88] transition-all duration-500"></span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {words.map((word, i) => (
            <div key={`second-${i}`} className="flex items-center gap-16 group">
              <span className="group-hover:text-[#00ff88] group-hover:drop-shadow-[0_0_10px_#00ff88] transition-all duration-500">{word}</span>
              <span className="w-2 h-2 rounded-full bg-[#00ff88]/20 group-hover:bg-[#00ff88] transition-all duration-500"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
