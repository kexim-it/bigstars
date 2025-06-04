import React from 'react'
import WelfareCard from './WelfareCard'
import { welfareCommitData } from '@/data'

const WelfareCommit = () => {
  return (
    <section
      aria-label="Big Stars Animal Feed - Commitments to Animal Welfare"
      className="max-w-[80vw] mx-auto px-4 py-10"
    >
      <h2 className="sr-only">Commitments to Animal Welfare</h2>
      <h2 className="text-3xl font-semibold text-[var(--blue)]
      mb-4">Commitments to Animal Welfare</h2>
      <div
        role="list"
        className="flex flex-col justify-center items-center w-full"
      >
        {welfareCommitData.map((data, index) => (
          <div role="listitem" key={index}>
            <WelfareCard
              title={data.title}
              description={data.description}
              direction={data.flexDirection}
              imageAlt={data.imageAlt}
              img={data.image}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WelfareCommit
