import React from 'react';
import { Github, Linkedin, Mail, Twitter, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Tagline */}
          <div>
            <a href="#" className="text-2xl font-bold flex items-center">
              Portfolio<span className="text-blue-500">.</span>
            </a>
            <p className="mt-4 text-gray-400">
              Creating exceptional Web & Mobile experiences through clean code and user-centered design.
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={18} className="text-gray-400 mt-1 mr-2" />
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  gaurav555mittal@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mt-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <span className="text-gray-400">80790-61623</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mt-1 mr-2" />
                <span className="text-gray-400">Jaipur, Rajasthan (302020)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Gourav Mittal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;