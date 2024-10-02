'use client'

import Image from 'next/image'

import {Mail, Phone, MapPin, Facebook, GitHub, Twitter} from 'react-feather'
import profile from '@/assets/profile-s.png'

export default function NewSideBar() {
	return (
		<aside className=" lg:max-w-[275px] md:max-w-5xl w-full max-h-screen h-full py-12 overflow-hidden lg:sticky xl:sticky  left-0 top-0 bottom-0 right-0">
			<div className="bg-earia-black-2 border border-jet rounded-2xl h-full p-10 flex lg:flex-col md:flex-row w-full items-center gap-6 pt-16">
				<div className="border border-jet rounded-full p-2  w-36 h-36 relative">
					<Image
						alt="Zamin Mirzad"
						src={profile}
						className=" scale-110 object-cover  rounded-full border-2 border-orange-yellow "
					/>
				</div>
				<h2 className="">Zamin Mirzad</h2>
				<span className="rounded p-2 bg-jet text-xs font-thin">
					Software Developer
				</span>

				<hr className=" border-jet w-full" />
				<nav className="flex flex-col gap-4">
					{contactInfo.map((item) => (
						<span
							key={item.data}
							className=" flex  items-center justify-between  w-full text-white p-2  rounded-lg text-xs "
						>
							<div className=" flex items-center gap-2">
								<span className="border p-3 rounded-lg border-jet">
									{item.icon}
								</span>
								<div className="flex flex-col gap-1">
									<label className=" text-gray-400 text-xs">{item.label}</label>
									<p className="">{item.data}</p>
								</div>
							</div>
						</span>
					))}
				</nav>

				<div className="flex items-center gap-2 mt-10">
					<Facebook
						size={18}
						className="text-white/50 hover:text-light-gray transition duration-200 cursor-pointer"
					/>
					<GitHub
						size={18}
						className="text-white/50 hover:text-light-gray transition duration-200 cursor-pointer"
					/>
					<Twitter
						size={18}
						className=" text-white/50 hover:text-light-gray transition duration-200 cursor-pointer"
					/>
				</div>
			</div>
		</aside>
	)
}

const contactInfo = [
	{
		icon: (
			<Mail
				size={18}
				className=" text-orange-yellow"
			/>
		),
		label: 'Email',
		data: 'example@example.com',
	},
	{
		icon: (
			<Phone
				size={18}
				className=" text-orange-yellow"
			/>
		), // Phone icon
		label: 'Phone',
		data: '+1234567890',
	},
	{
		icon: (
			<MapPin
				size={18}
				className=" text-orange-yellow"
			/>
		), // Location icon
		label: 'Location',
		data: '123 Main St, Anytown, USA',
	},
]