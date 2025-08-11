import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TitleH1 from '@/components/ui/TitleH1';

const testimonials = [
  {
    id: 1,
    logo: '/service/elearn.jpg',
    name: 'Ms. Rooghee Khan',
    role: 'Lead Learning & Organizational Development',
    body: 'Working with Innoserv was a real pleasure. It is always wonderful when a provider listens to our needs, develops the training module around those needs and fine tunes the training to ensure that it is fit for purpose. The trainer was extremely professional, knowledgeable and kept the participants engaged at all times. The participants enjoyed the training and have given outstanding feedback for the training programme.',
    image: '/service/elearn.jpg'
  },
  {
    id: 2,
    logo: '/service/elearn.jpg',
    name: 'John Doe',
    role: 'Head of HR',
    body: 'The experience was fantastic. The training approach was spot-on, highly engaging, and tailored to our unique challenges. We saw immediate improvement in team collaboration and leadership skills.',
    image: '/service/elearn.jpg'
  },
  {
    id: 3,
    logo: '/service/elearn.jpg',
    name: 'Jane Smith',
    role: 'Chief Operations Officer',
    body: 'Exceptional delivery and relevant content! The trainers demonstrated deep expertise and practical insight that directly addressed our operational needs.',
    image: '/service/elearn.jpg'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-full mx-auto mb-6 bg-blue-50 px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <TitleH1
        title="Outcomes in their Own Words"
        description="Every solution is built with intention, backed by intelligence, and aligned to your business goals."
        link={{ text: 'Learn more', href: '/about', newTab: false }}
      />
      <div className="relative overflow-hidden shadow-lg rounded-2xl">
        <img
          src={current.image}
          alt="testimonial background"
          className="w-full h-64 md:h-86  object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:px-32 text-white">
          <img src={current.logo} alt="logo" className="mb-3 sm:mb-4 h-8 sm:h-10 md:h-12 object-contain" />
          <h3 className="text-base sm:text-lg md:text-xl font-bold">{current.name}</h3>
          <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">{current.role}</p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">{current.body}</p>
        </div>
      </div>
      
      {/* Navigation buttons positioned outside the card */}
      <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        
        {/* Dots indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
