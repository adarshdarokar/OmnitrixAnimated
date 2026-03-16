import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const words = [
    "OMNITRIX", "DNA", "GENESIS", "ALIEN", "TECHNOLOGY", "MORPH", "AZMUTH", "GALAXY"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#00ff88] py-4 md:py-6 z-20 border-y border-white/20">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap items-center font-orbitron font-black text-2xl md:text-3xl text-black uppercase tracking-widest gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {/* First set of words */}
          {words.map((word, i) => (
            <div key={`first-${i}`} className="flex items-center gap-8">
              <span>{word}</span>
              <span className="text-white/50 text-xl font-mono">/</span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {words.map((word, i) => (
            <div key={`second-${i}`} className="flex items-center gap-8">
              <span>{word}</span>
              <span className="text-white/50 text-xl font-mono">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
