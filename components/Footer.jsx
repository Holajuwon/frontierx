import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-brand-black pt-[97px] pb-[85px] flex justify-center items-center'>
      <Image src='/logo-gray.svg' alt="FRONTIERX" width={195} height={23} />
    </footer>
  )
}

export default Footer
