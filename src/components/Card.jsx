import Link from 'next/link'
import React from 'react'

const Card = ({title, icon, description, url}) => {
  return (
    <div className='h-72 md:w-[40rem] 3xl:w-[31rem] bg-slate-100 rounded-lg border-b-4 border-[var(--orange)] hover:border-[var(--deep-orange)] group px-12 py-6 flex flex-col items-start justify-center duration-300 ease-in-out shadow-sm'>
        <>{icon}</>
        <h2 className="text-2xl font-semibold text-[var(--blue)] capitalize">{title}</h2>
        <p className="my-4 text-slate-600 text-justify">{description}</p>
        <Link href={url} className='bg-[var(--orange)] hover:bg-[var(--deep-orange)] duration-300 ease-in-out py-3 px-8 rounded-lg text-white'>Find Out More</Link>
    </div>
  )
}

export default Card