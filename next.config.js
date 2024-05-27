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
				hostname: "king-prawn-app-nwcmm.ondigitalocean.app",
			},
		],
	},
};

export default nextConfig;
