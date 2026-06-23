import React, { useState } from "react";
import { projects } from "../data";
import { Project } from "../types";
import { Github, ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Terminal, Info, Zap } from "lucide-react";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center">
              <Terminal className="w-4 h-4 mr-1.5" /> COMPILED PRODUCTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              SaaS Shipments & AI Assemblies
            </h2>
            <p className="text-zinc-500 font-mono text-xs sm:text-sm max-w-xl">
              Strictly non-fictional projects. Built with production-grade integrations, authentic Stripe trials, and real Anthropic context parameters.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-right font-mono text-zinc-500 text-xs text-zinc-400">
            TOTAL_ENTRIES // 06_REPOS_LOADED
          </div>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project, idx: number) => {
            const isExpanded = expandedId === project.id;
            
            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group border border-dark-border bg-dark-card/30 hover:bg-dark-card/60 rounded transition-colors duration-200 overflow-hidden relative border-l-4 border-l-brand-orange flex flex-col justify-between"
              >
                {/* Visual Glow Layer on card hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="p-6">
                  {/* Top Header stats */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-dark-muted mb-3">
                    <span className="text-brand-orange font-bold uppercase tracking-wider">
                      {project.isSaaSProduct ? "SaaS APPLICATION" : "CORE UTILITY"}
                    </span>
                    <span className="text-zinc-500 uppercase">
                      {project.metrics || "BUILD SUCCESS"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-brand-orange transition-colors duration-150 mb-2">
                    {project.name}
                  </h3>

                  {/* 1-sentence descriptor */}
                  <p className="text-zinc-400 text-sm font-sans mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-zinc-400 bg-dark-bg border border-dark-border px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom interactive action menu */}
                <div className="border-t border-dark-border/60 bg-dark-bg/20 p-4 shrink-0">
                  <div className="flex items-center justify-between">
                    {/* Expand Detail Accs */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center space-x-1.5 font-mono text-xs text-zinc-400 hover:text-brand-orange transition-colors focus:outline-none"
                    >
                      <span>{isExpanded ? "COLLAPSE AUDIT" : "INSPECT ARCHITECTURE"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 animate-pulse" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* GitHub link button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 font-mono text-xs text-brand-orange hover:text-brand-orange-light transition-colors py-1 px-2.5 bg-dark-border/40 hover:bg-dark-border/80 border border-dark-border rounded"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <span>RECON CODE</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Accordion Feature Sheet using simple CSS height transitions */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="pt-4 mt-3 border-t border-dark-border/40 text-xs text-zinc-400 space-y-4 leading-relaxed font-sans">
                      {project.detailedDescription && (
                        <p className="border-l border-dark-muted pl-2.5 text-zinc-300 italic text-[13px]">
                          {project.detailedDescription}
                        </p>
                      )}
                      
                      {project.features && (
                        <div className="space-y-2">
                          <h4 className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center">
                            <Zap className="w-3 h-3 text-brand-orange mr-1" /> SYSTEM FUNCTIONAL SPECIFICATIONS
                          </h4>
                          <ul className="space-y-1.5 pl-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-zinc-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mr-1.5 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="bg-dark-bg/60 p-2.5 rounded border border-dark-border font-mono text-[10px] text-zinc-500 flex items-center justify-between">
                        <span>VERIFICATION_KEY: SHA256_STABLE</span>
                        <span>COMPILED // APPROVED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
