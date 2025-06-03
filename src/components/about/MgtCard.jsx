import Image from 'next/image';
import React from 'react';

const MgtCard = ({ name, position, company, profile, img }) => {
  return (
    <article className="flex flex-col md:flex-row items-center bg-slate-100 mb-10 w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-md">
      <div className="w-full md:w-52 h-64 md:h-80 relative flex-shrink-0">
        <Image
          src={img}
          alt={`Photo of ${name}, ${position} at ${company}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 208px"
          priority
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-[var(--orange)]">{name}</h3>
        <p className="text-[var(--blue)] font-medium">{position}</p>
        <p className="text-sm text-slate-500 italic mb-2">{company}</p>
        <p className="text-sm text-slate-700 max-w-lg text-justify">{profile}</p>
      </div>
    </article>
  );
};

export default MgtCard;
