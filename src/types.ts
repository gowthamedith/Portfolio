export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  role: string;
  duration: string;
  toolsUsed: string[];
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  process: { phase: string; description: string }[];
}

export interface Skill {
  name: string;
  category: 'Core Design' | 'Tools' | 'Specialties' | 'AI Tools';
  level: number; // 1 to 5 for graphical indicator
  description: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
}

export interface Achievement {
  stat: string;
  label: string;
  description: string;
}
