import Left from '@/components/contact/Left'
import Right from '@/components/contact/Right'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between my-10'>
        <Left />
        <Right />
    </div>
  )
}

export default page