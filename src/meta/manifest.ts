import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "1BEAT",
		short_name: "1BEAT PWA",
		description: "Next.js App",
		theme_color: "#ffffff",
		background_color: "#004740",
		display: "fullscreen",
		orientation: "portrait",
		scope: "/",
		start_url: "/",
		icons: [
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "72x72",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "96x96",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "128x128",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "144x144",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "152x152",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "192x192",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "384x384",
				type: "image/svg",
			},
			{
				src: "/assets/images/logo-dark.svg",
				sizes: "512x512",
				type: "image/svg",
			},
		],
	};
}
