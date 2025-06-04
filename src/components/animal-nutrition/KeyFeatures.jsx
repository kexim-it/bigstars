import { concentratesData } from '@/data'
import React from 'react'
import NutritionCard from './NutritionCard'

const KeyFeatures = () => {
  return (
    <section
      className="px-4 py-12"
      aria-labelledby="key-features-heading"
    >
      <h2
        id="key-features-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--blue)]"
      >
        Key Features of Our Animal Feed Concentrates
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover the unique nutritional benefits of Big Stars Animal Feed Concentrates, carefully crafted to enhance animal health, boost productivity, and support sustainable farming.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 max-w-7xl mx-auto">
        {concentratesData.features.map((feature, index) => (
          <NutritionCard
            key={index}
            title={feature.title}
            desc={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default KeyFeatures
