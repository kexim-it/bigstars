import React from 'react'
import NutritionCard from './NutritionCard'
import { swineFeedData } from '@/data'

const SwineFeed = () => {
  return (
    <div className="my-10 max-w-[90vw] mx-auto flex items-center justify-center flex-wrap gap-10">
      {swineFeedData.products.map((product, index) => (
        <NutritionCard desc={product.description} icon={product.icon} title={product.name} key={index} />
      ))}
    </div>
  )
}

export default SwineFeed