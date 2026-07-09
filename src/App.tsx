import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Github, Linkedin, Mail } from "lucide-react";
import SplashIntro from "./components/SplashIntro";
import BackgroundEffects from "./components/BackgroundEffects";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationCertifications from "./components/EducationCertifications";
import ContactResume from "./components/ContactResume";
import AIChat from "./components/AIChat";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [isSplashDone, setIsSplashDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track page scroll to style header & highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Simple active section highlights
      const sections = ["hero", "skills", "projects", "education", "resume"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500/20 selection:text-teal-300">
      
      {/* Premium Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-950/20 z-50 overflow-hidden pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 origin-left transition-transform duration-100 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Front Flash Splash Screen Introduction */}
      <SplashIntro onComplete={() => setIsSplashDone(true)} />

      {/* Main Portfolio System */}
      {isSplashDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex flex-col"
        >
          {/* Dynamic Background Parallax & Glow Particles (Flying elements) */}
          <BackgroundEffects />

          {/* Sticky Glassmorphic Header Navigation */}
          <header 
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
              scrolled 
                ? "bg-slate-950/70 border-b border-slate-900/80 backdrop-blur-md py-4 shadow-lg shadow-black/20" 
                : "bg-transparent py-6"
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
              
              {/* VJ Monogram Branding */}
              <button 
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-2.5 font-sans font-bold text-xl tracking-tight group text-left cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-teal-500/10 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-black text-slate-950">VJ</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-none group-hover:text-teal-400 transition-colors">Vishwa Jambu</span>
                  <span className="text-[9px] font-mono text-slate-500 tracking-widest mt-0.5">PORTFOLIO</span>
                </div>
              </button>

          

</div>   {/* ← THIS WAS MISSING */}

</motion.div>
              {/* Desktop Direct Resume Modal Toggle inside Nav */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900/60 border border-slate-900 hover:border-teal-500/30 hover:bg-slate-900 text-slate-400 hover:text-teal-400 hover:scale-110 active:scale-95 transition-all shadow-md shadow-black/30 cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900/60 border border-slate-900 hover:border-indigo-500/30 hover:bg-slate-900 text-slate-400 hover:text-indigo-400 hover:scale-110 active:scale-95 transition-all shadow-md shadow-black/30 cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-slate-900 bg-slate-950/50 hover:bg-slate-900 text-slate-400 hover:text-white md:hidden transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

            </div>
          </header>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="fixed top-[73px] left-0 right-0 z-30 bg-slate-950/95 border-b border-slate-900 backdrop-blur-lg md:hidden overflow-hidden"
              >
                <div className="p-4 flex flex-col gap-2">
                  {[
                    { id: "hero", label: "Home" },
                    { id: "skills", label: "Skills" },
                    { id: "projects", label: "Projects" },
                    { id: "education", label: "Education" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full px-4 py-3 rounded-xl text-left text-xs font-mono tracking-wide transition-all ${
                        activeSection === item.id
                          ? "text-teal-400 bg-teal-950/20 border border-teal-500/10"
                          : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Content Layout Sections */}
          <main className="flex-1">
            <Hero onScrollToSection={scrollToSection} />
            <Skills />
            <Projects />
            <EducationCertifications />
            <ContactResume />
          </main>

          {/* Premium Tech Footer */}
          <footer className="border-t border-slate-900/80 bg-slate-950/80 backdrop-blur-md py-12 relative z-10">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-white font-sans">
                  <Terminal size={14} className="text-teal-400" />
                  <span>Vishwa Jambu H</span>
                </div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  &copy; 2026 • Designed & Built with Premium Motion
                </p>
              </div>

              {/* Social Grid */}
              <div className="flex items-center gap-4 text-slate-400">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:text-white transition-all cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:text-white transition-all cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:text-white transition-all cursor-pointer"
                  title="Direct Email"
                >
                  <Mail size={16} />
                </a>
              </div>

            </div>
          </footer>

          {/* Ask Vishwa AI Assistant Panel */}
          <AIChat />

        </motion.div>
      )}
    </div>
  );
}
