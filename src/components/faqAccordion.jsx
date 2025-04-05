import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is a Septic Warranty?',
    answer: 'A septic warranty is a service agreement designed to shield homeowners from the expenses associated with unexpected repairs of their septic system. It covers breakdowns due to normal wear and tear, ensuring protection against high maintenance costs.'
  },
  {
    question: 'I Have Home Owners Insurance. Why Do I Need a Septic Warranty?',
    answer: 'Homeowner’s insurance typically does not cover septic system failures, which are more likely to occur over time due to wear and tear. A septic warranty fills this gap.'
  },
  {
    question: 'Does this include septic tank pumpouts?',
    answer: 'Yes, it covers septic tank pumpouts as part of the maintenance plan.'
  },
  {
    question: 'What is a Septic Warranty?',
    answer: 'A septic warranty is a service agreement designed to shield homeowners from the expenses associated with unexpected repairs of their septic system. It covers breakdowns due to normal wear and tear, ensuring protection against high maintenance costs.'
  },
  {
    question: 'I Have Home Owners Insurance. Why Do I Need a Septic Warranty?',
    answer: 'Homeowner’s insurance typically does not cover septic system failures, which are more likely to occur over time due to wear and tear. A septic warranty fills this gap.'
  },
  {
    question: 'Does this include septic tank pumpouts?',
    answer: 'Yes, it covers septic tank pumpouts as part of the maintenance plan.'
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-blue-50 flex justify-center p-4 pb-[80px]">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-2xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left flex items-center justify-between px-6 py-4 text-xl font-semibold ${activeIndex === index ? 'text-white' : 'bg-white text-blue-900'} transition duration-300`}
                style={activeIndex === index ? { backgroundColor: '#3A7AD3' } : {}}
                              >
                {item.question}
                {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-blue-100 text-blue-900 text-lg">
                  {item.answer}
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
