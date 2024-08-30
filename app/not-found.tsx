'use client'

import {useTheme} from 'next-themes'
import Link from 'next/link'
import {
	useEffect,
	useState,
} from 'react'

export default function NotFound() {
	const {theme} =
		useTheme()
	const [
		color,
		setColor,
	] = useState(
		'#ffffff'
	)

	useEffect(() => {
		setColor(
			theme !==
				'dark'
				? '#ffffff'
				: '#000000'
		)
	}, [theme])

	return (
		<section
			className={`w-full max-w-5xl   py-20 flex flex-col gap-10 ${
				theme ===
				'dark'
					? ''
					: ''
			}  relative  backdrop-blur-2xl rounded-lg`}
		>
			<div className="bg-earia-black h-full w-full rounded-2xl border p-10 overflow-y-auto border-jet flex flex-col gap-10 items-center justify-center">
				<span className="pointer-events-none whitespace-pre-wrap  text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text p-1">
					The page
					you are
					looking
					for does
					not exist.
					<br />
				</span>

				<Link
					href={'/'}
					className=" hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 text-lg flex justify-center items-center font-extrabold"
				>
					<div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
					<div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
					<div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
					<div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
					<p className="z-10">
						Back to
						Home
					</p>
				</Link>
			</div>
		</section>
	)
}
