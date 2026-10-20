export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'game' | 'web' | 'extension' | 'tool';
  featured?: boolean;
  badge: string;
  stampText: string;
  tagline: string;
  description: string;
  loreOrDetails: string;
  features: string[];
  technologies: string[];
  role: string;
  status: string;
  projectUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  sketchType: 'king-game' | 'valorantdle' | 'extension' | 'enma-shop' | 'melody' | 'wikimods';
  color: {
    accent: string;
    bgBadge: string;
    textBadge: string;
    border: string;
  };
  rotationDeg: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface DeveloperProfile {
  name: string;
  alias: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  experienceYears: string;
  quote: string;
  socials: {
    name: string;
    label: string;
    url: string;
    icon: string;
  }[];
  education: {
    title: string;
    center: string;
    period: string;
  }[];
}

export interface EducationItem {
  id: string;
  title: string;
  degreeType: string;
  center: string;
  periodOrStatus: string;
  image: string;
  centerUrl: string;
  badge: string;
}
