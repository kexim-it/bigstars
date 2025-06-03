import Link from 'next/link';
import React from 'react';

const Card = ({ title, icon, description, url }) => {
  return (
    <article className="w-full sm:w-[22rem] md:w-[26rem] xl:w-[33rem] bg-slate-100 rounded-lg border-b-4 border-[var(--orange)] hover:border-[var(--deep-orange)] group px-8 py-6 flex flex-col justify-between duration-300 ease-in-out shadow-sm">
      <div className="mb-4">{icon}</div>
      
      <h3 className="text-2xl font-semibold text-[var(--blue)] capitalize mb-2">
        {title}
      </h3>
      
      <p className="mb-4 text-slate-600 text-justify">
        {description}
      </p>
      
      <Link
        href={url}
        className="inline-block bg-[var(--orange)] hover:bg-[var(--deep-orange)] duration-300 ease-in-out py-2.5 px-6 rounded-lg text-white font-medium text-sm md:text-base text-center"
        aria-label={`Read more about ${title}`}
      >
        Find Out More
      </Link>
    </article>
  );
};

export default Card;
