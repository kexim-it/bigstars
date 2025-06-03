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
    <section className="bg-[var(--color-min-blue)] py-10 px-4">
  <div className="mx-auto max-w-screen-md">
    <form ref={form} onSubmit={sendEmail} className="space-y-8">
      
      <div>
        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-[var(--orange)]">
          Your Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          placeholder="John Doe"
          className="w-full border-b border-[var(--blue)] bg-transparent text-white placeholder:text-slate-300 placeholder:italic placeholder:text-sm outline-none py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[var(--orange)]">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          placeholder="name@bigstars.ltd"
          className="w-full border-b border-[var(--blue)] bg-transparent text-white placeholder:text-slate-300 placeholder:italic placeholder:text-sm outline-none py-2"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[var(--orange)]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="Subject"
          className="w-full border-b border-[var(--blue)] bg-transparent text-white placeholder:text-slate-300 placeholder:italic placeholder:text-sm outline-none py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-[var(--orange)]">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          placeholder="Leave a comment..."
          className="w-full border border-[var(--blue)] bg-transparent text-white placeholder:text-slate-300 placeholder:italic placeholder:text-sm outline-none p-3"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-6 py-3 border-2 text-sm text-[var(--blue)] border-[var(--blue)] rounded-lg hover:text-[var(--orange)] hover:border-[var(--orange)] transition-all duration-300 ease-in-out font-light"
      >
        Send message
      </button>
    </form>
  </div>
</section>
  )
}

export default ContactForm