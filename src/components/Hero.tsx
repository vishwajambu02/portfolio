import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Terminal, Phone, ChevronRight, FileText, Download } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8">
      {/* Light particle background wrapper */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column: Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/20 text-teal-400 font-mono text-xs w-fit mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>Available for Internships & Projects</span>
          </motion.div>

          {/* Headline Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 font-sans">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 font-sans tracking-wide mb-6">
              {PERSONAL_INFO.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            {PERSONAL_INFO.about}
          </motion.p>

          {/* Quick contact tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-y-3 gap-x-6 text-slate-400 font-mono text-xs mb-8"
          >
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-teal-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-cyan-400" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-indigo-400" />
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button
              onClick={() => onScrollToSection("projects")}
              className="group px-6 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:shadow-[0_0_30px_rgba(20,184,166,0.45)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onScrollToSection("resume")}
              className="group px-6 py-4 rounded-xl font-bold text-sm text-slate-300 hover:text-teal-300 bg-slate-950/80 border border-slate-900 hover:border-teal-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={16} className="text-indigo-400 group-hover:text-teal-400 transition-colors" />
              <span>Interactive Resume</span>
            </button>
          </motion.div>

          {/* Quick Stats Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 py-6 border-t border-slate-900 max-w-lg"
          >
            <div>
              <div className="text-2xl font-bold text-white font-mono">7.42</div>
              <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">B.Tech CGPA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400 font-mono">3+</div>
              <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">Key Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-400 font-mono">2028</div>
              <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">CSE Grad Cycle</div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Stylized Interactive Hologram / Profile Picture */}
        <div className="md:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            {/* Outer Rotating Glowing Borders */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-teal-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-indigo-500/10"
            />

            {/* Glowing Tech Particle Paths */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-teal-500/5 to-indigo-500/5 blur-xl animate-pulse" />

            {/* Main Premium Profile Picture Container */}
            <div className="absolute inset-10 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden shadow-2xl group/profile">
              {/* Overlay cyber scanline grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px] opacity-10 z-20 pointer-events-none" />

              {/* Developer Profile Picture */}
              <div className="absolute inset-0 z-10 overflow-hidden">

            <img
  src="/profile.jpg"
  alt={PERSONAL_INFO.name}
  className="w-full h-full object-cover scale-105 group-hover/profile:scale-115 transition-transform duration-700 contrast-110 brightness-100"
/>    
                {/* Neon gradient lens filter */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/40 via-transparent to-indigo-950/40 mix-blend-overlay z-15" />
                <div className="absolute inset-0 bg-slate-950/10 hover:bg-transparent transition-colors duration-500 z-16" />
              </div>

              {/* Overlay digital frame element (glow) */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-20 blur-sm -z-10" />
            </div>

            {/* Orbiting Tech Badges (Flying around visual style) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-10 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-900 text-xs font-mono text-teal-400 flex items-center gap-1.5 shadow-lg shadow-black/80 hover:border-teal-500/20 transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span>React.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-6 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-900 text-xs font-mono text-indigo-400 flex items-center gap-1.5 shadow-lg shadow-black/80 hover:border-indigo-500/20 transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>Node.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-900 text-xs font-mono text-cyan-400 flex items-center gap-1.5 shadow-lg shadow-black/80 hover:border-cyan-500/20 transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>REST APIs</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
