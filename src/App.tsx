import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header theme={theme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;