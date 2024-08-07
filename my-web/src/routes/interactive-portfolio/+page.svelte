<script lang="ts">
    import { base } from '$app/paths';    
    import {onMount} from 'svelte'
    import Game from './game.svelte';
    
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
    class="md:aspect-gameHoriz aspect-gameVerti md:w-auto md:h-4/5 w-full h-auto m-auto bg-slate-800 p-1 rounded-lg mt-20">    
        <!-- {#await import('./game.svelte') then Game}
            <svelte:component this={Game} {parentWidth} {parentHeight}/>
        {/await} -->
        {#key {parentHeight}}
            <Game {parentWidth} {parentHeight}/>
        {/key}
    </div>
</div>