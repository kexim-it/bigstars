import Image from 'next/image'
import React from 'react'

const MgtCard = ({name, position, company, profile, img}) => {
  return (
    <div className="flex items-center mb-10 w-1/2 bg-slate-100">
        <div className="w-52 h-80 overflow-hidden">
            <Image src={img} alt='Dr. James Rajamani' width={1080} height={1080} className='w-full h-full object-cover' />
        </div>
        <div className="p-4">
            <h4 className="text-2xl font-semibold text-[var(--orange)]">{name}</h4>
            <p className="text-[var(--blue)]">{position}</p>
            <p className="text-sm text-slate-500 italic">{company}</p>
            <p className="my-4 text-slate-600 max-w-96 text-sm text-justify">{profile}</p>
        </div>
        </div>
  )
}

export default MgtCard