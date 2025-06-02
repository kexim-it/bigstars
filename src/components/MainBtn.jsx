import Link from 'next/link'
import React from 'react'

const MainBtn = ({url, urlTarget, btnText}) => {
  return (
    <Link href={url} target={urlTarget} className='bg-[var(--orange)] rounded-full px-10 py-3 hover:bg-[var(--deep-orange)] duration-300 ease-in-out text-sm text-white'>{btnText}</Link>
  )
}

export default MainBtn