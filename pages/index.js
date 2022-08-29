import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Pills from '../components/Pills'
import Accordion from '../components/Accordion'
import SocialLink from '../components/SocialLink'
import StatCard from '../components/StatCard'
import { statData } from '../utils/dummyData'

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Head>
				<title>FRONTIERX | HOME</title>
				<meta name='description' content='Home page of FRONTIERX' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className='h-100 pt-[41px] pb-[66px]'>
				<section className='h-[264px] bg-[url("/hero-pattern.png")] bg-cover bg-no-repeat bg-center mx-5 rounded relative mb-20'>
					<div className='absolute -bottom-[56px] left-5 right-0 flex justify-center items-center'>
						<Image src='/eye-image.png' alt='FRONTIERX' width={149} height={149} />
					</div>
				</section>
				<section className='flex flex-col justify-center items-center my-[74px] text-white text-center'>
					<h1 className='font-extrabold text-[45px]'>Lorem ipsum</h1>
					<p className='font-normal pt-1'>
						Created by: <span className='text-brand-red'>Lorem ipsum</span>
					</p>
					<p className='font-normal pt-[6px]'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
					</p>
					<div className='flex mt-[68px] flex-wrap items-center justify-center gap-5'>
						<Pills
							title='Lorem ipsum'
							icon={<i className='ri-numbers-line ri-1x'></i>}
							boxStyle='bg-brand-black/50'
						/>
						<Pills
							title='Lorem ipsum'
							icon={<i className='ri-apps-2-line ri-1x'></i>}
							boxStyle='bg-brand-black'
						/>
						<Pills
							title='Lorem ipsum'
							icon={<i className='ri-home-7-line ri-1x'></i>}
							boxStyle='bg-brand-black/50'
						/>
					</div>
				</section>
				<section className='grid grid-cols-1 lg:grid-cols-2  gap-x-4 gap-y-6 px-8 md:px-[116px] justify-end'>
					<Accordion title='Lorem ipsum' openDefault={true}>
						<div className='sm:pr-4 lg:pr-14'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
								irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur.
							</p>
							<span className='grid md:grid-cols-2 gap-y-4 pt-10'>
								<SocialLink
									text='loremipsum.com'
									icon={<i className='ri-external-link-line ri-xl'></i>}
								/>
								<SocialLink
									href='#discord'
									text='@Lorem ipsum'
									icon={<i className='ri-discord-line ri-xl'></i>}
								/>
								<SocialLink
									href='#instagram'
									text='@Lorem ipsum'
									icon={<i className='ri-instagram-line ri-xl'></i>}
								/>
								<SocialLink
									href='#twitter'
									text='@Lorem ipsum'
									icon={<i className='ri-twitter-line ri-xl'></i>}
								/>
							</span>
						</div>
					</Accordion>
					<Accordion
						title='Lorem ipsum'
						rightIcon={<i className='ri-question-line ri-xs'></i>}
						openDefault={true}>
						<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-[10px] max-h-[320px] overflow-y-auto pl-1 py-1 pr-5'>
							{statData.map((stat, index) => (
								<StatCard key={index} title={stat.name} desc={stat.desc} percent={stat.percent} />
							))}
						</div>
					</Accordion>
					<Accordion title='Lorem ipsum' boxStyle='lg:col-start-2'>
						C
					</Accordion>
				</section>
			</main>

			<Footer />
		</div>
	)
}
