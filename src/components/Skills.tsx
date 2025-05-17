import React, { useState } from 'react';
import { skills } from '../constants/data';
import { Code, Figma, Github, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter skills based on category
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;
  
  // Get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Figma':
        return <Figma size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Github':
        return <Github size={20} className="text-blue-600 dark:text-blue-400" />;
      case 'Globe':
        return <Globe size={20} className="text-blue-600 dark:text-blue-400" />;
      default:
        return <Code size={20} className="text-blue-600 dark:text-blue-400" />;
    }
  };

  // Render proficiency bars
  const renderProficiency = (level: number) => {
    return (
      <div className="flex space-x-1 mt-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className={`h-2 w-full rounded-full ${
              i <= level ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with on a regular basis.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeCategory === null 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeCategory === 'frontend' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeCategory === 'backend' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveCategory('design')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeCategory === 'design' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveCategory('tools')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeCategory === 'tools' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Tools
          </button>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-3">
                {getIconComponent(skill.icon)}
                <h3 className="ml-2 text-lg font-medium dark:text-white">{skill.name}</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {skill.proficiency === 5 ? 'Expert' : 
                 skill.proficiency === 4 ? 'Advanced' :
                 skill.proficiency === 3 ? 'Intermediate' :
                 skill.proficiency === 2 ? 'Basic' : 'Beginner'}
              </p>
              {renderProficiency(skill.proficiency)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;