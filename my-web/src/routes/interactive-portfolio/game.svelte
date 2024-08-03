
<script lang="ts">    
    import { base } from '$app/paths';
    import { Application, Text } from 'svelte-pixi'
    import * as PIXI from 'pixi.js'    
    import { Sprite, Loader , onTick , AnimatedSprite } from 'svelte-pixi'
    // import * as  from "../../font.css"
    

    // change window size from bound div parent in page
    export let parentWidth;
    export let parentHeight;
    let blocksize;
    const assetPath="../../src/assets-pixi";

    let bgs = [
        assetPath+'/backgrounds/Ocean_5/1.png',
        assetPath+'/backgrounds/Ocean_5/2.png',
        assetPath+'/backgrounds/Ocean_5/3.png',
        assetPath+'/backgrounds/Ocean_5/4.png',
    ]
    //

</script>

{#if parentWidth!=undefined}
    <Application width={parentWidth-8} height={parentHeight-8}>
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


<style>
    @font-face {
        font-family: 'silver-regular';
        font-style: normal;
        src: local(''), url('/fonts/Silver.ttf') format('truetype'),
    }

    @font-face {
        font-family: 'rajdhani';
        font-style: normal;
        src: local(''), url('/fonts/Rajdhani-Regular.ttf') format('truetype'),
    }
    
    .gamefont{
        font-family: 'silver-regular';
        font-size: 2em;
    }
</style>

