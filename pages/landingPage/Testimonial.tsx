import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import TitleH1 from '@/components/ui/TitleH1';

const testimonials = [
  {
    id: 1,
    name: 'Ms. Rooghee Khan',
    role: 'Lead Learning & Organizational Development',
    company: 'Fortune 500 Company',
    body: 'Working with Innoserv was a real pleasure. It is always wonderful when a provider listens to our needs, develops the training module around those needs and fine tunes the training to ensure that it is fit for purpose. The trainer was extremely professional, knowledgeable and kept the participants engaged at all times.',
    image: '/landing/testimonial.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Head of HR',
    company: 'Tech Innovation Corp',
    body: 'The experience was fantastic. The training approach was spot-on, highly engaging, and tailored to our unique challenges. We saw immediate improvement in team collaboration and leadership skills.',
    image: '/landing/testimonial.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'Chief Operations Officer',
    company: 'Global Solutions Ltd',
    body: 'Exceptional delivery and relevant content! The trainers demonstrated deep expertise and practical insight that directly addressed our operational needs.',
    image: '/landing/testimonial.jpg',
    rating: 5
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative max-w-full mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <TitleH1
          title="Outcomes in Their Own Words"
          description="Real stories from real people. Discover how our solutions have transformed organizations and empowered teams to achieve remarkable results."
          titleClassName="text-center"
          descriptionClassName="text-center max-w-3xl mx-auto"
        />
        
        <div className="mt-12 md:mt-16">
          <div className="relative max-w-6xl mx-auto">
            {/* Main testimonial card */}
            <div className="relative overflow-hidden shadow-2xl rounded-3xl bg-white border border-gray-100">
              {/* Background image with overlay */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                <img
                  src={current.image}
                  alt="testimonial background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 md:mb-8 max-w-4xl">
                    "{current.body}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white">{current.name}</h4>
                      <p className="text-blue-200 text-sm md:text-base">{current.role}</p>
                      <p className="text-blue-100 text-sm">{current.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center items-center gap-6 mt-8 md:mt-12">
              <button
                onClick={prevSlide}
                className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-200" />
              </button>
              
              {/* Enhanced dots indicator */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-6 md:mt-8">
              <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 md:h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
