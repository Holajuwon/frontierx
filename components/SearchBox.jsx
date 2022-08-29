import React from 'react'
import { classNames } from '../utils/helper'

const SearchBox = ({boxStyles}) => {
  return (
    <div className={classNames('bg-brand-gray pl-3 rounded-[10px] flex items-center w-full', boxStyles)}>
      <i className="ri-search-line ri-lg"></i>
      <input type='text'  placeholder='Lorem ipsum' className='bg-brand-gray py-3 w-full pl-4 outline-none rounded-r-[10px]'/>
    </div>
  )
}

export default SearchBox
