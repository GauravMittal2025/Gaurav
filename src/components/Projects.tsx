import React, { useState } from 'react';
import { projects } from '../constants/data';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one is crafted with attention to detail and focus on user experience.
          </p>
        </div>
        
        {/* Filter Tags */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === null 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div> */}
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      Live Demo <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
                    >
                      Code <Github size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button (could be implemented with pagination) */}
        {/* <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300">
            Show More Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;