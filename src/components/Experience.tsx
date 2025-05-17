import React from 'react';
import { experiences } from '../constants/data';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`flex flex-col md:flex-row gap-6 ${index !== experiences.length - 1 ? 'mb-16' : ''}`}
            >
              {/* Timeline Icon */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 bg-gray-300 dark:bg-gray-600 h-full mt-4"></div>
                )}
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex-1">
                <div className="md:flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{exp.position}</h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-300 mt-2 md:mt-0">{exp.duration}</div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      {item}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;