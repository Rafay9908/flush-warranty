import React from 'react';
import underline from '../assets/underline_image.png';
import one from '../assets/icons-1.png';
import two from '../assets/icons-2.png';
import three from '../assets/image_3.png';
import four from '../assets/image_4.png';
import five from '../assets/image_5.png';
import six from '../assets/image_6.png';

const steps = [
  {
    number: '01',
    title: 'Initial Inspection and Pumping',
    description: 'We start by pumping and inspecting your septic system to gauge its current state. This crucial first step ensures we have a comprehensive understanding of your system’s condition.',
    icon: one,
  },
  {
    number: '02',
    title: 'Coverage Options',
    description: 'After inspecting your septic system, we provide detailed feedback on its status and outline the various coverage plans you qualify for, ensuring you are fully informed about your system’s health and protection options.',
    icon: two,
  },
  {
    number: '03',
    title: 'Scheduled Septic Tank Cleaning',
    description: 'When it’s time for your septic tank to be cleaned, we coordinate with you to schedule a convenient date. We then contract a reputable local company to perform the service, ensuring the job is done efficiently and effectively.',
    icon: three,
  },
  {
    number: '04',
    title: 'Routine Maintenance',
    description: 'Regular checks and maintenance help keep your septic system in optimal condition, avoiding costly repairs.',
    icon: four,
  },
  {
    number: '05',
    title: 'Emergency Services',
    description: 'In case of unexpected issues, our team is available to resolve problems promptly and professionally.',
    icon: five,
  },
  {
    number: '06',
    title: 'Documentation and Reports',
    description: 'We provide detailed reports of the inspection, maintenance, and cleaning processes, ensuring you have a complete record.',
    icon: six,
  }
];

const HowItWorks = () => {
  return (
    <div className="w-full bg-blue-50">
      <div id="how-it-works" className="py-16 px-4 md:px-20 lg:px-32 mx-auto max-w-[2000px]">
        <h2 className="text-4xl font-bold text-center mb-2">How it Works</h2>
        <div className="flex justify-center mb-6">
          <img src={underline} alt="underline" className="w-40" />
        </div>
        <div className="grid gap-6 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full text-center transform transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl text-blue-200 font-bold mb-4 text-start">{step.number}</div>
              <div className="flex justify-center mb-4">
                <div className="">
                  <span className={`icon-${step.icon}`}><img src={step.icon} alt="step icon"/></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
