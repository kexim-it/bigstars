import Image from "next/image";
import React from "react";

const TeamCard = ({ img, name, position, company, description }) => {
  return (
    <article
      className="flex flex-col items-start bg-slate-100 rounded-lg shadow-md overflow-hidden mb-10 max-w-xs"
      aria-label={`${name}, ${position} at ${company}`}
    >
      <div className="w-full h-80 relative">
        <Image
          src={img}
          alt={`${name} - ${position} at ${company}`}
          layout="fill"
          objectFit="cover"
          className="object-cover"
          priority
        />
      </div>
      <div className="px-4 py-5">
        <h3 className="text-2xl font-semibold text-[var(--orange)]">{name}</h3>
        <p className="text-[var(--blue)] font-medium">{position}</p>
        <p className="text-sm text-slate-500 italic mb-3">{company}</p>
        <p className="text-sm text-slate-600 text-justify">{description}</p>
      </div>
    </article>
  );
};

export default TeamCard;
