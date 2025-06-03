import Image from 'next/image'
import React from 'react'
// import Arrow from "@/assets/img/arrow.png"
import ContactForm from '../ContactForm'

const Right = () => {
  return (
    <div className='lg:shadow-lg lg:w-[50vw] w-full min-h-screen'>
        <div className="flex items-center justify-between px-5 lg:mt-52 my-16">
            <span className="bg-slate-500 h-[1px] w-[80px] lg:w-[250px]"></span>
            <p className="w-sm text-slate-500 text-xl lg:text-lg mx-2">We are excited to hear from you and do business with you</p>
        </div>
        <div className="">
            <ContactForm />
        </div>
    </div>
  )
}

export default Right