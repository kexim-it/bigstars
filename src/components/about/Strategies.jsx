import React from 'react'
import StrategyCard from './StrategyCard'
import { strategyData } from '@/data'

const Strategies = () => {
  return (
    <div className='flex items-center justify-center max-w-screen mx-auto flex-wrap gap-10 my-10'>
        {
            strategyData.businessStrategy.strategicPillars.map((data, key)=>(
                <StrategyCard description={data.description} title={data.title} key={key} />
            ))
        }
    </div>
  )
}

export default Strategies