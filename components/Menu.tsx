'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Home, User, Layers, Mail, FileText} from 'react-feather'

export default function Menu() {
	const pathname = usePathname()
	return (
		<div className="flex items-center gap-3 px-16 justify-between border-l border-b border-jet bg-earia-gray absolute top-0 right-0 max-w-[65%] w-full h-16 rounded-tr-2xl rounded-bl-2xl">
			{menuItems.map((item) => (
				<li
					key={item.id}
					className=" flex  items-center justify-between  w-full text-white p-2  rounded-lg text-sm"
				>
					<Link
						href={item.to}
						className={`flex items-center ${
							pathname === item.to ? 'text-orange-yellow' : 'text-white'
						} `}
					>
						{item.title}
					</Link>
				</li>
			))}
		</div>
	)
}

const menuItems = [
	{
		id: 'about',
		to: '/',
		title: 'About',
		icon: (
			<User
				size={18}
				className=" text-orange-yellow"
			/>
		),
	},
	{
		id: 'projects',
		to: '/projects',
		title: 'Projects',
		icon: (
			<Layers
				size={18}
				className=" text-orange-yellow"
			/>
		),
	},
	{
		id: 'contact',
		to: '/contact',
		title: 'Contact',
		icon: (
			<Mail
				size={18}
				className=" text-orange-yellow"
			/>
		),
	},
	{
		id: 'resume',
		to: '/resume',
		title: 'Resume',
		icon: (
			<FileText
				size={18}
				className=" text-orange-yellow"
			/>
		),
	},
	{
		id: 'skills',
		to: '/skills',
		title: 'skills',
		icon: (
			<FileText
				size={18}
				className=" text-orange-yellow"
			/>
		),
	},
]