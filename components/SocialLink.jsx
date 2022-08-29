import React from 'react'

const SocialLink = ({icon, text, href='#'}) => {
  return (
    <div className='flex gap-x-2 items-center'>
      {icon}
      <a href={href} className='active:text-brand-red visited:text-brand-red'>
        {text}
      </a>
    </div>
  )
}

export default SocialLink
