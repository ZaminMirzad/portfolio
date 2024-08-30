
import Link from 'next/link'
import Image from 'next/image'
import {
	FileText,
	Home,
	Layers,
	Mail,
	User,
} from 'react-feather'

export default function SideBar() {
	return (
		<div className=" min-w-60 h-full  text-white flex flex-col justify-center items-center  p-10">
			<ul className="flex flex-col gap-6 justify-center items-center p-8 rounded-lg h-full">
				<div className="border h-36 w-36 rounded-full bg-slate-900 relative overflow-hidden ">
					<Image
						src={
							'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						alt="profile"
						fill
						className="w-full h-full object-cover"
					/>
				</div>
				{menuItems.map(
					(
						item
					) => (
						<li
							key={
								item.id
							}
							className=" flex  items-center justify-between  w-full text-black p-2  rounded-lg text-sm"
						>
							<Link
								href={
									item.to
								}
								className=" flex items-center gap-2"
							>
								{
									item.icon
								}{' '}
								{
									item.title
								}
							</Link>
						</li>
					)
				)}
			</ul>
		</div>
	)
}

export const menuItems =
	[
		{
			id: 'home',
			to: '/',
			title: 'Home',
			icon: (
				<Home />
			),
		},
		{
			id: 'about',
			to: '/about',
			title:
				'About',
			icon: (
				<User />
			),
		},
		{
			id: 'projects',
			to: '/projects',
			title:
				'Projects',
			icon: (
				<Layers />
			),
		},
		{
			id: 'contact',
			to: '/contact',
			title:
				'Contact',
			icon: (
				<Mail />
			),
		},
		{
			id: 'resume',
			to: '/resume',
			title:
				'Resume',
			icon: (
				<FileText />
			),
		},
	]
