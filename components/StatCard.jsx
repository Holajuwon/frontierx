import React from 'react'

const StatCard = ({ title, desc, percent }) => {
	return (
		<div className='text-center py-4 px-5 bg-brand-black rounded-md hover:ring-2 hover:ring-brand-red focus:ring-2 focus:ring-brand-red'>
			<h2 className='text-sm font-light text-brand-gray-200'>{title}</h2>
			<p className='font-extrabold'>{desc}</p>
			<p className='text-sm font-light text-brand-gray-200'>{percent}%</p>
		</div>
	)
}

export default StatCard
