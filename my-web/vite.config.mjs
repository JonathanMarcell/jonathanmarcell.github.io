import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig(({mode})=>({
	plugins: [sveltekit()],		
	resolve:{
		alias:{
			"$fonts": mode === 'production' ? "./static/fonts" : "../fonts",
			"$assets": mode === 'production' ? "./static/assets" : "../assets",
		}
	},
	optimizeDeps: {
		include: ['pixi.js'],
	  },
	server: {
		fs: {
			allow: ["static/fonts","static/assets/*"]
		},
	  },
}));
