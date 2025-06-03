import React from 'react';
import StrategyCard from './StrategyCard';
import { strategyData } from '@/data';

const Strategies = () => {
  return (
    <section
      className="w-full max-w-[90vw] mx-auto px-6 py-10"
      aria-labelledby="strategies-title"
    >
      <div className="text-center mb-8">
        <h2
          id="strategies-title"
          className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)]"
        >
          Our Strategic Pillars
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mt-2">
          Explore the core strategies that drive our mission and long-term success.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {strategyData.businessStrategy.strategicPillars.map((pillar, index) => (
          <StrategyCard
            key={index}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Strategies;
