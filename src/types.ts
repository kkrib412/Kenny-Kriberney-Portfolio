export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  githubUrl: string;
  isSaaSProduct?: boolean;
  isMobileApp?: boolean;
  liveUrl?: string;
  videoUrl?: string;
  screenshots?: string[];
  metrics?: string;
  features?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string; // Lucide icon identifier
}

export interface TimelineEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  impact?: string;
  skillsActive?: string[];
}
