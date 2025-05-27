// components/CustomerTimeline.tsx

'use client';
import { useState } from 'react';

const steps = [
  'Nutritionists',
  'Integrators',
  'Feed Millers',
  'Farmers',
  'Food Processor',
];

const quotes = {
  Nutritionists: {
    quote: 'Quote for Nutritionists goes here.',
    source: 'Nutritionist, Country',
  },
  Integrators: {
    quote: 'Quote for Integrators goes here.',
    source: 'Integrator, Country',
  },
  'Feed Millers': {
    quote: 'Quote for Feed Millers goes here.',
    source: 'Feed Miller, Country',
  },
  Farmers: {
    quote: 'Quote for Farmers goes here.',
    source: 'Farmer, Country',
  },
  'Food Processor': {
    quote: `Together with Trouw Nutrition we are utilizing spent brewer’s yeast as a nutritious feed ingredient while reducing the need for grains that can be used for human food production – aiming to replace up to 5,000 tonnes of food-grade soybean meal on annual basis.`,
    source: 'Food processor, Nigeria',
  },
};

const Timeline = () => {
  const [activeStep, setActiveStep] = useState('Food Processor');

  return (
    <div className="py-8 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        What customers say about Selko
      </h2>

      {/* Step Navigation */}
      <div className="flex justify-between items-center relative border-t border-gray-300 mb-10">
        {steps.map((step) => (
          <div
            key={step}
            className="flex-1 text-center cursor-pointer"
            onClick={() => setActiveStep(step)}
          >
            <div className="w-4 h-4 mx-auto rounded-full border-4 transition-colors duration-300"
              style={{
                backgroundColor: activeStep === step ? '#003865' : '#ffffff',
                borderColor: activeStep === step ? '#003865' : '#d1d5db',
              }}
            ></div>
            <p className={`mt-2 text-sm font-semibold ${activeStep === step ? 'text-[#003865]' : 'text-gray-500'}`}>
              {step}
            </p>
          </div>
        ))}
        {/* Timeline Line - optional if using border-t */}
        <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
      </div>

      {/* Quote Box */}
      <div className="bg-[#003865] text-white p-8 rounded-md">
        <div className="text-5xl text-lime-400 leading-none mb-4">“</div>
        <p className="text-lg font-semibold mb-6">{quotes[activeStep].quote}</p>
        <div className="text-5xl text-lime-400 leading-none text-right">”</div>
        <p className="text-sm mt-4">{quotes[activeStep].source}</p>
      </div>
    </div>
  );
}

export default Timeline