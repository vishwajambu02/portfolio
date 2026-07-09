import React from "react";
import { motion } from "motion/react";
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "../data";
import { GraduationCap, Award, BookOpen, Terminal, CheckCircle2, Trophy, ArrowUpRight } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section id="education" className="relative py-24 px-4 md:px-8 border-t border-slate-900/60 bg-slate-950/20">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/10 text-indigo-400 font-mono text-[10px] tracking-wider uppercase mb-3"
          >
            <GraduationCap size={12} />
            <span>Credentials Ledger</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4"
          >
            Education & Certifications
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-sm max-w-lg mx-auto"
          >
            A chronological timeline of my academic development alongside professional cloud credentials and engineering milestones.
          </motion.p>
        </div>

        {/* Two Column Layout: Left Education, Right Credentials/Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Academic Timeline (span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-teal-400" size={22} />
              <h3 className="text-xl font-bold text-white font-sans">Academic Timeline</h3>
            </div>

            <div className="relative border-l border-slate-800/80 ml-3 space-y-8 pb-4">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-950 border border-slate-800 group-hover:bg-teal-400 group-hover:border-teal-300 group-hover:scale-125 transition-all duration-300" />
                  
                  <span className="text-xs font-mono text-teal-400/80 bg-teal-950/20 px-2 py-0.5 rounded border border-teal-500/10 mb-2 inline-block">
                    {edu.period}
                  </span>
                  
                  <h4 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors font-sans">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-slate-400 text-sm mt-0.5">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs font-mono text-slate-500 mt-2 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-teal-500/80" />
                    <span>{edu.score}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Extra-Curriculars (span 6) */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Certifications Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Award className="text-indigo-400" size={22} />
                <h3 className="text-xl font-bold text-white font-sans">Professional Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-4 rounded-xl bg-slate-900/20 border border-slate-900 hover:border-slate-800 backdrop-blur-sm flex items-start gap-3.5 group transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-500/10 text-indigo-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Award size={16} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 shrink-0">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Trophy className="text-yellow-400" size={22} />
                <h3 className="text-xl font-bold text-white font-sans">Key Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-4 rounded-xl bg-slate-900/20 border border-slate-900 hover:border-slate-800 backdrop-blur-sm flex items-start gap-3.5 group transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-yellow-950/20 border border-yellow-500/10 text-yellow-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Trophy size={16} />
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
