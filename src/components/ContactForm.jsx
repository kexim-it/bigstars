"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
  const form = useRef();
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  emailjs.init(publicKey);

  const router = useRouter()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current)
    .then((response) => {
      alert('Email sent successfully!', response);
      router.push("/")
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  return (
    <section className="">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-[var(--color-min-blue)]">
      <form  className="space-y-8"  ref={form} onSubmit={sendEmail}>
          <div>
              <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-[var(--orange)] dark:text-gray-300">Your Name</label>
              <input type="text" id="user_name" name='user_name' className="font-extralight text-white border-b border-[var(--blue)] w-full outline-none placeholder:text-sm placeholder:italic placeholder-opacity-10 placeholder:text-slate-300" placeholder="John Doe" required />
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[var(--orange)] dark:text-gray-300">Your Email</label>
              <input type="email" name='user_email' id="email" className="font-extralight text-white border-b border-[var(--blue)] w-full outline-none placeholder:text-sm placeholder:italic placeholder-opacity-10 placeholder:text-slate-300" placeholder="name@bigstars.ltd" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[var(--orange)] dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name='subject' className="font-extralight text-white border-b border-[var(--blue)] w-full outline-none placeholder:text-sm placeholder:italic placeholder-opacity-10 placeholder:text-slate-300" placeholder="Subject" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-[var(--orange)] dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-white border-[var(--blue)] border outline-none placeholder:text-sm placeholder:italic placeholder-opacity-10 placeholder:text-slate-300" placeholder="Leave a comment..."></textarea> 
          </div>
          <button type="submit" className="py-3 px-5 text-sm cursor-pointer hover:font-medium text-center text-[var(--blue)] rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 border-[var(--blue)] border-2 focus:outline-none  ary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:border-[var(--orange)] hover:text-[var(--orange)] duration-300 ease-in-out font-extralight">Send message</button>
      </form>
  </div>
</section>

  )
}

export default ContactForm