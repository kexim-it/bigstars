import React from 'react'

const StrategyCard = ({title, description}) => {
  return (
    <div className='h-72 md:w-[25rem] 3xl:w-[31rem] bg-slate-100 rounded-lg border-b-4 border-[var(--orange)] hover:border-[var(--deep-orange)] group px-12 py-6 flex flex-col items-start justify-center duration-300 ease-in-out shadow-sm'>
        <h2 className="text-2xl font-semibold text-[var(--blue)] capitalize">{title}</h2>
        <p className="my-4 text-slate-600 text-justify">{description}</p>
    </div>
  )
}

export default StrategyCard