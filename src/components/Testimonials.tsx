import React, { useState } from 'react';
import { testimonials } from '../constants/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            What others have to say about working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="text-blue-600 dark:text-blue-400">
                    <Quote size={40} />
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg text-center mb-8 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex flex-col items-center">
                  {testimonial.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-medium dark:text-white">{testimonial.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{testimonial.position}</p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-8">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;