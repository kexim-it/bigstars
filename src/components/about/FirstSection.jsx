import Link from 'next/link'
import React from 'react'
import MainBtn from '../MainBtn'

const FirstSection = ({title,detail}) => {
  return (
    <div className='w-[80vw] mx-auto space-y-5 h-full'>
        <h2 className='text-4xl font-bold text-[var(--deep-blue)] my-5'>{title}</h2>
        <p className="w-[50vw] text-justify text-slate-500">
            {detail}
        </p>
        <MainBtn btnText={"Contact Us"} url={"/contact-us"} urlTarget={""} />
    </div>
  )
}

export default FirstSection