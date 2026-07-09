import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Code2, Database, Cpu, Cloud, Terminal, Braces, Sparkles, Layers, Laptop } from "lucide-react";

// Definitions of floating elements representing skills/flying tech elements
const FLOATING_ITEMS = [
  { icon: Code2, color: "text-teal-400/20", size: 48, speed: 25, delay: 0 },
  { icon: Database, color: "text-cyan-400/15", size: 56, speed: 30, delay: 2 },
  { icon: Cpu, color: "text-indigo-400/20", size: 40, speed: 20, delay: 4 },
  { icon: Cloud, color: "text-blue-400/15", size: 64, speed: 35, delay: 1 },
  { icon: Terminal, color: "text-purple-400/20", size: 44, speed: 22, delay: 5 },
  { icon: Braces, color: "text-emerald-400/15", size: 52, speed: 28, delay: 3 },
  { icon: Sparkles, color: "text-yellow-400/25", size: 32, speed: 18, delay: 6 },
  { icon: Layers, color: "text-fuchsia-400/15", size: 48, speed: 32, delay: 2 },
  { icon: Laptop, color: "text-sky-400/20", size: 42, speed: 26, delay: 7 }
];

export default function BackgroundEffects() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  
  // Parallax mouse effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x * 60); // Max 60px movement
      mouseY.set(y * 60);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Positions generated statically or pseudo-randomly so SSR or Hydration doesn't mismatch
  const getInitialPosition = (index: number) => {
    const positions = [
      { x: 10, y: 15 },
      { x: 80, y: 20 },
      { x: 15, y: 70 },
      { x: 85, y: 75 },
      { x: 50, y: 10 },
      { x: 70, y: 85 },
      { x: 30, y: 45 },
      { x: 85, y: 45 },
      { x: 45, y: 80 }
    ];
    return positions[index % positions.length];
  };

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-slate-950 pointer-events-none">
      {/* Dynamic Glowing Accents (Vibrant Background Mesh) */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Deep cyan/teal radial glow in top-right */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-900/10 blur-[130px]" />
        
        {/* Soft violet radial glow in bottom-left */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-950/40 blur-[150px]" />
        
        {/* Subtle center-right blue glow */}
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-blue-950/20 blur-[120px]" />
      </div>

      {/* Cyber Grid - Parallax Layer */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-0 opacity-[0.03]"
      >
        <div 
          className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{ maskImage: "radial-gradient(circle, white, transparent 80%)", WebkitMaskImage: "radial-gradient(circle, white, transparent 80%)" }}
        />
      </motion.div>

      {/* Subtle floating dot grid particles */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#38bdf8" />
          </pattern>
          <rect width="100%" h="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* Flying / Drifting Tech Elements (Floating Images) */}
      {FLOATING_ITEMS.map((item, index) => {
        const IconComponent = item.icon;
        const pos = getInitialPosition(index);
        
        // Multipliers for varying parallax depths
        const parallaxFactor = (index % 3) + 1; // 1, 2, or 3
        
        return (
          <motion.div
            key={index}
            style={{
              x: springX.get() * -0.5 * parallaxFactor,
              y: springY.get() * -0.5 * parallaxFactor,
            }}
            initial={{ 
              opacity: 0, 
              left: `${pos.x}%`, 
              top: `${pos.y}%`,
              scale: 0.8
            }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [0, -15, 0],
              rotate: [0, 360],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              y: {
                duration: item.speed,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: item.speed * 2,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: item.speed,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: item.speed,
                repeat: Infinity,
                ease: "easeInOut",
              },
              delay: item.delay
            }}
            className={`absolute pointer-events-none select-none ${item.color} hidden md:block`}
          >
            <IconComponent 
              size={item.size} 
              className="drop-shadow-[0_0_8px_currentColor]" 
              strokeWidth={1.2}
            />
          </motion.div>
        );
      })}

      {/* Drifting Sparkles / Dust particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const delay = (i * 0.4).toFixed(1);
          const duration = (15 + (i % 5) * 4).toFixed(0);
          const left = ((i * 7.7) % 100).toFixed(1);
          const top = ((i * 13.1) % 100).toFixed(1);
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Number(duration),
                repeat: Infinity,
                ease: "easeInOut",
                delay: Number(delay),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
