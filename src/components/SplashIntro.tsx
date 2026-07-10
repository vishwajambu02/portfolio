import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Code2, Sparkles } from "lucide-react";

interface SplashIntroProps {
  onComplete: () => void;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [glitchText, setGlitchText] = useState("VJ");

  useEffect(() => {
    // Elegant timing to initiate exit
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete transition after animation runs
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    // Minor digital glitch feel on initials
    const glitchInterval = setInterval(() => {
      const glitches = ["VJ", "V_J", "V.J", "VJ_", "VJ"];
      const randomGlitch = glitches[Math.floor(Math.random() * glitches.length)];
      setGlitchText(randomGlitch);
    }, 400);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Cybernetic Grid Overlay for Flash Intro */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.1),rgba(255,255,255,0))] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(0,0,0,0.8))] pointer-events-none" />
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Ambient Back Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.95], 
                opacity: [0.2, 0.6, 0.4] 
              }}
              transition={{ 
                duration: 2.2, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"
            />

            {/* Top Interactive Accent */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-400 font-mono text-[10px] tracking-wider uppercase"
            >
              <Terminal size={12} className="animate-pulse" />
              <span>Initializing Portfolio Systems</span>
            </motion.div>

            {/* Core Initials Monogram */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                duration: 0.8 
              }}
              className="relative text-8xl md:text-9xl font-extrabold tracking-tight"
            >
              <span className="relative z-10 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                {glitchText}
              </span>
              
              {/* Duplicate Glowing Backdrop Layer */}
              <span className="absolute left-0 top-0 text-8xl md:text-9xl font-extrabold tracking-tight text-teal-400/20 blur-md select-none">
                {glitchText}
              </span>
            </motion.div>

            {/* Subtext Name Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 flex flex-col items-center text-center gap-2"
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.25em] text-slate-300 uppercase font-sans">
                Vishwa Jambu
              </h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full" />
              <p className="text-xs font-mono text-slate-500 mt-2 tracking-widest uppercase flex items-center gap-1">
                <Code2 size={12} className="text-indigo-400" />
                <span>Full-Stack & Intelligent Systems</span>
                <Sparkles size={12} className="text-teal-400" />
              </p>
            </motion.div>
          </div>

          {/* Skip button for perfect accessibility & instant feedback */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={() => setIsExiting(true)}
            className="absolute bottom-10 px-5 py-2 rounded-full border border-slate-800 text-slate-400 text-xs font-mono tracking-wider hover:bg-slate-900 transition-all cursor-pointer"
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
