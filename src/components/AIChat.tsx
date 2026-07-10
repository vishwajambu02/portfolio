import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Bot, Send, MessageSquareCode, Terminal, AlertCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const QUICK_CHIPS = [
  "What are Vishwa's top technical skills?",
  "Tell me about NewsCore (the AI aggregator)",
  "What is the Swachh Spot platform?",
  "How can I contact Vishwa Jambu H?"
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello! I am Vishwa's AI Assistant. Feel free to ask me anything about Vishwa's credentials, engineering skills, projects, or education!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat window
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", text: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.text }]
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with server");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply || "I'm sorry, I couldn't process that response." }
      ]);
    } catch (err: any) {
      console.error(err);
      setError("Failed to get response from the AI. Please verify your internet connection or check the server status.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative group p-4 rounded-full bg-gradient-to-tr from-teal-500 via-cyan-500 to-indigo-600 hover:shadow-[0_0_25px_rgba(20,184,166,0.55)] transition-shadow duration-300 flex items-center justify-center cursor-pointer ${
            isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
          }`}
          aria-label="Open Ask Vishwa AI"
        >
          {/* Subtle background pulse wave */}
          <span className="absolute inset-0 rounded-full bg-teal-400/30 animate-ping -z-10" />
          <MessageSquareCode size={22} className="text-slate-950 stroke-[2.25]" />
          
          {/* Hover tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-wider text-teal-400 uppercase opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 shadow-md">
            Ask&nbsp;Vishwa&nbsp;AI
          </span>
        </motion.button>
      </div>

      {/* Floating AI Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] max-h-[80vh] rounded-2xl bg-slate-950/95 border border-slate-900 hover:border-teal-500/20 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Cyan Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500" />

            {/* Window Header */}
            <div className="p-4 border-b border-slate-900/80 bg-slate-950/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-950/30 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Bot size={16} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                    VJ Digital Clone
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </h3>
                  <p className="text-[9px] font-mono text-slate-500 tracking-wider uppercase">
                    Gemini 3.5 Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-transparent hover:border-slate-800 bg-slate-950/40 hover:bg-slate-900 text-slate-500 hover:text-white transition-all cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-900">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-teal-400 text-slate-950 font-medium rounded-tr-none shadow-md shadow-teal-500/5"
                        : "bg-slate-900/60 border border-slate-900/80 text-slate-200 rounded-tl-none font-sans"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-teal-400 uppercase tracking-widest mb-1 select-none">
                        <Terminal size={10} />
                        <span>Clone Response</span>
                      </div>
                    )}
                    <span className="whitespace-pre-line">{msg.text}</span>
                  </div>
                </div>
              ))}

              {/* Loader */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900/60 border border-slate-900/80 rounded-xl rounded-tl-none px-4 py-3 text-xs text-slate-400 max-w-[85%]">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-teal-400 uppercase tracking-widest mb-1.5">
                      <Terminal size={10} className="animate-spin" />
                      <span>Synthesizing answer...</span>
                    </div>
                    <div className="flex gap-1.5 py-1">
                      <span className="w-2 h-2 rounded-full bg-teal-400/80 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-cyan-400/80 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-indigo-400/80 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="p-3 rounded-xl bg-red-950/25 border border-red-900/30 text-red-400 text-xs flex gap-2.5 items-start">
                  <AlertCircle size={15} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips Section (Only shown if we have few messages or just started) */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 pt-1 border-t border-slate-900/20 bg-slate-950/40">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2 font-semibold">
                  Suggested Questions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_CHIPS.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip)}
                      className="px-2.5 py-1 text-[10px] text-slate-400 hover:text-teal-400 bg-slate-900/60 hover:bg-teal-950/30 border border-slate-900 hover:border-teal-500/20 rounded-lg transition-all text-left max-w-full truncate cursor-pointer active:scale-95"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Input Area */}
            <div className="p-3 border-t border-slate-900/80 bg-slate-950/80">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type or click a suggestion..."
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-900 hover:border-slate-800 focus:border-teal-500/40 focus:outline-none rounded-xl text-xs text-white placeholder-slate-500 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-gradient-to-tr from-teal-400 to-indigo-500 hover:brightness-110 text-slate-950 disabled:opacity-40 disabled:hover:brightness-100 transition-all flex items-center justify-center shrink-0 cursor-pointer active:scale-95"
                >
                  <Send size={14} className="stroke-[2.5]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
