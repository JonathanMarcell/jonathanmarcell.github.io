import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [sveltekit()],		
	optimizeDeps: {
		include: ['pixi.js'],
	  },
	//   resolve: {
	// 	alias: {
	// 	  'pixi.js': path.resolve(__dirname, './node_modules/pixi.js/dist/browser/pixi.mjs')
	// 	}
	//   },
}) ;
