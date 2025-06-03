import Link from 'next/link'
import React from 'react'

const Left = () => {
  return (
    <div className='flex flex-col lg:w-[50vw] w-[90vw] mx-auto'>
        <div className="lg:max-w-[40vw] lg:px-10">
            <h1 className=" font-bold text-slate-500 my-5 lg:my-20 text-3xl lg:text-9xl">Let's get in touch</h1>
            <p className="lg:w-[20vw] w-full text-lg lg:text-2xl font-semibold text-[var(--orange)]">Don't hesitate to reach out to us</p>
            <div className="space-y-4 mt-5 lg:mt-10 grid grid-cols-2  items-start justify-center">
            <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[var(--blue)]">Phone</h4>
                {/* <Link href={"tel:23355006666"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">+233 55 00 6666</Link> */}
                {/* <Link href={"tel:23355007777"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">+233 55 00 7777</Link> */}
                <Link href={"tel:23355008888"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">+233 55 00 8888</Link>
                <Link href={"tel:23355009999"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">+233 55 00 9999</Link>
                <Link href={"tel:233550053333"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">+233 55 005 3333</Link>
            </div>
            <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[var(--blue)]">Post Office Address</h4>
                <span className="text-xs lg:text-lg text-slate-500">P.O. Box 032244</span>
                <span className="text-xs lg:text-lg text-slate-500">Opposite Shoprite Osu, Accra, Ghana</span>
            </div>
            <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[var(--blue)]">Email Address</h4>
                <Link href={"mailto:sales@bigstars.ltd"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">sales@bigstars.ltd</Link>
            </div>
            <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[var(--blue)]">Website</h4>
                <Link href={"/"} className="text-xs lg:text-lg text-slate-500 hover:text-[var(--orange)] duration-300 ease-in-out">bigstars.ltd</Link>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Left