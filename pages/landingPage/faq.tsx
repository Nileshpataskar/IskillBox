import TitleH1 from '@/components/ui/TitleH1';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Who should consider partnering with iSkillBox?',
    answer:
      "Organizations looking to upskill teams, close performance gaps, adopt AI-driven L&D strategies, or scale training across geographies will benefit from our solutions—whether you're a startup or a Fortune 500.",
  },
  {
    question: 'What kind of training programs do you offer?',
    answer:
      'We offer a wide range of programs, from technical skills to leadership development, all tailored to your organization’s needs.',
  },
  {
    question: 'How does your Skill Gap Analysis work?',
    answer:
      'We use data-driven tools and assessments to identify skill gaps and create targeted learning pathways.',
  },
  {
    question: 'Do you provide a Learning Management System (LMS)?',
    answer:
      'Yes, our LMS is modern, scalable, and designed to deliver engaging learning experiences.',
  },
  {
    question: 'Can you build custom eLearning content for us?',
    answer:
      'Absolutely, we specialize in developing bespoke eLearning modules to fit your exact requirements.',
  },
  {
    question: 'What makes your assessments different?',
    answer:
      'Our assessments are interactive, adaptive, and provide actionable insights.',
  },
  {
    question: 'Do you offer AI-powered L&D solutions?',
    answer:
      'Yes, we leverage AI to personalize learning and enhance engagement.',
  },
  {
    question: 'How flexible are your delivery models?',
    answer:
      'We offer in-person, virtual, and blended learning formats to suit your needs.',
  },
  {
    question: 'Can you support high-scale or enterprise-level training rollouts?',
    answer:
      'Yes, we have the capability and infrastructure to deliver at scale across multiple geographies.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-50 min-h-screen py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <TitleH1
        title='iSkillBox FAQs'
      />
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center transition-colors duration-200 ${
                  openIndex === index ? 'bg-purple-50 border-l-4 border-purple-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base pr-4">{faq.question}</span>
                <span className="text-gray-500 text-xl sm:text-2xl leading-none cursor-pointer flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
