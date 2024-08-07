<script lang>
    import { base } from '$app/paths' 
    import { onMount } from 'svelte'
    import { Application, Text } from 'svelte-pixi'
    import * as PIXI from 'pixi.js'    
    import { Sprite, Loader , onTick , AnimatedSprite } from 'svelte-pixi'
	import Button from '@/components/ui/button/button.svelte';
	import { writable } from 'svelte/store';

    export let gameProp={width: 400,height: 400, state: [""]}

    $: width = gameProp.width
    $: height = gameProp.height
    $: state = gameProp.state

 
    const bgs = [
        './assets/backgrounds/Ocean_5/1.png',
        './assets/backgrounds/Ocean_5/2.png',
        './assets/backgrounds/Ocean_5/3.png',
        './assets/backgrounds/Ocean_5/4.png',
    ]
    let bgsPos=[{x:0,y:0}]

    onMount(() => { 
        bgsPos = [
            {x:width/2,y:height/2},
            {x:width/2,y:height/2},
            {x:width/2,y:height/2},
            {x:width/2,y:height/2}
        ]
	})
// FUNCTIONS
    function pressStart(){
        state.push("play")
        gameProp=gameProp
    }

// ANIMATION
    let count=0;
    onTick((delta) => {
        count += delta * 0.01
        bgsPos[1].x = bgsPos[1].x + Math.cos(count)*1/10
        bgsPos[2].x = bgsPos[2].x + Math.cos(count)*2/10
        bgsPos[3].x = bgsPos[3].x + Math.cos(count)*3/10
        bgsPos=bgsPos
    })
</script>

<!-- {@debug $$props} -->


<Loader resources={bgs}>
    {#each bgs as bg, i}
        <Sprite
            texture={PIXI.Texture.from(bg)}
            anchor={0.5}
            x={bgsPos[i].x}
            y={bgsPos[i].y}
            scale={1.75}
        />
    {/each}
    <Text
        text="Welcome to My Interactive Portfolio"
        anchor={0.5}
        x={width/2}
        y={200}
        style={{
            fill: 'white',
            fontFamily:'silver-regular',
            fontSize:'4em'
        }}
    />
    <Button on:click={()=>{pressStart()}} class="absolute -translate-x-1/2 -translate-y-1/2" style="top:{height/2}px; left:{width/2}px; font-family:'silver-regular'; font-size:1.7em">
        Start
    </Button>
</Loader>
               

<style>
    /* .gametext{    
        font-family: 'silver-regular';
        font-size:3em;
    }    */
</style>