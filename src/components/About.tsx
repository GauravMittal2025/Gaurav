import React from 'react';
import { ArrowRight } from 'lucide-react';

// import Gourav_25 from '../../src/assets/files/Gourav_25.docx'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/static/images/Gaurav01.jpg" 
                alt="cover" 
                className="object-cover w-full h-svw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg hidden md:block"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Hi, I'm Gourav Mittal, nice to meet you!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate Fullstack Developer with 8+ years of experience in building exceptional Web & Mobile experiences. I focus on creating accessible, human-centered products that solve real problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My journey in web development started during college where I discovered my passion for creating beautiful, functional interfaces. Since then, I've worked with many reputated companies to deliver high-quality solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me reading books, science fiction, or adventuring with new places. I believe in continuous learning and staying up-to-date with the latest technologies.
            </p>

            <div className="flex flex-wrap gap-6">
              <div>
                <h4 className="text-lg font-bold mb-2 dark:text-white">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Jaipur</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 dark:text-white">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">gaurav555mittal@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 dark:text-white">Education</h4>
                <p className="text-gray-700 dark:text-gray-300">MCA (Masters of Computer Applications)</p>
              </div>
            </div>

            {/* <a 
              href={Gourav_25}
              download={"my_resume"}
              target='_blank' 
              className="inline-flex items-center text-blue-600 font-medium mt-8 hover:text-blue-700 transition-colors duration-300"
            >
              Download Resume <ArrowRight size={16} className="ml-2" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;