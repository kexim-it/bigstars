import Link from 'next/link'
import React from 'react'

const Left = () => {
  return (
    <section
      className='flex flex-col lg:w-[50vw] w-[90vw] mx-auto'
      aria-label="Contact Information Section"
    >
      <div className="lg:max-w-[40vw] lg:px-10">
        <h1 className="font-bold text-slate-500 my-5 lg:my-20 text-3xl lg:text-6xl leading-tight">
          Let's get in touch
        </h1>

        <p className="lg:w-[20vw] w-full text-lg lg:text-2xl font-semibold text-[var(--orange)]">
          Don't hesitate to reach out to us
        </p>

        <div className="mt-6 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {/* Phone Numbers */}
          <address className="not-italic space-y-1">
            <h4 className="text-sm font-semibold text-[var(--blue)]">Phone</h4>
            <Link href="tel:23355008888" className="block text-sm lg:text-lg text-slate-500 hover:text-[var(--orange)] transition">
              +233 55 00 8888
            </Link>
            <Link href="tel:23355009999" className="block text-sm lg:text-lg text-slate-500 hover:text-[var(--orange)] transition">
              +233 55 00 9999
            </Link>
            <Link href="tel:233550053333" className="block text-sm lg:text-lg text-slate-500 hover:text-[var(--orange)] transition">
              +233 55 005 3333
            </Link>
          </address>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--blue)]">Post Office Address</h4>
            <p className="text-sm lg:text-lg text-slate-500">P.O. Box 032244</p>
            <p className="text-sm lg:text-lg text-slate-500">Opposite Shoprite Osu, Accra, Ghana</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--blue)]">Email Address</h4>
            <Link
              href="mailto:sales@bigstars.ltd"
              className="text-sm lg:text-lg text-slate-500 hover:text-[var(--orange)] transition"
            >
              sales@bigstars.ltd
            </Link>
          </div>

          {/* Website */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--blue)]">Website</h4>
            <Link
              href="/"
              className="text-sm lg:text-lg text-slate-500 hover:text-[var(--orange)] transition"
            >
              bigstars.ltd
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Left
