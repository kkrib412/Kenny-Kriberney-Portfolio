import { Project, SkillGroup, TimelineEntry } from "./types";

export const projects: Project[] = [
  {
    id: "ai-forge-saas",
    name: "AI Forge SaaS Platform",
    description: "Full production suite featuring Site Auditor ($49/mo) and Chat Builder ($79/mo) with Stripe, 7-day trials, customer portal, and embeddable widget script.",
    detailedDescription: "A commercial-grade multi-tenant SaaS platform built to help local businesses automate customer acquisition and SEO. Includes fully integrated Stripe billing with trial logic, robust Supabase authentication, a complete admin override command board, client onboarding widgets, and deep-analysis reporting dashboards. The core product processes site performance while serving customizable generative widgets.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Stripe", "Resend", "Anthropic Claude SDK"],
    isSaaSProduct: true,
    metrics: "Launched Solo · Dual-tier Paid Plans",
    features: [
      "Site Auditor: AI scanning crawls client sites for missing metadata and conversions, auto-generating punch lists.",
      "Chat Builder: Multi-purpose, context-aware digital receptionist widget customizable per client business domain.",
      "Stripe Integration: Secure subscription webhook handler with trials, grace periods, and customer self-serve billing.",
      "Supabase Row-Level Security: Bulletproof data multi-tenancy separating private analytics between clients."
    ],
    githubUrl: "https://github.com/kkrib412/ai-forge-saas",
    liveUrl: "https://theaiforge.com"
  },
  {
    id: "embeddable-chatbot",
    name: "Embeddable Chatbot Widget",
    description: "Highly performant client widget that can be embedded on any business website via a single unified script tag.",
    detailedDescription: "A secure, lightning-fast static iframe overlay code that lets third parties display a fully-branded AI chatbot on their custom pages. Powered directly by highly context-engineered Claude system instructions, supporting system fallbacks, local storage persistence of thread history, and lead-generation capturing forms that feed straight to database webhooks.",
    tags: ["TypeScript", "Anthropic SDK", "OpenRouter", "PostgreSQL", "Tailwind CSS"],
    metrics: "2.1k Bundle Size · <120ms Latency",
    features: [
      "Zero-dependency: Handcrafted pure TypeScript loader script designed to run sandboxed and avoid polluting host JS scope.",
      "Real-time Lead Capture: Persists contact info directly to lead table with instant notification alerts.",
      "Automatic Context Priming: Inject custom prompt rules before user starts a chat, tailored per client profile ID."
    ],
    githubUrl: "https://github.com/kkrib412/embeddable-chatbot",
    liveUrl: "https://theaiforge.com/chatbot-widget"
  },
  {
    id: "supabase-saas-starter",
    name: "Supabase SaaS Starter",
    description: "An open-source scaffolding ecosystem featuring gorgeous shimmering visual states and mobile-optimized navigation.",
    detailedDescription: "A production-ready boiler repository engineered for modern SaaS builders. Featuring pre-configured Next.js 15 routing, polished shadcn-style component configurations, and seamless database structures. Designed to significantly reduce bootstrapping time and establish strong engineering standards of modern SPA workflows.",
    tags: ["Next.js 15", "TypeScript", "Supabase DB", "Tailwind CSS", "Motion"],
    metrics: "Open-Source Scaffolding Engine",
    features: [
      "Responsive Layout: Mobile-first responsive header shell with active bottom nav tab bars for native device experiences.",
      "Aurora Glow Engine: Subtle hardware-accelerated animated orbs and shimmering headers rendering at steady 60 FPS.",
      "Database Seeding scripts: CLI workflows to auto-build secure tenant patterns, user profiles, and subscription plans."
    ],
    githubUrl: "https://github.com/kkrib412/supabase-saas-starter",
    liveUrl: "https://github.com/kkrib412/supabase-saas-starter"
  },
  {
    id: "riffmind-ai",
    name: "RiffMind AI",
    description: "AI-powered jam partner that analyzes live guitar riffs and generates real-time backing tracks.",
    detailedDescription: "A cutting-edge native Android music application created to serve as an interactive jam companion. It continuously listens to microphone inputs, detects key signatures, BPM, and complex chord riffs in real-time, and leverages the Google Lyria API and generative synthesizers to stream harmonious, full-instrument backing tracks on the fly.",
    tags: ["Kotlin", "Jetpack Compose", "Google Lyria API", "Android AudioRecord", "TensorFlow Lite"],
    isMobileApp: true,
    metrics: "Production Native Android App",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video or Loom walkthrough URL!
    screenshots: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=400&q=80", // Guitar live session
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"  // Audio waves
    ],
    features: [
      "Real-time Riff Analysis: Low-latency FFT chord recognition and transient detection using custom TensorFlow Lite models on-device.",
      "Google Lyria Integration: Dynamic prompt-based musical seed generation, blending synthetic guitars and live drums into rich audio segments.",
      "Jetpack Compose Canvas: Fully hardware-accelerated audio wave visualizer and responsive radial dials designed for live stage setups.",
      "Offline Mode Capability: Generates basic MIDI-backed drum loops even under zero-network conditions."
    ],
    githubUrl: "https://github.com/kkrib412/riffmind-ai",
    liveUrl: "https://github.com/kkrib412/riffmind-ai/releases/tag/v1.0.0-apk"
  },
  {
    id: "echo-mobile",
    name: "ECHO",
    description: "Digital living room for your family's greatest hits.",
    detailedDescription: "A private family archiving application designed to capture, organize, and celebrate precious multi-generational milestones. ECHO provides private, end-to-end encrypted voice message boards, synchronous real-time audio playback, and generative memories scrapbooks using native Kotlin and elegant Compose design patterns.",
    tags: ["Kotlin", "Jetpack Compose", "WebSockets", "Room DB", "AWS S3", "E2E Encryption"],
    isMobileApp: true,
    metrics: "Closed Beta · Play Store & TestFlight",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with family app beta walkthrough
    screenshots: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80", // Audio board
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80"  // Family timeline
    ],
    features: [
      "End-to-End Cryptography: Secure SQLite (SQLCipher) and payload encryption ensuring family conversations remain completely private.",
      "Synchronous Playback: Real-time family living room radio feature allowing synchronized voice message listening across devices.",
      "Intelligent Chronology: Automatic context tagging that maps uploaded voice notes to corresponding historic events in a visual timeline."
    ],
    githubUrl: "https://github.com/kkrib412/echo-mobile",
    liveUrl: "https://testflight.apple.com/join/echo-mobile-beta"
  },
  {
    id: "oral-history-concept",
    name: "Android Oral History App Concept",
    description: "A Kotlin + Jetpack Compose prototype preserving elderly oral histories using native audio and AI transcripts.",
    detailedDescription: "A mobile-first system designed to bridge generations. Concepted and architecturalized to record continuous conversational voice, chunk audio payloads efficiently, and transcribe them using the Claude API to form coherent, categorized timeline chapters of ancestral memories.",
    tags: ["Kotlin", "Jetpack Compose", "Android SDK", "Claude API", "Audio Recording"],
    isMobileApp: true,
    metrics: "Architecture Concept & Build Prompt Ready",
    videoUrl: "", // Concept / text architectural diagram
    features: [
      "Chunked Upload Routing: Technical workflow explaining real-time API streaming of heavy PCM voice streams.",
      "Semantic Structuring: Engine configuration parsing transcribed paragraphs into dynamic family tree chronologies.",
      "Adaptive Offline Sync: Local SQLite schema layout allowing users to record interviews offline in low-connectivity zones."
    ],
    githubUrl: "https://github.com/kkrib412/oral-history-app",
    liveUrl: "https://github.com/kkrib412/oral-history-app"
  },
  {
    id: "options-flow-digest",
    name: "Options Flow Daily Digest",
    description: "Algorithmic Python tool tracking option activities, scoring volume surges and flagging hot conviction tickers.",
    detailedDescription: "An automated data intelligence terminal monitoring high-volume derivative options flows for institutional action. Pulls clean market activity from the Tradier API and flags anomalous 20-day average volume spike breakouts. Outputs automated daily briefs rating the top three relative trades based on custom scoring criteria.",
    tags: ["Python", "Tradier API", "Yahoo Finance", "Pandas", "Matplotlib"],
    metrics: "15-Ticker Active Guard Watchlist",
    features: [
      "Top Conviction Scoring: Custom multi-factor mathematical module judging contracts based on strike proximity and velocity.",
      "Volume Divergence Alerting: Automatic anomaly calculations evaluating standard deviations over immediate historic baselines.",
      "Markdown Digest Auto-Exporter: Builds clean, ready-to-publish market wrap-ups including generated visual chart trends."
    ],
    githubUrl: "https://github.com/kkrib412/options-flow-digest"
  },
  {
    id: "hermes-agent-library",
    name: "Hermes Agent Prompt Library",
    description: "Structured prompt library and monetization framework for business agents, seo audits, and client emails.",
    detailedDescription: "The internal database engine powering operations at The AI Forge. A production prompt catalog that structures dynamic system prompts. Features a cold outreach calculator and ROI analytics models that predict output performance before calling expensive foundation LLM endpoints.",
    tags: ["Anthropic Claude", "Prompt Engineering", "SEO Algorithms", "Automation Scripts"],
    metrics: "Internal Operations Tooling",
    features: [
      "Dynamic Variable Injection: Shell scripts that interpolate crawl records into structured site auditor prompts.",
      "Monetization Scoring: Multi-factor calculator designed to measure the efficiency of prompt templates against manual labor cost.",
      "Audit Engine Templates: Step-by-step systems designed to crawl structure, analyze keywords, and plan landing pages."
    ],
    githubUrl: "https://github.com/kkrib412/hermes-agent-library"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & APIs",
    skills: ["Anthropic Claude SDK", "OpenRouter", "Tradier Market API", "Resend API", "Prompt Engineering", "Semantic Chunking", "Structured Outputs"],
    icon: "Cpu"
  },
  {
    category: "Mobile Engineering",
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "Google Lyria API", "CoreAudio / AudioRecord", "SQLite & Room DB", "StateFlow & Coroutines"],
    icon: "Smartphone"
  },
  {
    category: "Frontend Stack",
    skills: ["Next.js 15 (App Router)", "TypeScript", "React 19", "Tailwind CSS v4", "Motion (Framer)", "Responsive UI Design", "State Management"],
    icon: "Layout"
  },
  {
    category: "Backend & Database",
    skills: ["Supabase", "PostgreSQL", "Stripe Billing Integrations", "Node.js", "Express API Routing", "Row-Level Security (RLS)"],
    icon: "Database"
  },
  {
    category: "Tools & Environment",
    skills: ["Python", "Bash / PowerShell Scripting", "Termux Terminal env", "Git / GitHub Versioning", "VS Code Studio", "Linux Environments"],
    icon: "Wrench"
  }
];

export const timeline: TimelineEntry[] = [
  {
    id: "timeline-1",
    period: "2023–Present",
    role: "Founder & AI Application Developer",
    company: "The AI Forge",
    location: "Pittsburgh, PA",
    description: "Built AI-powered SaaS products (Site Auditor + Chat Builder) and agentic automation pipelines. Integrated multi-LLM routing via OpenRouter, giving applications flexible access to best-in-class models while optimizing costs.",
    impact: "Designed custom automation workflows utilizing Hermes Agent pipelines for real-world business use cases with live Stripe subscriber logic.",
    skillsActive: ["Next.js 15", "TypeScript", "Supabase", "Stripe SDK", "Claude SDK", "OpenRouter"]
  },
  {
    id: "timeline-2",
    period: "2016–2022",
    role: "Linux Systems Administrator & AI Developer",
    company: "CACI International",
    location: "Pittsburgh, PA",
    description: "Administered Linux environments across critical infrastructure, managing uptime, monitoring performance, and automating administrative workflows using Bash scripting. Integrated AI/ML tooling to support data processing pipelines.",
    impact: "Enforced compliance and security. Bridged traditional systems administration with emerging web AI models pipelines.",
    skillsActive: ["Linux", "Bash Scripting", "Systems Security", "AI Pipelines", "System Monitoring"]
  },
  {
    id: "timeline-3",
    period: "5+ Years",
    role: "Automotive Diagnostic Technician",
    company: "Independent / Self-Employed",
    location: "Pittsburgh, PA",
    description: "Applied advanced diagnostic machinery and systematic fault-isolation across multi-system mechanical and micro-processor environments.",
    impact: "Superb diagnostic habits that translate directly into software debugging, root-cause code analysis, and system architecture mapping.",
    skillsActive: ["Diagnostic Tooling", "Root-Cause Analysis", "Data Logging", "Fault Isolation"]
  }
];
