import Image from 'next/image'
import React from 'react'

const ImageBox = ({img}) => {
  return (
    <div className="w-[33rem] h-72">
                <Image className='w-full h-full object-cover rounded-2xl' src={img} alt='' width={1080} height={1080} />
            </div>
  )
}

export default ImageBox