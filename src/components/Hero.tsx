import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal, 
  ArrowDownRight, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Settings, 
  Power, 
  Sparkles, 
  Play, 
  Check, 
  ChevronRight, 
  RefreshCw 
} from "lucide-react";

interface HeroProps {
  setActiveTab?: (tab: "story" | "projects" | "capabilities" | "contact") => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const titles = [
    "AI Application Developer",
    "Founder @ The AI Forge",
    "Full-Stack Builder"
  ];
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Diagnostic Terminal States
  const [activeConsoleTab, setActiveConsoleTab] = useState<"system" | "homelab" | "interactive">("system");
  const [cpuUsage, setCpuUsage] = useState(42);
  const [memUsage, setMemUsage] = useState(68);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "SYS_INIT: Boot sequence completed successfully.",
    "NETWORK_LINK: Secure connection to OpenRouter.ai established.",
    "DAEMON_CHECK: NextJS live listener online [Port 3000].",
    "AGENT_HEURISTIC: Hermes orchestrator standing by..."
  ]);
  const [commandInput, setCommandInput] = useState("");
  const [completedCommandStep, setCompletedCommandStep] = useState<string | null>(null);
  const [isSimulatingBuild, setIsSimulatingBuild] = useState(false);

  // Typewriter Loop
  useEffect(() => {
    const fullText = titles[currentIdx];
    let speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIdx((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIdx]);

  // Periodic Telemetry Fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = Math.floor(Math.random() * 15) - 7;
        const next = prev + delta;
        return Math.min(Math.max(next, 28), 76);
      });
      setMemUsage((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return Math.min(Math.max(next, 62), 72);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // CTA Click handlers with tab-redirection integration
  const handleViewWorkClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab("projects");
    }
    setTimeout(() => {
      const deck = document.getElementById("console-deck");
      if (deck) {
        deck.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (setActiveTab) {
      setActiveTab("contact");
    }
    setTimeout(() => {
      const deck = document.getElementById("console-deck");
      if (deck) {
        deck.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  // Run Custom Mock Interactive Commands
  const handleRunCommand = (cmd: string) => {
    if (isSimulatingBuild) return;
    setIsSimulatingBuild(true);
    setCompletedCommandStep(cmd);

    let nextLogs = [...terminalLogs];
    
    if (cmd === "pulse_check") {
      nextLogs.push(`$ run pulse_check --verbose`);
      nextLogs.push(`>> SYSTEM RESPONSE: OK // LATENCY: 42ms // LOAD: ${cpuUsage}%`);
    } else if (cmd === "open_router_query") {
      nextLogs.push(`$ cat /etc/models/routing.json`);
      nextLogs.push(`>> ACTIVE MODEL: claude-3-5-sonnet // ROUTED VIA: OpenRouter`);
    } else if (cmd === "optimize_pipeline") {
      nextLogs.push(`$ python optimize_mem.py`);
      nextLogs.push(`>> COLLECTING STALE THREADS... DEFRAGMENTED 142MB.`);
    }

    if (nextLogs.length > 8) {
      nextLogs = nextLogs.slice(nextLogs.length - 8);
    }
    
    setTerminalLogs(nextLogs);
    
    setTimeout(() => {
      setIsSimulatingBuild(false);
      setCompletedCommandStep(null);
    }, 800);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center items-start pt-28 pb-16 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern overflow-hidden"
    >
      {/* Accent Background Ambient Glowing Orbs */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-brand-orange/10 rounded-full blur-[130px] pointer-events-none -mr-32" />
      <div className="absolute left-1/4 bottom-10 w-[200px] h-[200px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* LEFT COLUMN: Main Typography & Action Panel */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Streamlined Status Capsule */}
            <div className="flex items-center space-x-2 mb-6 font-mono text-[10px] sm:text-xs tracking-wider text-zinc-300 border border-dark-border bg-dark-bg/60 py-1.5 px-3.5 rounded-full shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
              <span className="text-zinc-600 font-sans">•</span>
              <span>PITTSBURGH, PA</span>
            </div>

            {/* Premium Category Deck Tag */}
            <div className="font-mono text-xs sm:text-sm text-brand-orange font-bold tracking-wider uppercase mb-1 flex items-center gap-1.5">
              <span className="w-4.5 h-[1px] bg-brand-orange" />
              FULL-STACK SYSTEMS BUILDER
            </div>

            {/* Main Display Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7.5xl font-sans font-extrabold tracking-tight text-white mb-4">
              Kenny Kriberney
            </h1>

            {/* Interactive Typewriter Terminal Row */}
            <div className="h-14 flex items-center mb-6 font-mono text-lg sm:text-2xl md:text-3xl text-zinc-300">
              <Terminal className="w-5.5 h-5.5 sm:w-7 sm:h-7 mr-3.5 text-brand-orange shrink-0" />
              <span className="border-r-2 border-brand-orange pr-1 font-semibold text-white drop-shadow-[0_0_15px_rgba(235,94,40,0.15)]">
                {currentText}
              </span>
            </div>

            {/* Refined Brand Sub-text */}
            <div className="max-w-xl mb-10">
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-sans">
                Self-taught developer and SaaS founder with a lifelong passion for technology, systems architecture, and high-precision troubleshooting. Today, I build custom Next.js web applications, integrated AI agent pipelines, and secure payment layers optimized for performance.
              </p>
            </div>

            {/* Call to Actions with Programmatic Tab-switching */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <button
                onClick={handleViewWorkClick}
                className="group flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange-light text-white font-mono text-xs uppercase tracking-wider px-6 py-4 rounded transition-all duration-200 shadow-md shadow-brand-orange/15 border border-transparent hover:border-brand-orange-light"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
              
              <button
                onClick={handleContactClick}
                className="group flex items-center justify-center space-x-2 border border-dark-border bg-dark-card/40 hover:bg-dark-border hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider px-6 py-4 rounded transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Tactile Diagnostic Console Dashboard */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full border border-dark-border bg-dark-bg rounded-lg shadow-2xl overflow-hidden relative group">
              
              {/* Decorative Scanlines */}
              <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.03] z-10" />

              {/* Console Window Header Chrome */}
              <div className="bg-dark-card px-4 py-2.5 border-b border-dark-border flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                  <Cpu className="w-3.5 h-3.5 text-brand-orange animate-spin-slow" />
                  <span>KRIBERNEY_CO_v3.2</span>
                </div>
              </div>

              {/* Internal Tab Menu Navigation */}
              <div className="flex border-b border-dark-border/60 bg-dark-card/40 font-mono text-[10px]">
                <button
                  onClick={() => setActiveConsoleTab("system")}
                  className={`flex-1 py-2 px-3 border-r border-dark-border text-center transition-colors ${
                    activeConsoleTab === "system"
                      ? "text-brand-orange bg-dark-bg border-b-2 border-b-brand-orange font-bold"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-dark-card"
                  }`}
                >
                  01_SYS_STAT
                </button>
                <button
                  onClick={() => setActiveConsoleTab("homelab")}
                  className={`flex-1 py-2 px-3 border-r border-dark-border text-center transition-colors ${
                    activeConsoleTab === "homelab"
                      ? "text-brand-orange bg-dark-bg border-b-2 border-b-brand-orange font-bold"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-dark-card"
                  }`}
                >
                  02_LAB_SPEC
                </button>
                <button
                  onClick={() => setActiveConsoleTab("interactive")}
                  className={`flex-1 py-2 px-3 text-center transition-colors ${
                    activeConsoleTab === "interactive"
                      ? "text-brand-orange bg-dark-bg border-b-2 border-b-brand-orange font-bold"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-dark-card"
                  }`}
                >
                  03_CMD_DECK
                </button>
              </div>

              {/* Interactive Screens Body */}
              <div className="p-4 bg-dark-bg/95 min-h-[220px] font-mono text-[11px] leading-relaxed select-text relative">
                
                {/* 1. SYSTEM TELEMETRY SCREEN */}
                {activeConsoleTab === "system" && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between font-bold border-b border-dark-border/40 pb-1.5 text-zinc-400">
                      <span>MONITORING_DAEMON</span>
                      <span className="text-emerald-500 flex items-center space-x-1">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span>LIVE</span>
                      </span>
                    </div>

                    {/* Progress Loader Gauges */}
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
                          <span>SYSTEM_MEM_LOAD</span>
                          <span className={`${memUsage > 70 ? "text-brand-orange" : "text-zinc-400"}`}>{memUsage}%</span>
                        </div>
                        <div className="w-full bg-dark-card h-1.5 rounded-full overflow-hidden border border-dark-border/60">
                          <div 
                            className="bg-brand-orange h-full rounded-full transition-all duration-1000 ease-out" 
                            style={{ width: `${memUsage}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
                          <span>CPU_PROCESS_LOAD</span>
                          <span className={`${cpuUsage > 60 ? "text-brand-orange" : "text-zinc-400"}`}>{cpuUsage}%</span>
                        </div>
                        <div className="w-full bg-dark-card h-1.5 rounded-full overflow-hidden border border-dark-border/60">
                          <div 
                            className="bg-zinc-400 h-full rounded-full transition-all duration-500" 
                            style={{ width: `${cpuUsage}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Simple Console Printout logs */}
                    <div className="space-y-1 pt-2">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                        <Settings className="w-3 h-3 text-brand-orange" /> ENVIRONMENT PROCESSES
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400 bg-dark-card/40 p-2 rounded border border-dark-border/40">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>next_dev:3000</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>hermes_agent</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>open_router</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                          <span className="text-zinc-600">stripe_webhook</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. LAB SPECIFICATIONS SCREEN */}
                {activeConsoleTab === "homelab" && (
                  <div className="space-y-3.5 animate-fade-in">
                    <div className="flex items-center justify-between font-bold border-b border-dark-border/40 pb-1.5 text-zinc-400">
                      <span>HARDWARE_CORES</span>
                      <span className="text-zinc-500">SPEC_v10.5</span>
                    </div>

                    <div className="space-y-2 text-zinc-400 text-[10.5px]">
                      <div className="flex justify-between border-b border-dark-border/20 pb-1">
                        <span className="text-zinc-500">HOMELAB HOST</span>
                        <span className="text-zinc-300 font-semibold">Ubuntu Linux LTS</span>
                      </div>
                      <div className="flex justify-between border-b border-dark-border/20 pb-1">
                        <span className="text-zinc-500">VIRTUAL HYPERVISOR</span>
                        <span className="text-zinc-300">Docker Virtualization</span>
                      </div>
                      <div className="flex justify-between border-b border-dark-border/20 pb-1">
                        <span className="text-zinc-500">PRIMARY FRAMEWORKS</span>
                        <span className="text-brand-orange font-semibold">Next.js 15 // TS</span>
                      </div>
                      <div className="flex justify-between border-b border-dark-border/20 pb-1">
                        <span className="text-zinc-500">ROUTER CLIENT</span>
                        <span className="text-zinc-300">OpenRouter API Routing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">DATABASE CORES</span>
                        <span className="text-zinc-300">Supabase PG // Firestore</span>
                      </div>
                    </div>

                    <div className="bg-dark-card/40 border border-dark-border/50 p-2 rounded text-[10px] text-zinc-500">
                      Self-hosted system infrastructure optimized for high-performance AI deployment and secure server-to-client operations.
                    </div>
                  </div>
                )}

                {/* 3. INTERACTIVE CALIBRATOR COMMAND DECK */}
                {activeConsoleTab === "interactive" && (
                  <div className="space-y-3 animate-fade-in flex flex-col justify-between h-full">
                    
                    {/* Log screen printout */}
                    <div className="space-y-1.5 bg-dark-bg border border-dark-border/80 rounded p-2 text-[10px] max-h-[145px] overflow-y-auto text-zinc-400">
                      {terminalLogs.map((log, idx) => (
                        <div key={idx} className="flex items-start select-text gap-1 text-[9.5px]">
                          <span className="text-brand-orange shrink-0">&gt;_</span>
                          <span className="break-all whitespace-pre-wrap">{log}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tactile buttons to trigger commands */}
                    <div className="space-y-2">
                      <div className="text-[9px] uppercase tracking-wider text-zinc-500">EXECUTE DIAGNOSTIC INTERCEPTS:</div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          onClick={() => handleRunCommand("pulse_check")}
                          disabled={isSimulatingBuild}
                          className={`flex items-center justify-center py-1 px-1.5 rounded border text-[9.5px] font-semibold tracking-wide font-mono transition-all uppercase ${
                            completedCommandStep === "pulse_check"
                              ? "bg-brand-orange/20 border-brand-orange text-brand-orange"
                              : "bg-dark-card border-dark-border text-zinc-400 hover:text-white hover:border-zinc-500"
                          }`}
                        >
                          {isSimulatingBuild && completedCommandStep === "pulse_check" ? (
                            <RefreshCw className="w-3 h-3 animate-spin mr-1" />
                          ) : (
                            <Activity className="w-3 h-3 mr-1 text-brand-orange" />
                          )}
                          <span>PULSE</span>
                        </button>

                        <button
                          onClick={() => handleRunCommand("open_router_query")}
                          disabled={isSimulatingBuild}
                          className={`flex items-center justify-center py-1 px-1.5 rounded border text-[9.5px] font-semibold tracking-wide font-mono transition-all uppercase ${
                            completedCommandStep === "open_router_query"
                              ? "bg-brand-orange/20 border-brand-orange text-brand-orange"
                              : "bg-dark-card border-dark-border text-zinc-400 hover:text-white hover:border-zinc-500"
                          }`}
                        >
                          {isSimulatingBuild && completedCommandStep === "open_router_query" ? (
                            <RefreshCw className="w-3 h-3 animate-spin mr-1" />
                          ) : (
                            <Cpu className="w-3 h-3 mr-1 text-emerald-500" />
                          )}
                          <span>MODELS</span>
                        </button>

                        <button
                          onClick={() => handleRunCommand("optimize_pipeline")}
                          disabled={isSimulatingBuild}
                          className={`flex items-center justify-center py-1 px-1.5 rounded border text-[9.5px] font-semibold tracking-wide font-mono transition-all uppercase ${
                            completedCommandStep === "optimize_pipeline"
                              ? "bg-brand-orange/20 border-brand-orange text-brand-orange"
                              : "bg-dark-card border-dark-border text-zinc-400 hover:text-white hover:border-zinc-500"
                          }`}
                        >
                          {isSimulatingBuild && completedCommandStep === "optimize_pipeline" ? (
                            <RefreshCw className="w-3 h-3 animate-spin mr-1" />
                          ) : (
                            <Settings className="w-3 h-3 mr-1 text-zinc-400" />
                          )}
                          <span>MEM_OPT</span>
                        </button>
                      </div>
                    </div>

                  </div>
                )}
                
              </div>

              {/* Lower Deck Chrome telemetry */}
              <div className="bg-dark-card/60 px-4 py-2 border-t border-dark-border/40 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>STABLE_STATE</span>
                </span>
                <span>PACKETS_OUT_OK // v2.6.22</span>
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
