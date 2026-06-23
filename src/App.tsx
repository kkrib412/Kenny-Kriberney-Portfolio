import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { Terminal, Cpu, Database, FolderGit2, History, Mail } from "lucide-react";

export type TabType = "story" | "projects" | "capabilities" | "contact";

export default function App() {
  const [activeTab, setActiveTab ] = useState<TabType>("projects"); // Default to projects for high immediate impact, or story

  return (
    <div className="min-h-screen bg-dark-bg text-zinc-300 font-sans selection:bg-brand-orange selection:text-white relative overflow-x-hidden">
      {/* Immersive UI Global Atmosphere Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Global Navigation - passes down active control hook */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero introductory banner is persistent at the top */}
      <main className="relative z-10">
        <Hero setActiveTab={setActiveTab} />

        {/* Navigation Deck Tab Switcher */}
        <section id="console-deck" className="w-full border-b border-dark-border py-4 bg-dark-card/20 backdrop-blur-sm sticky top-14 z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-center border border-dark-border bg-dark-bg p-1.5 rounded-lg">
              {/* Deck Navigation Buttons */}
              <div className="grid grid-cols-2 sm:flex items-center gap-1.5 w-full justify-center">
                <button
                  onClick={() => setActiveTab("story")}
                  className={`flex items-center justify-center space-x-2 font-mono text-xs px-5 py-2.5 rounded transition-all focus:outline-none ${
                    activeTab === "story"
                      ? "bg-[#eb5e28]/5 border border-[#eb5e28] text-brand-orange font-semibold shadow-inner"
                      : "border border-transparent text-zinc-400 hover:text-white hover:bg-dark-card"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "story" ? "bg-brand-orange" : "bg-zinc-600"}`} />
                  <span>STORY</span>
                </button>

                <button
                  onClick={() => setActiveTab("projects")}
                  className={`flex items-center justify-center space-x-2 font-mono text-xs px-5 py-2.5 rounded transition-all focus:outline-none ${
                    activeTab === "projects"
                      ? "bg-[#eb5e28]/5 border border-[#eb5e28] text-brand-orange font-semibold shadow-inner"
                      : "border border-transparent text-zinc-400 hover:text-white hover:bg-dark-card"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "projects" ? "bg-brand-orange" : "bg-zinc-600"}`} />
                  <span>PROJECTS</span>
                </button>

                <button
                  onClick={() => setActiveTab("capabilities")}
                  className={`flex items-center justify-center space-x-2 font-mono text-xs px-5 py-2.5 rounded transition-all focus:outline-none ${
                    activeTab === "capabilities"
                      ? "bg-[#eb5e28]/5 border border-[#eb5e28] text-brand-orange font-semibold shadow-inner"
                      : "border border-transparent text-zinc-400 hover:text-white hover:bg-dark-card"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "capabilities" ? "bg-brand-orange" : "bg-zinc-600"}`} />
                  <span>CAPABILITIES</span>
                </button>

                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex items-center justify-center space-x-2 font-mono text-xs px-5 py-2.5 rounded transition-all focus:outline-none ${
                    activeTab === "contact"
                      ? "bg-[#eb5e28]/5 border border-[#eb5e28] text-brand-orange font-semibold shadow-inner"
                      : "border border-transparent text-zinc-400 hover:text-white hover:bg-dark-card"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "contact" ? "bg-brand-orange" : "bg-zinc-600"}`} />
                  <span>CONTACT</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic content rendering depending on chosen Calibration tab */}
        <div className="relative min-h-[40vh] transition-all">
          {activeTab === "story" && (
            <div className="animate-fade-in">
              <About />
            </div>
          )}

          {activeTab === "projects" && (
            <div className="animate-fade-in">
              <Projects />
            </div>
          )}

          {activeTab === "capabilities" && (
            <div className="animate-fade-in">
              <Skills />
              <Timeline />
            </div>
          )}

          {activeTab === "contact" && (
            <div className="animate-fade-in">
              <Contact />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

