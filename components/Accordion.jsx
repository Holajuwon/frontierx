import React, { useState } from 'react'
import { classNames } from '../utils/helper'

const Accordion = ({ title, openDefault = false, children, rightIcon, boxStyle }) => {
	const [open, setOpen] = useState(openDefault)
	return (
		<div className={classNames('w-full text-white', boxStyle)}>
			<div
				className={classNames(
					'flex justify-between cursor-pointer py-[25px] pl-[30px] pr-[19px] bg-brand-black/50 rounded-t',
					open ? 'rounded-b-none' : 'rounded-b'
				)}
				onClick={() => setOpen(!open)}>
				<span className='flex items-center gap-x-2'>
					<i className='ri-apps-2-line ri-1x'></i>
					<p className='font-extrabold'>{title}</p>
					{rightIcon}
				</span>
				{open ? (
					<i className='transform transition-all ease-out duration-300 ri-arrow-down-s-line ri-lg'></i>
				) : (
					<i className='transform transition-all ease-out duration-300 ri-arrow-up-s-line ri-lg'></i>
				)}
			</div>
			<div
				className={classNames(
					'bg-brand-black/50  pl-[30px] pr-[25px]  transform transition-all ease-out duration-500',
					open ? 'translate-y-0 pb-12 rounded-b' : '-translate-y-0.5 h-0 overflow-hidden'
				)}
				>
				{children}
			</div>
		</div>
	)
}

export default Accordion
