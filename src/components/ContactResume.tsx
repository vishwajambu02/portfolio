import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO, EDUCATION, SKILL_CATEGORIES, PROJECTS, CERTIFICATIONS, ACHIEVEMENTS } from "../data";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Printer, FileText, Send, Terminal, Download } from "lucide-react";

export default function ContactResume() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [messageStatus, setMessageStatus] = useState<string | null>(null);
  
  // Simulated form inputs
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    // Elegant approach: opens a clean print view
    window.print();
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    
    setMessageStatus("sending");
    setTimeout(() => {
      setMessageStatus("success");
      setFormName("");
      setFormEmail("");
      setFormMessage("");
      setTimeout(() => setMessageStatus(null), 3000);
    }, 1200);
  };

  return (
    <section id="resume" className="relative py-24 px-4 md:px-8 border-t border-slate-900/60 bg-slate-950/10">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/10 text-teal-400 font-mono text-[10px] tracking-wider uppercase mb-3"
          >
            <Mail size={12} />
            <span>Connection Portal</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4"
          >
            Get In Touch & Resume
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-sm max-w-lg mx-auto"
          >
            Have an exciting opportunity, internship, or full-stack project? Reach out directly or explore my official curriculum vitae below.
          </motion.p>
        </div>

        {/* Layout Grid: Left Info & Resume Download, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info, digital resume launcher */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white font-sans">Contact Credentials</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Feel free to copy my quick contact coordinates, explore my social grids, or trigger a complete printable CV using the dynamic resume launcher.
              </p>

              {/* Contact list with quick copies */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                
                {/* Primary email */}
                <div className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-all flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail size={16} className="text-teal-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, "email1")}
                    className="p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-900 border border-slate-900/60 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedText === "email1" ? <Check size={14} className="text-teal-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Secondary email */}
                <div className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-all flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail size={16} className="text-cyan-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.secondaryEmail}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.secondaryEmail, "email2")}
                    className="p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-900 border border-slate-900/60 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer shrink-0"
                    title="Copy Secondary Email"
                  >
                    {copiedText === "email2" ? <Check size={14} className="text-teal-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-all flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Phone size={16} className="text-indigo-400 shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                    className="p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-900 border border-slate-900/60 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedText === "phone" ? <Check size={14} className="text-teal-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-all flex items-center gap-3">
                  <MapPin size={16} className="text-teal-400 shrink-0" />
                  <span className="text-slate-400">{PERSONAL_INFO.location}</span>
                </div>

              </div>
            </div>

            {/* Resume Hub trigger card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/20 via-slate-900/40 to-indigo-950/20 border border-teal-500/10 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-950/40 border border-teal-500/20 text-teal-400">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">Curriculum Vitae</h4>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Fully Updated 2026 Resume</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                Clicking launcher launches a fully formatted, printable visual digital resume aligned to standard recruiter requirements.
              </p>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="w-full px-5 py-3.5 rounded-xl font-medium text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-lg shadow-teal-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer size={14} />
                <span>Open & Print Live Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek terminal-styled contact form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <form onSubmit={handleSendMessage} className="p-6 md:p-8 rounded-2xl bg-slate-900/30 border border-slate-900 backdrop-blur-sm flex flex-col h-full gap-5">
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-2">
                <div className="flex items-center gap-1.5">
                  <Terminal size={14} className="text-teal-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">Connect_Shell.sh</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="E.g., Alexander"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 hover:border-slate-800 focus:border-teal-500/40 text-white text-xs font-mono transition-colors outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="alexander@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 hover:border-slate-800 focus:border-teal-500/40 text-white text-xs font-mono transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex-1 flex flex-col">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Message Payload</label>
                <textarea
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Hey Vishwa, I'd love to chat about a technical opportunity..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-900 hover:border-slate-800 focus:border-teal-500/40 text-white text-xs font-mono transition-colors outline-none flex-1 resize-none min-h-[140px]"
                />
              </div>

              <button
                type="submit"
                disabled={messageStatus === "sending"}
                className={`w-full px-5 py-3.5 rounded-xl font-medium text-xs text-white border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  messageStatus === "success" 
                    ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400" 
                    : "bg-slate-950 hover:bg-slate-900 border-slate-900 hover:border-slate-800 active:scale-[0.98]"
                }`}
              >
                {messageStatus === "sending" ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
                    <span>Deploying message payload...</span>
                  </>
                ) : messageStatus === "success" ? (
                  <>
                    <Check size={14} />
                    <span>Message payload deployed successfully!</span>
                  </>
                ) : (
                  <>
                    <Send size={14} className="text-teal-400" />
                    <span>Deploy Contact Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Dynamic Modal representing full paper CV layout for recruiters to view and easily PRINT */}
      <AnimatePresence>
        {resumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[90vh]"
            >
              
              {/* Modal Top Floating Bar */}
              <div className="p-4 md:p-6 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/60 backdrop-blur-sm rounded-t-3xl relative z-10">
                <div className="flex items-center gap-2">
                  <FileText className="text-teal-400" size={18} />
                  <div>
                    <h3 className="text-sm font-bold text-white font-sans">Interactive Resume Engine</h3>
                    <p className="text-[10px] font-mono text-slate-500">Press Print to generate standard 1-page resume PDF</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-teal-400 hover:text-teal-300 hover:bg-slate-900 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                    title="Print CV as PDF"
                  >
                    <Printer size={14} />
                    <span className="hidden sm:inline">Print / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setResumeModalOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer text-xs font-mono font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Printable Body Area */}
              <div className="overflow-y-auto p-6 md:p-10 flex-1 scrollbar-thin scrollbar-thumb-slate-800">
                
                {/* Paper CV representation with specific print classes */}
                <div id="printable-resume-cv" className="bg-white text-slate-900 p-8 md:p-12 rounded-xl shadow-inner max-w-3xl mx-auto font-sans leading-relaxed text-sm select-text">
                  
                  {/* CV Header */}
                  <div className="text-center border-b border-slate-200 pb-6 mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-1">{PERSONAL_INFO.name}</h1>
                    <p className="text-xs font-semibold text-slate-600 tracking-wider font-mono mb-3">
                      {PERSONAL_INFO.phone} &nbsp;|&nbsp; {PERSONAL_INFO.secondaryEmail} &nbsp;|&nbsp; {PERSONAL_INFO.location}
                    </p>
                    <div className="flex justify-center gap-4 text-xs font-mono text-indigo-700">
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        github.com/vishwajambu02
                      </a>
                      <span>•</span>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        linkedin.com/in/vishwa-jambu-7a007039b
                      </a>
                    </div>
                  </div>

                  {/* CV Summary */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                      Professional Profile
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                      {PERSONAL_INFO.about}
                    </p>
                  </div>

                  {/* CV Education */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                      Education
                    </h3>
                    <div className="space-y-4">
                      {EDUCATION.map((edu) => (
                        <div key={edu.degree} className="flex justify-between items-start text-xs">
                          <div>
                            <h4 className="font-bold text-slate-950">{edu.degree}</h4>
                            <p className="text-slate-600">{edu.institution}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-semibold text-slate-800 font-mono">{edu.period}</span>
                            <p className="text-slate-500 font-mono mt-0.5">{edu.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CV Skills */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                      Technical Skills
                    </h3>
                    <div className="space-y-2 text-xs">
                      {SKILL_CATEGORIES.map((cat) => (
                        <div key={cat.name} className="grid grid-cols-12 gap-1 py-0.5">
                          <span className="col-span-4 font-bold text-slate-800">{cat.name}:</span>
                          <span className="col-span-8 text-slate-700">{cat.skills.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CV Projects */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 mb-3">
                      Projects Portfolio
                    </h3>
                    <div className="space-y-5 text-xs">
                      {PROJECTS.map((project) => (
                        <div key={project.id} className="space-y-1.5">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-bold text-slate-950 text-sm">
                              {project.title} &mdash; <span className="text-slate-600 font-normal text-xs">{project.subtitle}</span>
                            </h4>
                            <span className="font-semibold text-slate-800 font-mono shrink-0">{project.year}</span>
                          </div>
                          <p className="text-slate-500 font-mono text-[10px] uppercase font-semibold">
                            Stack: {project.stack.join(", ")}
                          </p>
                          <ul className="list-disc list-inside space-y-1 pl-1 text-slate-700 text-justify">
                            {project.description.map((bullet, bIdx) => (
                              <li key={bIdx} className="leading-relaxed">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CV Certifications & Extra */}
                  <div className="grid grid-cols-2 gap-6 pt-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                        Certifications
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {CERTIFICATIONS.map((cert) => (
                          <li key={cert.title}>
                            <span className="font-bold text-slate-850">{cert.title}</span> &ndash; <span className="text-slate-500 text-[10px]">{cert.year}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                        Achievements
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {ACHIEVEMENTS.map((ach) => (
                          <li key={ach.title}>
                            <span className="font-bold text-slate-850">{ach.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
