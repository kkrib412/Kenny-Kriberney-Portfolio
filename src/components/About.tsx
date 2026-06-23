import React from "react";
import { Wrench, Terminal, Cpu, HardHat } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border dot-pattern relative">
      <div className="absolute right-10 bottom-10 w-[200px] h-[200px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Text block - Column layout */}
          <div className="md:col-span-7 space-y-6">
            <div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center">
              <Wrench className="w-4 h-4 mr-1.5" /> THE STORY
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              A Lifelong Passion for Tech & Full-Stack Systems
            </h2>
            
            <p className="text-zinc-400 font-sans leading-relaxed text-sm sm:text-base">
              I have always had a deep passion for technology and systems engineering. Instead of following a traditional classroom route, I developed my problem-solving instincts by diagnosing complex microprocessors on modern vehicles, analyzing real-time data logs, and tackling head-on system problems. Because in advanced diagnostics, a fault isn't just an abstract error—it halts operations. This background built my obsession with engineering things that operate with high uptime, precision, and reliable data flow.
            </p>
            
            <p className="text-zinc-400 font-sans leading-relaxed text-sm sm:text-base">
              When I transitioned fully to software engineering, I channeled that same technical obsession. I self-taught my stack — <strong className="text-zinc-200 font-semibold">Next.js 15, TypeScript, Supabase, and Stripe</strong> — during dedicated, focused coding sprints. I wanted to understand deeply how client states flow, how multi-tenant database schemas synchronize securely, and how LLM tokens translate into deterministic business value.
            </p>
            
            <p className="text-zinc-400 font-sans leading-relaxed text-sm sm:text-base">
              This hyper-bootstrapping phase led me to originate <strong className="text-brand-orange font-medium">The AI Forge</strong>, where I serve local businesses around Pittsburgh by automating their sites and chatbots. Now, I are seeking a dedicated role as an <strong className="text-zinc-200">AI Application Developer</strong> or <strong className="text-zinc-200">Frontend Developer</strong> to collaborate with senior codebases and write production system logic.
            </p>
          </div>

          {/* Telemetry/Stat Box Callouts */}
          <div className="md:col-span-5 space-y-6">
            <div className="border border-dark-border bg-dark-card/40 p-6 rounded-md relative overflow-hidden backdrop-blur-sm">
              <div className="absolute -top-12 -right-12 text-zinc-800/10 font-mono text-9xl font-bold select-none pointer-events-none">
                AI
              </div>
              
              <div className="font-mono text-zinc-500 text-xs mb-6 uppercase tracking-widest border-b border-dark-border pb-2 flex items-center justify-between">
                <span>SYSTEM PERFORMANCE LOG</span>
                <span className="text-brand-orange font-semibold">ONLINE</span>
              </div>

              {/* Stats Grid */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-brand-orange tracking-widest">LAUNCH INDEX</div>
                  <div className="text-3xl font-sans font-bold text-white mt-1">2 Live SaaS Modules</div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">Site Auditor + Chat Builder bootstrapped with Stripe</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-brand-orange tracking-widest">PRODUCT CAPACITY</div>
                  <div className="text-3xl font-sans font-bold text-white mt-1">Solo Founder</div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">Managed everything: auth, DB schemas, Stripe webhooks</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-brand-orange tracking-widest">BOOTSTRAP EFFORT</div>
                  <div className="text-3xl font-sans font-bold text-white mt-1">80+ Hours/Wk Jet</div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">Intense, structure-driven self-teaching architecture</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-dark-border flex items-center justify-between font-mono text-[10px] text-dark-muted">
                <span>CORE_ENGINE_v4.1</span>
                <span>METRICS_APPROVED // OK</span>
              </div>
            </div>
            
            {/* Quick quote block with industrial design */}
            <div className="border-l-2 border-brand-orange pl-4">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">CORE DESIGN BELIEF</p>
              <p className="text-sm italic text-zinc-300 mt-1">
                "Whether it's a microprocessor data pipeline, a system diagnostic map, or a Next.js server route—a system is just a set of deterministic steps. Solve for efficiency first, then optimize the polish."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
