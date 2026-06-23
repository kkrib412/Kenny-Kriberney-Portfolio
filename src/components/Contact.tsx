import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Copy, Check, Terminal, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "kennykriberney@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-8 bg-dark-bg relative overflow-hidden dot-pattern border-t border-dark-border">
      {/* Background glow resembling hot furnace steel */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[350px] h-[150px] sm:w-[600px] sm:h-[200px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto text-center z-10 relative">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center justify-center">
            <Terminal className="w-4 h-4 mr-1.5" /> ESTABLISH_LINK
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
            Let's Build Something Real
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
            Whether you are a hiring manager seeking an AI Application / Frontend Developer who knows how to ship, or a Pittsburgh-local business looking to harness custom LLM integrations, chatbot utilities, and automated funnels—let's discuss terms.
          </p>

          {/* Email Interface block mimicking diagnostic board */}
          <div className="bg-dark-card/40 border border-dark-border rounded-md p-6 max-w-2xl mx-auto mt-8 relative">
            <div className="absolute top-2 left-3 font-mono text-[9px] text-dark-muted">
              SYS_CHANNEL_01 // SECURE
            </div>
            
            <div className="text-left mb-3 mt-1 pl-1">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                DIRECT CONTACT
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-dark-bg/80 border border-dark-border rounded p-4">
              <a 
                href={`mailto:${emailAddress}`}
                className="font-mono text-sm sm:text-lg text-white hover:text-brand-orange transition-colors duration-150 flex items-center space-x-2 break-all focus:outline-none focus:ring-1 focus:ring-brand-orange px-2 py-1 rounded"
              >
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>{emailAddress}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 shrink-0" />
              </a>

              {/* Copy Utility Button */}
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto font-mono text-xs text-zinc-400 hover:text-white hover:bg-dark-border bg-dark-card border border-dark-border px-3 py-2 rounded shrink-0 flex items-center justify-center space-x-1.5 transition-all focus:outline-none"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>COPIED OK</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Secondary links */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 font-mono text-xs">
            <div className="flex items-center space-x-1.5 text-zinc-400">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Pittsburgh, PA Area</span>
            </div>

            <span className="text-zinc-600">|</span>

            <a 
              href="https://github.com/kkrib412"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-zinc-400 hover:text-brand-orange transition-colors py-1 px-2.5 hover:bg-dark-card rounded border border-transparent hover:border-dark-border"
            >
              <Github className="w-4 h-4" />
              <span>github.com/kkrib412</span>
              <ExternalLink className="w-3 h-3 text-zinc-600" />
            </a>

            <span className="text-zinc-600">|</span>

            <a 
              href="https://www.linkedin.com/in/kenny-kriberney412"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-zinc-400 hover:text-brand-orange transition-colors py-1 px-2.5 hover:bg-dark-card rounded border border-transparent hover:border-dark-border"
            >
              <Linkedin className="w-4 h-4 text-brand-orange" />
              <span>linkedin // kenny-kriberney412</span>
              <ExternalLink className="w-3 h-3 text-zinc-600" />
            </a>
          </div>
        </div>

        {/* Console Footers */}
        <div className="mt-20 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-dark-muted gap-4">
          <div>© {new Date().getFullYear()} KENNY KRIBERNEY. ALL RIGHTS RESERVED.</div>
          <div>CRAFTED WITH INTENSITY IN PITTSBURGH // POWERED BY THE AI FORGE</div>
        </div>
      </div>
    </section>
  );
}
