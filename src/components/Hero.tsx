import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Simple typing effect
    const text = "I build exceptional web & mobile experiences.";
    let i = 0;
    const typing = setInterval(() => {
      if (textRef.current && i <= text.length) {
        textRef.current.innerText = text.substring(0, i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <p className="text-blue-600 mb-4 md:text-lg font-medium">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Gourav Mittal</span>
          </h1>
          <h2 
            ref={textRef} 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 min-h-[40px] md:min-h-[50px] lg:min-h-[60px] ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          ></h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a passionate fullstack developer specializing in building exceptional, high-quality websites and applications. Currently, I'm focused on creating accessible, human-centered products.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className={`px-6 py-3 rounded-md font-medium w-full sm:w-auto text-center border-2 ${
                theme === 'dark' 
                  ? 'border-gray-700 hover:border-gray-600 text-gray-300' 
                  : 'border-gray-300 hover:border-gray-400 text-gray-700'
              } transition-colors duration-300`}
            >
              View My Work
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;