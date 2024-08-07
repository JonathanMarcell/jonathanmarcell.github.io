<script lang="ts">
    import { base } from '$app/paths' 
    import { onMount } from 'svelte'
    import { Application, Text } from 'svelte-pixi'
    import * as PIXI from 'pixi.js'    
    import { Sprite, Loader , onTick , AnimatedSprite } from 'svelte-pixi'
    import MainMenu from '$lib/gameComponents/mainMenu.svelte'

    export let parentWidth:number;
    export let parentHeight:number;

    let gameProp={
        width: parentWidth-8,
        height: parentHeight-8,
        state: [""]               // menu/play(map)/dialogue(npc)/inspect(object)
    }
    const info_control="[WASD]:Move, [E]:Confirm, [Space]:Back, [F11]:Fullscreen(browser)";
    let info=info_control;
    let hasNotif=true;
    let blocksize;
    $: width = gameProp.width
    $: height = gameProp.height
    $: state = gameProp.state;

//INIT    
    onMount(() => { // WHAT TO DO WHEN REVISIT THIS PAGE (reload, change page etx)
        startGame();
	})

//FUNCTIONS
    function dismissInfo(){
        info="";
        hasNotif=!hasNotif;
    }
    function startGame(){ // SET INITIAL STATE
        console.log("START")
        gameProp.state=["menu"];        
        gameProp=gameProp;
        //
    }  
</script>
<!-- PIXI APPLICATION -->
{#if parentWidth!=undefined}
    <Application {width} {height} antialias>     
        <Text text="gameProp.state = {state[state.length-1]}" anchor={0} x={20} y={30} style={{fill: 'white', fontFamily:'silver-regular', fontSize:'4em'}}/>               
        <!-- {#if true} -->
        {#if state[state.length-1]==="menu"}
            <MainMenu bind:gameProp={gameProp}/>
        {:else if state[state.length-1]==="play"}
            <!-- play state -->
        {:else if state[state.length-1]==="dialogue"} 
            <!-- dialogue state -->
        {:else if state[state.length-1]==="inspect"}   
            <!-- inspect state -->
        {/if}
    </Application>    
{:else}
    <div class="flex flex-col h-full"><p class="text-center my-auto font-mono text-3xl">Loading...</p></div>
{/if}

<!-- INFO -->
{#if hasNotif==true}
    <p class="m-auto mt-1 md:w-auto w-full font-mono">
        Info: {info} <button type='button' on:click={()=>dismissInfo()} class="text-yellow-200 cursor-pointer">[OK]</button>
    </p>  
{/if}

<!-- SCREEN CONTROL (float/absolute, bottom center achor) -->
<div>
</div>


<!-- DEBUG -->
<p class="absolute top-0 -left-60 z-10">DEBUG</p>
<p class="absolute top-8 -left-60 z-10">{parentWidth}x{parentHeight}</p>
<p class="absolute top-16 -left-60 z-10">{state}</p>

<!-- STYLES -->
<style>
    /* .gametext{    
        font-family: 'silver-regular';
        font-size:3em;
    } */
    /* .custom :global(canvas) {
        border: 5px solid tomato;
        border-radius: 5px;
    }  */
</style>