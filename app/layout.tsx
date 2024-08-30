import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import NewSideBar from '@/components/NewSideBar'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Zamin Mirzad - Software Developer',
	description:
		'Zamin Mirzad - Portfolio website for historical purposes and documentation',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className="scrollbar-thumb-sky-700 scrollbar-track-black"
		>
			<body className={` ${inter.className} bg-smoky-Black text-white`}>
				<main className="flex gap-6 lg:justify-center lg:flex-row md:flex-col md:items-start ">
					<NewSideBar />
					{children}
				</main>
			</body>
		</html>
	)
}
