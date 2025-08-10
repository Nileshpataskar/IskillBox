import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="relative max-w-full mx-auto mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">Outcomes in their Own Words</h2>
      <div className="relative  overflow-hidden shadow-lg">
        <img
          src={current.image}
          alt="testimonial background"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6 px-32  text-white">
          <img src={current.logo} alt="logo" className="mb-4 h-12 object-contain" />
          <h3 className="text-lg font-bold">{current.name}</h3>
          <p className="text-sm text-gray-200 mb-3">{current.role}</p>
          <p className="text-sm leading-relaxed max-w-2xl">{current.body}</p>
        </div>
        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
