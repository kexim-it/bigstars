import React from 'react'
import WelfareCard from './WelfareCard'
import MattersImage from '@/app/assets/images/poultry/chick-3.jpg'
const WelfareMatters = () => {
  return (
    <div className='my-4'>
        <WelfareCard description={"We recognize that humane treatment is not just an ethical responsibility but a foundation for productive farming. Animals raised with care are more productive, leading to better returns for farmers and safer, healthier food for consumers. By choosing Big Stars Animal Feed, you’re partnering with a company dedicated to advancing animal welfare through science-backed nutrition and responsible practices."} img={MattersImage} imageAlt={"chick and hen"} direction={"flex-row"} title={"Why Animal Welfare Matters to Us"}/>
    </div>
  )
} 

export default WelfareMatters