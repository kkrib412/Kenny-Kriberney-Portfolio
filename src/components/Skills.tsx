import React from "react";
import { skillGroups } from "../data";
import { 
  Cpu, 
  Layout, 
  Database, 
  Wrench, 
  Shield, 
  Smartphone, 
  Code, 
  Paintbrush, 
  Activity, 
  CreditCard, 
  Mail, 
  Server, 
  Github, 
  Terminal, 
  Share2, 
  Layers
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: Cpu,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench,
  Smartphone: Smartphone
};

// Map specific key skills to beautiful inline indicator icons for visual variety
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "TypeScript": Code,
  "Next.js 15 (App Router)": Layers,
  "React 19": Layers,
  "Tailwind CSS v4": Paintbrush,
  "Motion (Framer)": Activity,
  "Anthropic Claude SDK": Cpu,
  "OpenRouter": Share2,
  "Resend API": Mail,
  "Stripe Billing Integrations": CreditCard,
  "Supabase": Database,
  "PostgreSQL": Server,
  "Git / GitHub Versioning": Github,
  "Linux Environments": Terminal,
  "Kotlin": Smartphone,
  "Jetpack Compose": Layout,
  "Google Lyria API": Cpu,
  "SQLite & Room DB": Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border dot-pattern relative">
      <div className="absolute left-1/4 top-1/3 w-[250px] h-[250px] bg-brand-orange/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center">
              <Cpu className="w-4 h-4 mr-1.5" /> SYSTEM STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              Grounded Tech Capabilities
            </h2>
            <p className="text-zinc-500 font-sans text-sm max-w-xl">
              From native mobile systems & hardware-level diagnostic logic, to responsive React frameworks, secure backends, and prompt engineering protocols.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 font-mono text-xs text-dark-muted flex items-center space-x-1.5">
            <Shield className="w-4 h-4 text-brand-orange" />
            <span>STANDARDS_CERTIFIED // AES256</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIdx) => {
            const IconComponent = iconMap[group.icon] || Cpu;
            
            return (
              <div
                key={groupIdx}
                className="border border-dark-border bg-dark-card/30 rounded p-6 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Panel identification coordinate */}
                <div className="absolute top-2 right-3 font-mono text-[9px] text-dark-muted">
                  PANEL_0{groupIdx + 1}
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 bg-dark-bg border border-dark-border rounded text-brand-orange">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Pills List */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, idx) => {
                      const SkillIcon = skillIconMap[skill];
                      return (
                        <span
                          key={idx}
                          className="font-mono text-xs text-zinc-300 bg-dark-bg/60 hover:text-white hover:bg-dark-border/40 border border-dark-border px-3 py-1.5 rounded transition-all duration-150 cursor-default select-none hover:border-brand-orange/40 flex items-center space-x-1.5"
                        >
                          {SkillIcon && <SkillIcon className="w-3.5 h-3.5 text-brand-orange/70 shrink-0" />}
                          <span>{skill}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Simulated testing parameters footer for high-quality industrial wireframe feel */}
                <div className="mt-8 pt-3 border-t border-dark-border/60 flex items-center justify-between font-mono text-[9px] text-dark-muted">
                  <span className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange inline-block mr-1.5 animate-pulse" />
                    VERIFIED_ACTIVE
                  </span>
                  <span>SYS_LATENCY: NOMINAL</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
