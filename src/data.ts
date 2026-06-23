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
    githubUrl: "https://github.com/kkrib412/ai-forge-saas"
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
    githubUrl: "https://github.com/kkrib412/embeddable-chatbot"
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
    githubUrl: "https://github.com/kkrib412/supabase-saas-starter"
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
  },
  {
    id: "oral-history-concept",
    name: "Android Oral History App Concept",
    description: "A Kotlin + Jetpack Compose prototype preserving elderly oral histories using native audio and AI transcripts.",
    detailedDescription: "A mobile-first system designed to bridge generations. Concepted and architecturalized to record continuous conversational voice, chunk audio payloads efficiently, and transcribe them using the Claude API to form coherent, categorized timeline chapters of ancestral memories.",
    tags: ["Kotlin", "Jetpack Compose", "Android SDK", "Claude API", "Audio Recording"],
    metrics: "Architecture Concept & Build Prompt Ready",
    features: [
      "Chunked Upload Routing: Technical workflow explaining real-time API streaming of heavy PCM voice streams.",
      "Semantic Structuring: Engine configuration parsing transcribed paragraphs into dynamic family tree chronologies.",
      "Adaptive Offline Sync: Local SQLite schema layout allowing users to record interviews offline in low-connectivity zones."
    ],
    githubUrl: "https://github.com/kkrib412/oral-history-app"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & APIs",
    skills: ["Anthropic Claude SDK", "OpenRouter", "Tradier Market API", "Resend API", "Prompt Engineering", "Semantic Chunking", "Structured Outputs"],
    icon: "Cpu"
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
