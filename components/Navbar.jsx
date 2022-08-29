import React, { useState } from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import { classNames } from '../utils/helper'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className='flex flex-col relative'>
			<div className='flex justify-between bg-brand-black text-white h-24 items-center px-10'>
				<Image src='/logo-light.svg' alt='FRONTIERX' width={195} height={23} />
				<div className='hidden sm:flex items-center w-9/12 sm:pl-20 lg:pl-[90px] gap-x-11'>
					<SearchBox boxStyles='hidden sm:flex' />
					<a
						href='#a'
						className='hidden lg:block font-extrabold text-[15px] visited:text-brand-red active:text-brand-red'>
						Lorem
					</a>
					<a
						href='#b'
						className='hidden lg:block font-extrabold text-[15px] visited:text-brand-red active:text-brand-red'>
						Lorem
					</a>
					<a
						href='#c'
						className='hidden lg:block font-extrabold text-[15px] visited:text-brand-red active:text-brand-red'>
						Lorem
					</a>
				</div>

				<i
					className='ri-menu-line ri-lg cursor-pointer lg:hidden pl-4'
					onClick={() => setOpen(!open)}></i>
			</div>
			<div className='bg-nav-gradient h-[6px] w-full'></div>
			<div
				className={classNames(
					'absolute right-0 top-[102px] lg:hidden text-white flex flex-col z-20 bg-brand-black w-full gap-y-3 px-9 items-center transform transition-all ease-out duration-500',
					open ? 'flex translate-y-0 py-5' : '-translate-y-0.5 h-0 overflow-hidden'
				)}>
				<SearchBox boxStyles='flex sm:hidden' />
				<a
					href='#a'
					className='lg:hidden font-extrabold text-[15px] visited:text-brand-red active:text-brand-red'>
					Lorem
				</a>
				<a
					href='#b'
					className='lg:hidden font-extrabold text-[15px] visited:text-brand-red active:text-brand-red'>
					Lorem
				</a>
				<a
					href='#c'
					className='lg:hidden font-extrabold text-[15px] visited:text-brand-red active:text-brand-red'>
					Lorem
				</a>
			</div>
		</nav>
	)
}

export default Navbar
