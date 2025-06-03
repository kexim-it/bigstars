import React from 'react'
import { FaBalanceScale } from 'react-icons/fa'

const NutritionCard = ({title, icon, desc}) => {
  return (
    <div className='w-96 h-52 bg-slate-100 px-4 py-10 hover:border-[var(--orange)] hover:border-l-4 duration-300 ease-in-out'>
        <div className="flex items-end gap-4 mb-4">
        <span className="text-[var(--blue)] text-3xl">{icon}</span>
        <h3 className="text-[var(--orange)] text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

export default NutritionCard