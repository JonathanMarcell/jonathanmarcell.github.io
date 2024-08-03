
<script lang="ts">    
    import { base } from '$app/paths';
    import { Application, Text } from 'svelte-pixi'
    import * as PIXI from 'pixi.js'    
    import { Sprite, Loader , onTick , AnimatedSprite } from 'svelte-pixi'

    // change window size from bound div parent in page
    export let parentWidth;
    export let parentHeight;
    export let window;
    let blocksize;

    let bgs = [
        './assets/backgrounds/Ocean_5/1.png',
        './assets/backgrounds/Ocean_5/2.png',
        './assets/backgrounds/Ocean_5/3.png',
        './assets/backgrounds/Ocean_5/4.png',
    ]
    //

</script>
<!-- <svelte:head>
    <link rel="preload" href="$fonts/Silver.tff" as="silver-regular" type="font/truetype" crossorigin>
</svelte:head> -->

{#if parentWidth!=undefined}
    <Application width={parentWidth-8} height={parentHeight-8} resizeTo={window}>
        {#each bgs as bgpart, i}
            <Sprite texture={PIXI.Texture.from(bgpart)}
            anchor={0.1} x={0} y={0} scale={1.75}
            />
        {/each}
        <Text text="PIXIJS GAME WINDOW" anchor={0.5} x={parentWidth/2} y={parentHeight/2}
            style={{fill: 'white', fontFamily:'silver-regular', fontSize:'5em'}}/>
    </Application>    
{:else}
    <div class="text-center bottom-10">Loading screen...</div>
{/if}


<!-- <style>  
    @import "$fonts/font.css";
    /* .gamefont{
        font-family: 'silver-regular';
        font-size: 2em;
    } */
</style> -->

