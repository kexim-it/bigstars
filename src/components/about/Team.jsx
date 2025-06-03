import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from '@/data';

const Team = () => {
  return (
    <section
      className="max-w-[80vw] mx-auto my-10 flex flex-wrap justify-center gap-6"
      aria-label="Meet our team"
    >
      {teamData.map((member, index) => (
        <TeamCard
          key={index}
          company="Big Stars Animal Feed"
          img={member.image}
          name={member.name}
          position={member.position}
          description={member.description}
        />
      ))}
    </section>
  );
};

export default Team;
