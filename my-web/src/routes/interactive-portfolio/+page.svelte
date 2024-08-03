<script lang="ts">
    import { base } from '$app/paths';    
    import {onMount} from 'svelte'
    import Game from './game.svelte';

    const info_control="[WASD]:Move, [E]:Confirm, [Space]:Back, [F11]:Fullscreen in browser";
    let info=info_control;
    let parentWidth:number,parentHeight:number;

    onMount(() => {
		console.log('width', parentWidth)
		console.log('height', parentHeight)
		// if you need querySelector, it must be in here too
		// sections = document.querySelectorAll('section')
		// console.log('sections', sections)
	})
</script>

<div class="flex flex-col h-screen -mt-16 mx-1">
    <div id="game_window" bind:clientWidth={parentWidth} bind:clientHeight={parentHeight}
    class="aspect-game-verti md:aspect-game-horiz md:w-auto md:h-4/5 w-full h-auto m-auto bg-slate-800 p-1 rounded-lg mt-20">        
        <!-- <h1>This is second page (interactive portfolio here)</h1> -->
        {#key parentWidth,parentHeight,window}
            <Game {parentWidth} {parentHeight}/>
        {/key}
    </div>
    <p class="m-auto md:w-auto w-full font-mono">
        info: {info}
    </p>
</div>