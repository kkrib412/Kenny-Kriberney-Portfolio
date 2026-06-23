import React, { useState, useEffect } from "react";
import { projects } from "../data";
import { Project } from "../types";
import { 
  Github, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Terminal, 
  Zap,
  Globe,
  Smartphone,
  Database,
  Play,
  Image as ImageIcon
} from "lucide-react";

interface MobileShowcaseProps {
  project: Project;
}

function MobileShowcase({ project }: MobileShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"video" | "screens">("video");
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0);

  const hasVideo = !!project.videoUrl;
  const hasScreens = !!project.screenshots && project.screenshots.length > 0;
  
  useEffect(() => {
    if (!hasVideo && hasScreens) {
      setActiveTab("screens");
    }
  }, [hasVideo, hasScreens]);

  const screenshots = project.screenshots || [];

  return (
    <div className="w-full max-w-[280px] mx-auto lg:max-w-[300px] shrink-0 mt-6 lg:mt-0 select-none">
      {/* Device frame container */}
      <div className="relative mx-auto border-[10px] border-zinc-800 bg-zinc-950 rounded-[38px] shadow-2xl overflow-hidden aspect-[9/18] w-full max-w-[260px] flex flex-col justify-between border-t-[14px] border-b-[14px]">
        
        {/* Device Notch / Island */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-full z-20 flex items-center justify-center pointer-events-none">
          <div className="w-2 h-2 bg-zinc-900 rounded-full mr-2" />
          <div className="w-10 h-1 bg-zinc-900 rounded-full" />
        </div>

        {/* Screen Content area */}
        <div className="relative w-full h-full bg-zinc-950 pt-6 flex flex-col justify-between p-3 overflow-hidden text-center">
          
          {/* Tab Selector inside device */}
          <div className="flex gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800/80 mb-2.5 z-10">
            {hasVideo && (
              <button
                onClick={() => setActiveTab("video")}
                className={`flex-1 font-mono text-[9px] uppercase py-1 rounded transition-all duration-150 flex items-center justify-center space-x-1 ${
                  activeTab === "video" 
                    ? "bg-brand-orange text-white font-bold" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Play className="w-2.5 h-2.5" />
                <span>Walkthrough</span>
              </button>
            )}
            {hasScreens && (
              <button
                onClick={() => setActiveTab("screens")}
                className={`flex-1 font-mono text-[9px] uppercase py-1 rounded transition-all duration-150 flex items-center justify-center space-x-1 ${
                  activeTab === "screens" 
                    ? "bg-brand-orange text-white font-bold" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <ImageIcon className="w-2.5 h-2.5" />
                <span>Screens</span>
              </button>
            )}
          </div>

          {/* Active Tab Screen Display */}
          <div className="flex-1 relative rounded-lg overflow-hidden bg-zinc-900 flex flex-col justify-between p-1">
            {activeTab === "video" && hasVideo ? (
              <div className="absolute inset-0 w-full h-full bg-zinc-900 flex flex-col justify-center">
                <iframe
                  src={project.videoUrl}
                  title={`${project.name} Video Playback`}
                  className="w-full h-full border-0 select-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : activeTab === "screens" && screenshots.length > 0 ? (
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 flex flex-col justify-between p-2.5" 
                style={{ backgroundImage: `url(${screenshots[currentScreenIdx]})` }}
              >
                <div className="bg-zinc-950/80 backdrop-blur-md self-end px-1.5 py-0.5 rounded text-[8px] text-zinc-400 font-mono">
                  {currentScreenIdx + 1} / {screenshots.length}
                </div>
                <div className="flex justify-between w-full mt-auto">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentScreenIdx((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
                    }}
                    className="p-1 rounded bg-zinc-950/80 hover:bg-black/90 text-white text-[10px] w-6 h-6 flex items-center justify-center font-bold hover:scale-105 active:scale-95 transition-transform"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentScreenIdx((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
                    }}
                    className="p-1 rounded bg-zinc-950/80 hover:bg-black/90 text-white text-[10px] w-6 h-6 flex items-center justify-center font-bold hover:scale-105 active:scale-95 transition-transform"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 flex flex-col items-center justify-center text-center space-y-2 select-none h-full bg-gradient-to-b from-zinc-900 to-zinc-950">
                <Smartphone className="w-8 h-8 text-brand-orange/60 animate-bounce" />
                <span className="font-mono text-[9px] text-zinc-400">NATIVE RUNTIME</span>
                <p className="text-[10px] text-zinc-500 font-sans leading-normal">
                  Video presentation walkthrough ready to embed in src/data.ts
                </p>
              </div>
            )}
          </div>
          
          {/* Hardware bezel bottom line indicator */}
          <div className="mt-2 text-center self-center w-12 h-1 bg-zinc-700/80 rounded-full" />
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getShortRepoUrl = (url: string) => {
    return url.replace("https://", "").replace("www.", "");
  };

  // Grouping projects as requested
  const saasWebProjects = projects.filter(p => p.isSaaSProduct || p.id === "embeddable-chatbot" || p.id === "supabase-saas-starter");
  const mobileProjects = projects.filter(p => p.isMobileApp);
  const coreToolsProjects = projects.filter(p => !p.isSaaSProduct && !p.isMobileApp && p.id !== "embeddable-chatbot" && p.id !== "supabase-saas-starter");

  const renderProjectCard = (project: Project) => {
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
              {project.isSaaSProduct ? "SaaS APPLICATION" : project.isMobileApp ? "NATIVE MOBILE" : "CORE UTILITY"}
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

            {/* Links Section with clickable Github URLs */}
            <div className="flex flex-wrap items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 font-mono text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors py-1 px-2.5 bg-emerald-500/5 hover:bg-emerald-500/15 border border-emerald-500/20 rounded"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>LIVE DEMO</span>
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 font-mono text-[11px] text-brand-orange hover:text-brand-orange-light transition-colors py-1 px-2.5 bg-dark-border/40 hover:bg-dark-border/80 border border-dark-border rounded max-w-[200px]"
                title={project.githubUrl}
                aria-label={`View ${project.name} on GitHub`}
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{getShortRepoUrl(project.githubUrl)}</span>
              </a>
            </div>
          </div>

          {/* Accordion Feature Sheet using simple CSS height transitions */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[1200px] opacity-100 font-sans" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="pt-4 mt-3 border-t border-dark-border/40 text-xs text-zinc-400 space-y-4">
              
              <div className={`flex flex-col ${project.isMobileApp ? "lg:flex-row lg:gap-8 justify-between items-start" : ""}`}>
                
                {/* Visual Description & Specification column */}
                <div className="flex-1 space-y-4">
                  {project.detailedDescription && (
                    <p className="border-l border-dark-muted pl-2.5 text-zinc-300 italic text-[13px] leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  )}
                  
                  {project.features && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center">
                        <Zap className="w-3 h-3 text-brand-orange mr-1" /> SYSTEM FUNCTIONAL SPECIFICATIONS
                      </h4>
                      <ul className="space-y-1.5 pl-1 text-[12px]">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mr-1.5 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.isMobileApp && (
                    <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-lg p-3.5 text-zinc-400 space-y-2.5 text-[11px] leading-relaxed">
                      <p className="font-bold text-white uppercase font-mono tracking-wider text-[10px] text-brand-orange flex items-center">
                        <Terminal className="w-3.5 h-3.5 mr-1" /> Mobile Demonstration Pipeline
                      </p>
                      <p>
                        Since native Kotlin/Android applications cannot compile into standard browser runtimes, the best industry practice to showcase mobile software is through **video walkthroughs and high-fidelity screen mockups**.
                      </p>
                      <p className="text-zinc-500">
                        To add your custom screencasts, add a <code>videoUrl</code> (e.g., streaming YouTube, Vimeo, or Loom embeds) or slide lists under the <code>screenshots</code> parameter inside <code>src/data.ts</code>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile Mockup showcase section on right for native apps */}
                {project.isMobileApp && (
                  <MobileShowcase project={project} />
                )}

              </div>
              
              <div className="pt-3 border-t border-dark-border/40 bg-dark-bg/60 p-2.5 rounded border border-dark-border font-mono text-[10px] text-zinc-500 flex items-center justify-between">
                <span>VERIFICATION_KEY: SHA256_STABLE</span>
                <span>COMPILED // APPROVED</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4">
            <div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center">
              <Terminal className="w-4 h-4 mr-1.5" /> COMPILED PRODUCTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              SaaS Shipments & Mobile Assemblies
            </h2>
            <p className="text-zinc-500 font-mono text-xs sm:text-sm max-w-xl">
              Strictly non-fictional projects. Built with production-grade integrations, authentic Stripe plans, and real native SDK implementations.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-right font-mono text-zinc-500 text-xs text-zinc-400">
            TOTAL_ENTRIES // 08_REPOS_LOADED
          </div>
        </div>

        {/* Grid Categories */}
        <div className="space-y-20">
          
          {/* SECTION 1: SAAS & WEB SOLUTIONS */}
          <div id="saas-web-sec" className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-dark-border/40 pb-3">
              <Globe className="w-4 h-4 text-brand-orange shrink-0" />
              <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase">
                01 // SaaS & Web Shipments
              </h3>
              <span className="text-[10px] text-zinc-500 font-mono">({saasWebProjects.length} Repos)</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saasWebProjects.map(renderProjectCard)}
            </div>
          </div>

          {/* SECTION 2: MOBILE APPLICATIONS */}
          <div id="mobile-apps-sec" className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-dark-border/40 pb-3">
              <Smartphone className="w-4 h-4 text-brand-orange shrink-0" />
              <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase">
                02 // Mobile Applications
              </h3>
              <span className="text-[10px] text-zinc-500 font-mono">({mobileProjects.length} Native Builds)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileProjects.map(renderProjectCard)}
            </div>
          </div>

          {/* SECTION 3: CORE UTILITIES & TOOLS */}
          <div id="core-utils-sec" className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-dark-border/40 pb-3">
              <Database className="w-4 h-4 text-brand-orange shrink-0" />
              <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase">
                03 // Data Engines & System Tools
              </h3>
              <span className="text-[10px] text-zinc-500 font-mono">({coreToolsProjects.length} Utilities)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreToolsProjects.map(renderProjectCard)}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
