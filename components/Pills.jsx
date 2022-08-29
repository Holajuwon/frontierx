import React from 'react'
import { classNames } from '../utils/helper'

const Pills = ({ title, icon, boxStyle = '' }) => {
	return (
		<div
			className={classNames(
				'flex w-fit min-w-fit text-white bg-brand-black/50 py-[13px] px-[34px] rounded items-center gap-x-1',
				boxStyle
			)}>
			{icon}
			<p className='font-extrabold text-[15px]'>{title}</p>
		</div>
	)
}

export default Pills
