export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
}