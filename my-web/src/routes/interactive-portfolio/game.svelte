
<script lang="ts">    
    import { Application, Text } from 'svelte-pixi'
    import * as PIXI from 'pixi.js'    
    import { Sprite, onTick } from 'svelte-pixi'

    // change window size from bound div parent in page
    export let parentWidth;
    export let parentHeight;
    let blocksize;//

</script>
{#if parentWidth!=undefined}
<!-- <div class="rounded-md object-cover" style="width:{parentWidth-8};height:{parentHeight-8}"> -->
    <Application width={parentWidth-8} height={parentHeight-8}>
        <Text text="PIXIJS GAME WINDOW" anchor={0.5} x={parentWidth/2} y={parentHeight/2} style={{fill: 'white'}}
    />
        
    </Application>    
<!-- <div> -->
{:else}
    <div class="text-center bottom-10">Loading screen...</div>
{/if}

<!-- <canvas class="relative rounded-lg object-cover bg-slate-700 w-full h-full">

</canvas> -->

