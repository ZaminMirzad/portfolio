'use client'

import Filters from '@/components/Filters'
import Menu from '@/components/Menu'
import {zuStore} from '@/store/zuStore'
import Image from 'next/image'

export default function Projects() {
	return (
		<section className="w-full max-w-5xl py-12">
			<div className="bg-earia-black h-full w-full rounded-2xl border p-10 overflow-y-auto border-jet relative">
				<Menu />
				<h1 className="underline decoration-orange-yellow underline-offset-8">
					Projects
				</h1>
				<Filters />

				<ProjectCard />
			</div>
		</section>
	)
}

function ProjectCard() {
	const activeFilter = zuStore((state) => state.activeFilter)

	return (
		<div className="rounded-xl py-4 grid grid-cols-3 items-start gap-3 flex-wrap">
			{projectList
				.filter((x) =>
					activeFilter !== 'All' ? x.category === activeFilter : x
				)
				.map(({id, industry, category, image}) => (
					<div
						key={id}
						className=" rounded-xl p-2 flex flex-col gap-2 col-span-1 hover:cursor-pointer"
					>
						<div className=" h-52 w-full rounded-lg overflow-hidden relative">
							<Image
								src={
									'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt=""
								fill
								className=" object-cover w-full h-full hover:scale-110 transition duration-200"
							/>
						</div>
						<div className="flex flex-col gap-1 text-sm py-2">
							<span className="text-white">{industry}</span>
							<span className="text-gray-300">{category}</span>
						</div>
					</div>
				))}
		</div>
	)
}

export const projectList = [
	{
		id: 1,
		image:
			'https://disqus.com/velit/vivamus.js?vehicula=ipsum&consequat=dolor&morbi=sit&a=amet&ipsum=consectetuer&integer=adipiscing&a=elit&nibh=proin&in=risus&quis=praesent&justo=lectus&maecenas=vestibulum&rhoncus=quam&aliquam=sapien&lacus=varius&morbi=ut&quis=blandit&tortor=non&id=interdum&nulla=in&ultrices=ante&aliquet=vestibulum&maecenas=ante&leo=ipsum&odio=primis&condimentum=in&id=faucibus&luctus=orci&nec=luctus&molestie=et&sed=ultrices&justo=posuere&pellentesque=cubilia&viverra=curae&pede=duis&ac=faucibus&diam=accumsan&cras=odio&pellentesque=curabitur&volutpat=convallis&dui=duis&maecenas=consequat&tristique=dui&est=nec&et=nisi&tempus=volutpat&semper=eleifend&est=donec&quam=ut',
		industry: 'Finance',
		category: 'Web Development',
	},
	{
		id: 2,
		image:
			'https://businesswire.com/ut/at/dolor.json?donec=erat&odio=tortor&justo=sollicitudin&sollicitudin=mi&ut=sit',
		industry: 'Technology',
		category: 'Web Development',
	},
	{
		id: 3,
		image:
			'http://hud.gov/posuere.xml?sit=lobortis&amet=ligula&sapien=sit&dignissim=amet&vestibulum=eleifend&vestibulum=pede&ante=libero&ipsum=quis&primis=orci&in=nullam&faucibus=molestie&orci=nibh&luctus=in&et=lectus&ultrices=pellentesque&posuere=at&cubilia=nulla&curae=suspendisse&nulla=potenti&dapibus=cras&dolor=in&vel=purus&est=eu&donec=magna&odio=vulputate&justo=luctus&sollicitudin=cum&ut=sociis&suscipit=natoque&a=penatibus&feugiat=et&et=magnis&eros=dis&vestibulum=parturient&ac=montes&est=nascetur&lacinia=ridiculus&nisi=mus&venenatis=vivamus&tristique=vestibulum&fusce=sagittis&congue=sapien&diam=cum&id=sociis&ornare=natoque&imperdiet=penatibus&sapien=et&urna=magnis&pretium=dis&nisl=parturient&ut=montes&volutpat=nascetur&sapien=ridiculus&arcu=mus&sed=etiam&augue=vel&aliquam=augue&erat=vestibulum&volutpat=rutrum&in=rutrum&congue=neque&etiam=aenean&justo=auctor&etiam=gravida&pretium=sem&iaculis=praesent&justo=id&in=massa&hac=id&habitasse=nisl&platea=venenatis&dictumst=lacinia&etiam=aenean&faucibus=sit&cursus=amet&urna=justo&ut=morbi&tellus=ut&nulla=odio&ut=cras&erat=mi&id=pede&mauris=malesuada&vulputate=in&elementum=imperdiet&nullam=et&varius=commodo&nulla=vulputate&facilisi=justo&cras=in&non=blandit&velit=ultrices',
		industry: 'Finance',
		category: 'Data Science',
	},
	{
		id: 4,
		image:
			'http://liveinternet.ru/amet/consectetuer/adipiscing/elit/proin.jsp?vel=aliquam&augue=convallis&vestibulum=nunc&ante=proin',
		industry: 'Finance',
		category: 'Data Science',
	},
	{
		id: 5,
		image:
			'http://google.es/convallis/eget/eleifend/luctus.jpg?cubilia=curabitur&curae=in&nulla=libero&dapibus=ut&dolor=massa&vel=volutpat&est=convallis&donec=morbi&odio=odio&justo=odio&sollicitudin=elementum',
		industry: 'Technology',
		category: 'Web Development',
	},
	{
		id: 6,
		image:
			'https://netlog.com/amet/erat/nulla/tempus.json?nulla=fermentum&dapibus=donec&dolor=ut&vel=mauris&est=eget&donec=massa&odio=tempor&justo=convallis&sollicitudin=nulla&ut=neque&suscipit=libero&a=convallis&feugiat=eget&et=eleifend&eros=luctus&vestibulum=ultricies&ac=eu&est=nibh&lacinia=quisque&nisi=id&venenatis=justo&tristique=sit&fusce=amet&congue=sapien&diam=dignissim&id=vestibulum&ornare=vestibulum&imperdiet=ante&sapien=ipsum&urna=primis&pretium=in&nisl=faucibus&ut=orci&volutpat=luctus&sapien=et&arcu=ultrices&sed=posuere&augue=cubilia&aliquam=curae&erat=nulla&volutpat=dapibus&in=dolor&congue=vel&etiam=est&justo=donec&etiam=odio&pretium=justo&iaculis=sollicitudin&justo=ut&in=suscipit&hac=a&habitasse=feugiat&platea=et&dictumst=eros',
		industry: 'Healthcare',
		category: 'Data Science',
	},
	{
		id: 7,
		image:
			'http://phoca.cz/augue/quam/sollicitudin/vitae/consectetuer.jpg?orci=sed&luctus=nisl&et=nunc&ultrices=rhoncus&posuere=dui&cubilia=vel&curae=sem&duis=sed&faucibus=sagittis&accumsan=nam&odio=congue&curabitur=risus&convallis=semper&duis=porta&consequat=volutpat&dui=quam&nec=pede&nisi=lobortis&volutpat=ligula&eleifend=sit&donec=amet&ut=eleifend&dolor=pede&morbi=libero&vel=quis&lectus=orci&in=nullam&quam=molestie&fringilla=nibh&rhoncus=in&mauris=lectus&enim=pellentesque&leo=at&rhoncus=nulla&sed=suspendisse&vestibulum=potenti&sit=cras&amet=in&cursus=purus&id=eu&turpis=magna&integer=vulputate&aliquet=luctus&massa=cum&id=sociis&lobortis=natoque&convallis=penatibus&tortor=et&risus=magnis&dapibus=dis&augue=parturient&vel=montes&accumsan=nascetur&tellus=ridiculus&nisi=mus&eu=vivamus&orci=vestibulum&mauris=sagittis&lacinia=sapien&sapien=cum&quis=sociis&libero=natoque&nullam=penatibus&sit=et&amet=magnis&turpis=dis&elementum=parturient&ligula=montes&vehicula=nascetur&consequat=ridiculus&morbi=mus&a=etiam&ipsum=vel&integer=augue&a=vestibulum&nibh=rutrum&in=rutrum&quis=neque&justo=aenean&maecenas=auctor&rhoncus=gravida',
		industry: 'Healthcare',
		category: 'DevOps',
	},
	{
		id: 8,
		image:
			'http://typepad.com/sem/praesent/id/massa/id/nisl/venenatis.png?erat=sapien&quisque=arcu&erat=sed&eros=augue&viverra=aliquam&eget=erat&congue=volutpat&eget=in&semper=congue&rutrum=etiam&nulla=justo&nunc=etiam&purus=pretium&phasellus=iaculis&in=justo&felis=in&donec=hac&semper=habitasse&sapien=platea&a=dictumst&libero=etiam&nam=faucibus&dui=cursus&proin=urna&leo=ut&odio=tellus&porttitor=nulla&id=ut&consequat=erat&in=id&consequat=mauris&ut=vulputate&nulla=elementum&sed=nullam&accumsan=varius&felis=nulla&ut=facilisi&at=cras&dolor=non&quis=velit&odio=nec&consequat=nisi&varius=vulputate&integer=nonummy&ac=maecenas&leo=tincidunt&pellentesque=lacus&ultrices=at&mattis=velit&odio=vivamus&donec=vel&vitae=nulla&nisi=eget&nam=eros&ultrices=elementum&libero=pellentesque&non=quisque&mattis=porta&pulvinar=volutpat&nulla=erat&pede=quisque&ullamcorper=erat&augue=eros&a=viverra&suscipit=eget&nulla=congue&elit=eget&ac=semper&nulla=rutrum&sed=nulla&vel=nunc&enim=purus&sit=phasellus&amet=in&nunc=felis&viverra=donec&dapibus=semper&nulla=sapien&suscipit=a&ligula=libero&in=nam&lacus=dui&curabitur=proin&at=leo&ipsum=odio&ac=porttitor&tellus=id&semper=consequat&interdum=in&mauris=consequat&ullamcorper=ut&purus=nulla&sit=sed&amet=accumsan&nulla=felis&quisque=ut',
		industry: 'Technology',
		category: 'Web Development',
	},
	{
		id: 9,
		image:
			'http://discuz.net/nisl/duis/bibendum/felis/sed/interdum/venenatis.js?proin=at&eu=nibh&mi=in&nulla=hac&ac=habitasse&enim=platea&in=dictumst&tempor=aliquam&turpis=augue&nec=quam&euismod=sollicitudin&scelerisque=vitae&quam=consectetuer&turpis=eget&adipiscing=rutrum',
		industry: 'Finance',
		category: 'Data Science',
	},
	{
		id: 10,
		image:
			'http://apache.org/diam/erat/fermentum/justo.xml?vivamus=magnis&vel=dis&nulla=parturient&eget=montes&eros=nascetur&elementum=ridiculus&pellentesque=mus&quisque=vivamus&porta=vestibulum&volutpat=sagittis',
		industry: 'Finance',
		category: 'Data Science',
	},
	{
		id: 11,
		image:
			'http://meetup.com/elementum/in/hac/habitasse.jpg?etiam=metus&faucibus=vitae&cursus=ipsum&urna=aliquam&ut=non&tellus=mauris&nulla=morbi&ut=non&erat=lectus&id=aliquam&mauris=sit&vulputate=amet&elementum=diam&nullam=in&varius=magna&nulla=bibendum&facilisi=imperdiet&cras=nullam',
		industry: 'Healthcare',
		category: 'Mobile Development',
	},
	{
		id: 12,
		image:
			'http://networkadvertising.org/ligula/pellentesque/ultrices.jsp?leo=adipiscing&odio=lorem&condimentum=vitae&id=mattis&luctus=nibh&nec=ligula&molestie=nec&sed=sem&justo=duis&pellentesque=aliquam&viverra=convallis&pede=nunc&ac=proin&diam=at&cras=turpis&pellentesque=a&volutpat=pede&dui=posuere&maecenas=nonummy&tristique=integer&est=non&et=velit&tempus=donec&semper=diam',
		industry: 'Healthcare',
		category: 'Web Development',
	},
]