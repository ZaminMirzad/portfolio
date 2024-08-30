import IconCloud from '@/components/magicui/icon-cloud/IconCloud'
import Menu from '@/components/Menu'

const slugs = [
	'typescript',
	'javascript',
	'dart',
	'java',
	'react',
	'flutter',
	'android',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'git',
	'jira',
	'github',
	'gitlab',
	'visualstudiocode',
	'androidstudio',
	'sonarqube',
	'figma',
]

export default function Skills() {
	return (
		<section className="w-full max-w-5xl py-12">
			<div className="bg-earia-black h-full w-full rounded-2xl border p-10 overflow-y-auto border-jet relative">
				<Menu />

				<h1 className="underline decoration-orange-yellow underline-offset-8">
					Skills
				</h1>
				<IconCloud
					iconSlugs={
						slugs
					}
				/>
			</div>
		</section>
	)
}
