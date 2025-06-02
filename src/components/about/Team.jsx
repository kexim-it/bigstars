import React from 'react'
import TeamCard from './TeamCard'
import GM from "@/app/assets/images/staff/gm.jpg"
import { teamData } from '@/data'

const Team = () => {
  return (
    <div className='max-w-[80vw] mx-auto my-10 flex items-center justify-around gap-4 flex-wrap'>
        {
            teamData.map((member, index)=>(

                <TeamCard company={"Big Stares Animal Feed"} img={member.image} name={member.name} position={member.position} description={member.description} key={index} />
            ))
        }
    </div>
  )
}

export default Team