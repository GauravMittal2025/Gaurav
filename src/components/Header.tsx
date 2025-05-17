import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-bold flex items-center">
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Portfolio</span>
              <span className="text-blue-600">.</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-gray-900'
                    } text-sm font-medium transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} p-2`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-700 hover:text-gray-900'
                    } block py-2 text-base font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;