'use client'

import {BookOpen} from 'react-feather'
import Menu from './Menu'
import Image from 'next/image'

export default function Home() {
	return (
		<div className="w-full max-w-4xl py-12">
			<div className="bg-earia-black h-full w-full rounded-2xl border p-10 overflow-y-auto border-jet relative">
				<Menu />
				<h1 className="underline decoration-orange-yellow underline-offset-8">
					About
				</h1>

				<p className="py-6 text-light-gray text-md font-light leading-6">
					I’m a Software Developer based in San Diego, California, specializing
					in creating robust and innovative web and mobile applications.
					<br />
					<br />
					I thrive on transforming complex technical challenges into elegant and
					efficient solutions. My role involves developing software that not
					only performs seamlessly but also offers an exceptional user
					experience.
					<br />I take pride in crafting code that is both functional and
					scalable, while ensuring the final product aligns with your vision and
					objectives. With a focus on clarity and efficiency, my goal is to
					deliver high-quality software that enhances user engagement and drives
					success. <br />
					I’ve had the privilege of working on projects for renowned companies,
					and I’m passionate about leveraging my skills to bring your ideas to
					life in the most impactful way.
				</p>

				<GridComponent />

				<TestimonialComponent />

				<Clients />
			</div>
		</div>
	)
}

function Clients() {
	return (
		<div className=" space-y-5 mt-10">
			<h2 className=" font-extrabold text-3xl">Clients</h2>
			<div className="flex items-center overflow-y-hidden overflow-x-auto w-full gap-4 snap-x scroll-pl-6 py-10  has-scrollbar">
				{[1, 2, 33, 43, 4, 23].map((item) => {
					return (
						<div
							key={item}
							className=" border rounded-lg border-jet bg-earia-black-2 flex items-start gap-3 w-40  snap-start relative h-28 flex-none"
						>
							<Image
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"
								className="text-orange-yellow rounded-lg borde border-jet bg-gradient-onyx flex items-center justify-centers grayscale bg-blend-overlay "
								alt=""
								fill
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function TestimonialComponent() {
	return (
		<div className=" space-y-5 mt-10">
			<h2 className=" font-extrabold text-3xl">Testimonial</h2>
			<div className="flex items-center overflow-y-hidden overflow-x-auto w-full gap-4 snap-x scroll-pl-6 py-10  has-scrollbar">
				{[1, 2, 33, 4].map((item) => {
					return (
						<div
							key={item}
							className=" border rounded-lg border-jet bg-earia-black-2 flex items-start p-8 gap-3 flex-none snap-start relative flex-col "
						>
							<div className=" -mt-16  py-2 flex items-end gap-2">
								<BookOpen
									className="text-orange-yellow rounded-lg borde border-jet p-4 bg-gradient-onyx flex items-center justify-centers"
									size={70}
								/>
								<h3>Dianiala lala</h3>
							</div>

							<div className=" space-y-1">
								<p className="text-light-gray text-sm max-w-96">
									The most modern and high-quality design made at a professional
									level. The most modern and high-quality design made at a
									professional level.
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

function GridComponent() {
	return (
		<div className=" space-y-5">
			<h2 className=" font-extrabold text-3xl">What am I doing</h2>
			<div className="grid grid-cols-2 w-full gap-4">
				{[1, 2, 33, 4].map((item) => {
					return (
						<div
							key={item}
							className=" col-span-1 border rounded-lg border-jet bg-earia-black-2 flex items-start p-8 gap-3 flex-none "
						>
							<BookOpen
								className="text-orange-yellow"
								size={50}
							/>

							<div className=" space-y-1">
								<h3 className="">Web Design</h3>
								<p className="text-light-gray text-sm">
									The most modern and high-quality design made at a professional
									level.
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}