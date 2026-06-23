import React from "react";
import { timeline } from "../data";
import { TimelineEntry } from "../types";
import { Calendar, MapPin, Briefcase, Zap, History } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4">
            <div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center">
              <History className="w-4 h-4 mr-1.5" /> PERFORMANCE LOGS
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              Systematic Career Timeline
            </h2>
            <p className="text-zinc-500 font-sans text-sm max-w-xl">
              Tracing my path from high-precision electronic diagnostics and system structures directly into full-stack AI development.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-dark-muted">
            ENTRIES_VERIFIED // RETROSPECTIVE_v4
          </div>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l-2 border-dark-border pl-6 sm:pl-10 space-y-12 max-w-4xl mx-auto">
          {timeline.map((entry: TimelineEntry, idx: number) => {
            return (
              <div 
                key={entry.id} 
                className="relative group timeline-item"
              >
                {/* Glowing Dot Marker on Timeline Line */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0C0C0E]">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange/40 opacity-75 group-hover:bg-brand-orange/70"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>

                {/* Content Block */}
                <div className="border border-dark-border bg-dark-card/25 hover:bg-dark-card/55 p-6 rounded transition-colors duration-200">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 font-mono text-xs">
                    <div className="flex items-center space-x-1.5 bg-dark-border/40 text-zinc-300 py-1 px-2.5 rounded border border-dark-border">
                      <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{entry.period}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{entry.location}</span>
                    </div>
                  </div>

                  {/* Header Title / Org */}
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-white group-hover:text-brand-orange-light transition-colors duration-150">
                      {entry.role}
                    </h3>
                    <p className="text-sm font-mono text-brand-orange font-medium mt-0.5">
                      {entry.company}
                    </p>
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  {/* Dynamic Impact Statement Case */}
                  {entry.impact && (
                    <div className="bg-brand-orange/5 border-l-2 border-brand-orange p-3 rounded mb-4">
                      <div className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest flex items-center mb-1">
                        <Zap className="w-3 h-3 mr-1" /> VALUED OUTCOME
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 font-sans">
                        {entry.impact}
                      </p>
                    </div>
                  )}

                  {/* Technologies utilized during this beat */}
                  {entry.skillsActive && (
                    <div className="flex flex-wrap gap-1.5 items-center mt-3 pt-3 border-t border-dark-border/60">
                      <span className="font-mono text-[9px] text-dark-muted font-bold uppercase tracking-wider mr-1.5">
                        ACTIVE_SETS:
                      </span>
                      {entry.skillsActive.map((s) => (
                        <span 
                          key={s} 
                          className="font-mono text-[10px] text-zinc-500 bg-dark-bg px-2 py-0.5 rounded border border-dark-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
