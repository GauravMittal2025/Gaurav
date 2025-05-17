import { Project, Experience, Skill, Testimonial } from '../types';
import { Code, Figma, Github, Globe } from 'lucide-react';

// Sample projects - replace with your own
export const projects: Project[] = [
  {
    id: '1',
    title: '•	Goodvets',
    description: 'A fully responsive pets platform built with React and Node.js',
    // longDescription: 'This project is a complete e-commerce solution with user authentication, product management, shopping cart functionality, and payment processing integration. It features a responsive design that works seamlessly across all devices.',
    image: '/static/images/goodvets.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveLink: 'https://goodvets.com/',
    // githubLink: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Call Management System',
    description: 'Call center quality Mangement Platform build to grow and transform your business',
    // longDescription: 'A productivity application that helps teams organize tasks using a Kanban board. Features include task creation, assignment, due dates, labels, and real-time updates. The interface is intuitive and responsive.',
    image: '/static/images/neqquo.png',
    tags: ['React', 'TypeScript', 'PHP', 'Tailwind CSS'],
    liveLink: 'https://www.neqqo.com/',
    // githubLink: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'PlateRate',
    description: 'Try top-rated dishes Eat, Rate & Earn',
    // longDescription: 'A comprehensive financial dashboard that visualizes spending patterns, investment performance, and budget tracking. Includes interactive charts and data visualization to help users make informed financial decisions.',
    image: '/static/images/platerate.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://platerate.com/',
    // githubLink: 'https://github.com',
    featured: true,
  },
  {
    id: '4',
    title: 'GII',
    description: 'There is a portfolio of a germen institute having options like careers, blogs, about etc.',
    // longDescription: 'A weather application that provides current conditions and 7-day forecasts for any location. Features include location detection, interactive maps, and beautiful visualizations of weather data.',
    image: '/static/images/gii.png',
    tags: ['PHP', 'laravel', 'MySql'],
    liveLink: 'https://g-ii.eu/',
    featured: true,
  },
];

// Sample experience - replace with your own
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelance Software Developer',
    position: 'Fullstack Developer',
    duration: 'Aug 2024 - Present',
    description: [
      'Developed and maintained custom applications for clients across healthcare, education, and e-commerce domains.',
      'Delivered multiple successful deployments using Laravel, React.js, and Node.js.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Jest', 'Docker', 'PHP', 'Laravel'],
    // logo: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '2',
    company: 'Glowtouch India Pvt. Ltd.',
    position: 'Sr. Software Engineer',
    duration: 'Nov 2023 - July 2024',
    description: [
      'Developed responsive web applications using modern JavaScript frameworks',
      'Integrated CMS solutions and improved UI',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Built and optimized scalable web interfaces and backend services using React and Laravel.',
      'Participated in daily stand-ups and sprint planning meetings'
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'Webpack', 'Git', 'Docker'],
    // logo: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '3',
    company: 'Freelance Software Developer',
    position: 'Fullstack Developer',
    duration: 'June 2023 - Oct 2023',
    description: [
      'Delivered high-quality software solutions, including school management systems and health tracking apps.',
      'Delivered multiple successful deployments using Laravel, React.js, and Node.js.',
      'Worked closely with designers to ensure pixel-perfect implementation',
      'Assisted in troubleshooting and fixing bugs in existing projects'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Docker', 'Laravel'],
    // logo: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '4',
    company: 'MattsenKumar Pvt. Ltd.',
    position: 'Sr. Software Developer',
    duration: 'July 2022 - May 2023',
    description: [
      'Led development on call management system and scheduling tools with React and Redux.',
      'Worked closely with designers to ensure pixel-perfect implementation',
      'Assisted in troubleshooting and fixing bugs in existing projects'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Docker', 'Laravel'],
    // logo: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '5',
    company: 'Agias Engineering Pvt. Ltd.',
    position: 'Software Developer',
    duration: 'Dec 2019 - June 2022',
    description: [
      'Built large-scale ERP and interview scheduling applications using React.js and Node.js.',
      'Worked closely with designers to ensure pixel-perfect implementation',
      'Assisted in troubleshooting and fixing bugs in existing projects'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Docker', 'PHP', 'Laravel'],
    // logo: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '6',
    company: 'Dezire Pvt. Ltd.',
    position: 'Jr. Software Developer',
    duration: 'May 2017 - Nov 2019',
    description: [
      'Developed customer portals, e-commerce sites, and internal tools using PHP and Yii2 framework.',
      'Worked closely with designers to ensure pixel-perfect implementation',
      'Assisted in troubleshooting and fixing bugs in existing projects'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Docker', 'PHP', 'Laravel'],
    // logo: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

// Sample skills - replace with your own
export const skills: Skill[] = [
  { name: 'React', icon: 'Code', proficiency: 5, category: 'frontend' },
  { name: 'TypeScript', icon: 'Code', proficiency: 4, category: 'frontend' },
  { name: 'JavaScript', icon: 'Code', proficiency: 5, category: 'frontend' },
  { name: 'HTML/CSS', icon: 'Code', proficiency: 5, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Code', proficiency: 4, category: 'frontend' },
  { name: 'Node.js', icon: 'Code', proficiency: 4, category: 'backend' },
  { name: 'Express', icon: 'Code', proficiency: 3, category: 'backend' },
  { name: 'MongoDB', icon: 'Code', proficiency: 3, category: 'backend' },
  { name: 'SQL', icon: 'Code', proficiency: 3, category: 'backend' },
  { name: 'Git', icon: 'Github', proficiency: 4, category: 'tools' },
  { name: 'Figma', icon: 'Figma', proficiency: 3, category: 'design' },
  { name: 'Responsive Design', icon: 'Globe', proficiency: 5, category: 'design' },
];

// Sample testimonials - replace with your own
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amit Meena',
    position: 'Product Manager',
    company: 'GlowTouch Innovations Inc.',
    text: 'Working with this developer was a fantastic experience. Their technical skills, attention to detail, and ability to translate complex requirements into elegant solutions made our project a success. They consistently delivered high-quality work ahead of schedule.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Gourav Mittal',
    position: 'CTO',
    company: 'Digital Solutions Ltd.',
    text: 'An exceptional developer who brings both technical expertise and creative problem-solving to every project. They have a remarkable ability to understand business requirements and implement solutions that exceed expectations. I highly recommend their work.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    position: 'Design Director',
    company: 'WebCraft Studios',
    text: 'I\'ve had the pleasure of working with this developer on multiple projects, and their work is consistently outstanding. They have a keen eye for design details and are able to bring designs to life with precision and creativity. A true professional!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];