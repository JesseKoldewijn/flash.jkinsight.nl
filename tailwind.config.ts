import { Config } from "tailwindcss";

const Tailwindcss = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;

export default Tailwindcss;
