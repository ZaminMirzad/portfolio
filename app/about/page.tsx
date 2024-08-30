import Menu from '@/components/Menu'

export default function About() {
	return (
		<section className="w-full max-w-5xl py-12">
			<div className="bg-earia-black h-full w-full rounded-2xl border p-10 overflow-y-auto border-jet relative">
				<Menu />
				<h1 className="underline decoration-orange-yellow underline-offset-8">
					About
				</h1>
			</div>{' '}
		</section>
	)
}