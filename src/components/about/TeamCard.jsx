import Image from "next/image";
import React from "react";

const TeamCard = ({img, name, position, company, description}) => {
  return (
    <div className="flex flex-col items-left justify-center mb-10 bg-slate-100">
      <div className="w-80 h-80 overflow-hidden">
        <Image
          src={img}
          alt="Dr. James Rajamani"
          width={1080}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 py-4">
        <h4 className="text-2xl font-semibold text-[var(--orange)]">{name}</h4>
        <p className="text-[var(--blue)]">{position}</p>
        <p className="text-sm text-slate-500 italic">{company}</p>
        <p className="my-4 text-sm text-slate-600 max-w-72 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
