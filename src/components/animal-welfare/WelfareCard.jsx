import Image from 'next/image'
import React from 'react'
import PoultryImage from '@/app/assets/images/poultry/poultry.png'

const WelfareCard = ({ title, description, direction, imageAlt, img }) => {
  return (
    <section
      aria-labelledby="welfare-card-title"
      className={`flex flex-col ${direction} items-center justify-between w-[80vw] mx-auto bg-slate-100 rounded-lg shadow-md overflow-hidden`}
    >
      <div className="w-full md:w-1/2 px-6 md:px-10 py-8">
        <h3
          id="welfare-card-title"
          className="text-2xl md:text-3xl font-semibold text-[var(--blue)] mb-4"
        >
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-96 relative">
        <Image
          src={img}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </section>
  )
}

export default WelfareCard
