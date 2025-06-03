import Image from 'next/image'
import React from 'react'
import ContactForm from '../ContactForm'

const Right = () => {
  return (
    <section className="w-full lg:w-[50vw] min-h-screen lg:shadow-lg bg-white">
      <div className="px-4 sm:px-8 lg:px-10 py-10 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
          <span className="bg-slate-500 h-[1px] w-full lg:w-[250px] mb-4 lg:mb-0 lg:mr-4" />
          <p className="text-center lg:text-left text-slate-500 text-lg max-w-md">
            We are excited to hear from you and do business with you
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Right
