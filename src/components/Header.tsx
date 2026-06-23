import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, Hammer } from "lucide-react";

type TabType = "story" | "projects" | "capabilities" | "contact";

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "STORY", tab: "story" as TabType },
    { label: "PRODUCTS", tab: "projects" as TabType },
    { label: "SYSTEM STACK", tab: "capabilities" as TabType },
    { label: "EXPERIENCE", tab: "capabilities" as TabType },
    { label: "CONTACT", tab: "contact" as TabType }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: TabType) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveTab(tab);
    
    // Smooth scroll to the calibration console screen
    setTimeout(() => {
      const consoleElem = document.getElementById("console-deck");
      if (consoleElem) {
        consoleElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 40);
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-200 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-md py-3.5 border-dark-border"
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        
        {/* Branding Logo */}
        <a 
          href="#hero" 
          onClick={handleBrandClick}
          className="flex items-center space-x-2 font-mono text-sm tracking-widest text-white group focus:outline-none"
        >
          <Hammer className="w-5 h-5 text-brand-orange group-hover:rotate-12 transition-transform duration-200" />
          <span className="font-bold text-zinc-100 group-hover:text-brand-orange transition-colors">
            KR
          </span>
          <span className="text-dark-muted font-normal">//</span>
          <span className="text-zinc-400 font-medium tracking-wide">AI_FORGE</span>
        </a>

        {/* Desktop View Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.tab}`}
              onClick={(e) => handleLinkClick(e, link.tab)}
              className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                activeTab === link.tab
                  ? "text-brand-orange font-semibold"
                  : "text-zinc-400 hover:text-brand-orange"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          {/* Quick email anchor */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="font-mono text-xs text-white bg-dark-card border border-dark-border hover:border-brand-orange py-1.5 px-3.5 rounded transition-all duration-150"
          >
            SYS_INIT
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-zinc-400 hover:text-white hover:bg-dark-border/40 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-brand-orange"
          style={{ minWidth: "44px", minHeight: "44px" }}
          aria-label={mobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Slide-out Mobile overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-dark-bg/95 backdrop-blur-lg z-40 border-t border-dark-border animate-fade-in flex flex-col justify-between">
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.tab}`}
                onClick={(e) => handleLinkClick(e, link.tab)}
                className={`font-mono text-sm tracking-widest uppercase py-3 border-b border-dark-border/40 focus:outline-none ${
                  activeTab === link.tab ? "text-brand-orange font-semibold" : "text-zinc-300 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="p-6 border-t border-dark-border/60 bg-dark-bg/40 font-mono text-[10px] text-zinc-500 space-y-2">
            <div>GPS_COORD: PITTSBURGH_PA</div>
            <div>SYS_ONLINE // ENCRYPTED_GUEST_CHANNEL</div>
          </div>
        </div>
      )}
    </header>
  );
}
