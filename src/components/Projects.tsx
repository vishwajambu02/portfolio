import React from "react";
import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { Github, ExternalLink, Terminal, Sparkles, Star, Globe, Calendar, Compass, ArrowUpRight, Cpu } from "lucide-react";

export default function Projects() {
  const liveProjects = PROJECTS.filter((p) => p.status === "live");
  const futureProjects = PROJECTS.filter((p) => p.status === "future");

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 border-t border-slate-900/60">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/20 text-teal-400 font-mono text-[10px] tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(20,184,166,0.1)]"
          >
            <Cpu size={12} className="animate-pulse" />
            <span>Developer Ledger</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4"
          >
            Featured Portfolios
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-sm max-w-lg mx-auto"
          >
            Chronicles of fully-functional live platforms alongside concepts engineered to address community workflows.
          </motion.p>
        </div>

        {/* 1. LIVE PRODUCTION ECOSYSTEMS SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">
              Live Production Platforms
            </span>
            <div className="h-[1px] bg-slate-900/80 flex-1 ml-4" />
          </div>

          <div className="grid grid-cols-1 gap-10">
            {liveProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/40 to-slate-950/20 border border-slate-900 hover:border-teal-500/30 backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Visual Top Highlight Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 md:p-10">
                  {/* Card Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono text-teal-400 bg-teal-950/30 border border-teal-500/20 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                          Live Deploy
                        </span>
                        <span className="text-slate-600 font-mono text-xs">•</span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          Released {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-teal-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-sans mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Direct High-end Premium Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-all active:scale-[0.97] hover:shadow-[0_0_15px_rgba(255,255,255,0.03)] cursor-pointer"
                      >
                        <Github size={14} className="text-indigo-400" />
                        <span>View Source</span>
                      </a>
                    </div>
                  </div>

                  {/* Skills/Tools list */}
                  <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-900/60 pb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-900 text-[11px] font-mono text-slate-400 hover:text-teal-400 hover:border-teal-500/20 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Core specifications direct listing */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5">
                      <Terminal size={12} className="text-teal-400" />
                      <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                        System Specifications & Deliverables
                      </h4>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.description.map((bullet, bIdx) => (
                        <li 
                          key={bIdx}
                          className="p-4 rounded-xl bg-slate-950/40 border border-slate-900/50 hover:border-slate-800/60 text-xs text-slate-300 leading-relaxed transition-all flex items-start gap-3 group/item"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5 group-hover/item:scale-125 group-hover/item:bg-cyan-300 transition-all" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. FUTURE INITIATIVES SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-bold">
              Future Conceptual Initiatives
            </span>
            <div className="h-[1px] bg-slate-900/80 flex-1 ml-4" />
          </div>

          <div className="grid grid-cols-1 gap-10">
            {futureProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/20 to-slate-950/10 border border-slate-900 hover:border-indigo-500/20 backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Visual Top Highlight Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-indigo-500/40 group-hover:bg-indigo-500/80 transition-all" />

                <div className="p-6 md:p-10">
                  {/* Card Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/30 border border-indigo-500/20 px-2 py-0.5 rounded uppercase tracking-wider font-semibold animate-pulse">
                          Future Concept
                        </span>
                        <span className="text-slate-600 font-mono text-xs">•</span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          Target Year {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-sans mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Future Initiative spec buttons */}
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <span className="px-4 py-2 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
                        <Compass size={14} className="animate-spin" style={{ animationDuration: "12s" }} />
                        <span>Under Conception</span>
                      </span>
                    </div>
                  </div>

                  {/* Skills/Tools list */}
                  <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-900/60 pb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-900 text-[11px] font-mono text-slate-400 hover:text-indigo-400 hover:border-indigo-500/20 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Core specifications direct listing */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5">
                      <Terminal size={12} className="text-indigo-400" />
                      <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                        Technical Architecture Drafts
                      </h4>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.description.map((bullet, bIdx) => (
                        <li 
                          key={bIdx}
                          className="p-4 rounded-xl bg-slate-950/40 border border-slate-900/50 hover:border-slate-800/60 text-xs text-slate-300 leading-relaxed transition-all flex items-start gap-3 group/item"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5 group-hover/item:scale-125 group-hover/item:bg-indigo-300 transition-all" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
