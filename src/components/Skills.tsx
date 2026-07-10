import React, { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data";
import { Code2, Monitor, Database, CloudLightning, Terminal, Braces, Sparkles, CheckCircle2 } from "lucide-react";

// Helper to assign a specific aesthetic icon to each category
const CATEGORY_ICONS = [
  { icon: Braces, color: "text-teal-400", bg: "bg-teal-950/20", border: "border-teal-500/10" },
  { icon: Monitor, color: "text-cyan-400", bg: "bg-cyan-950/20", border: "border-cyan-500/10" },
  { icon: Database, color: "text-indigo-400", bg: "bg-indigo-950/20", border: "border-indigo-500/10" },
  { icon: CloudLightning, color: "text-purple-400", bg: "bg-purple-950/20", border: "border-purple-500/10" }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 border-t border-slate-900/60 bg-slate-950/40">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/10 text-indigo-400 font-mono text-[10px] tracking-wider uppercase mb-3"
          >
            <Terminal size={12} />
            <span>Expertise Index</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4"
          >
            Technical Stack
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-sm max-w-lg mx-auto"
          >
            A comprehensive overview of languages, frameworks, databases, and developer environments I work with.
          </motion.p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const config = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            const IconComponent = config.icon;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-6 md:p-8 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Floating Ambient Glowing Mesh */}
                <div 
                  className={`absolute -right-24 -top-24 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500/5 to-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
                />

                <div className="flex items-start gap-4 mb-6">
                  {/* Category Icon */}
                  <div className={`p-3 rounded-xl ${config.bg} ${config.color} border ${config.border} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {category.skills.length} core proficiencies
                    </p>
                  </div>
                </div>

                {/* Skill Capsules List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-900 border border-slate-900/80 hover:border-slate-800 text-slate-300 hover:text-white text-xs font-medium font-sans flex items-center gap-2 transition-all cursor-default"
                    >
                      <CheckCircle2 size={12} className="text-teal-400/80 shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50 group-hover:via-teal-500/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Creative Interactive Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-xl border border-slate-900 bg-slate-950/20 text-center max-w-2xl mx-auto flex items-center justify-center gap-3"
        >
          <Sparkles size={16} className="text-yellow-400 animate-pulse shrink-0" />
          <p className="text-xs font-mono text-slate-500">
            Currently focused on exploring <span className="text-teal-400">AWS Cloud Server Architectures</span> & <span className="text-indigo-400">Large Language Model Integrations</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
