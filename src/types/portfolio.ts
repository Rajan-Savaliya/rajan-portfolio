// Portfolio Data Types
// All interfaces for the portfolio data structure

export interface Social {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface HeroData {
  name: string;
  titles: string[];
  subtitle: string;
  location: string;
  availability: string;
  resumeLink: string;
  socials: Social;
}

export interface Strength {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  bio: string;
  initials: string;
  stats: {
    years: string;
    apps: string;
    storeApps: string;
    companies: string;
  };
  strengths: Strength[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
  techStack: string[];
  liveLinks?: string[];
}

export interface ProjectLinks {
  live?: string;
  playStore?: string;
  appStore?: string;
}

export interface Project {
  name: string;
  category: string[];
  platforms: string[];
  shortDescription: string;
  fullDescription?: string;
  role: string;
  highlights?: string[];
  techStack: string[];
  links?: ProjectLinks;
  featured: boolean;
}

export interface Certification {
  name: string;
  provider: string;
  link?: string;
}

export interface ContactData {
  heading: string;
  subtitle: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  formAction: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  contact: ContactData;
}
