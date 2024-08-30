import {hostname} from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
				port: '',
			},
		],
	},
}

export default nextConfig
