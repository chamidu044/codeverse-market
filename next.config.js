/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "codeverse-market.vercel.app",
			},
		],
	},
};

module.exports = nextConfig;
