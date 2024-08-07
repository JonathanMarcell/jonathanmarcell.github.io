<script lang="ts">
    import "../app.css";
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import * as Select from "$lib/components/ui/select";
    import { bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1} from "./global.js";
	import { goto } from "$app/navigation";
    import { beforeUpdate } from 'svelte';

    function cssVariables(node:any, variables:any) {
        setCssVariables(node, variables);
        
        return {
            update(variables:any) {
                setCssVariables(node, variables);
            }
        }
    }

    function setCssVariables(node: { style: { setProperty: (arg0: string, arg1: any) => void; }; }, variables: { [x: string]: any; }) {
        for (const name in variables) {
            node.style.setProperty(`--${name}`, variables[name]);
        }
    }

    const lang=[
            {id:"en",value:"English"},
            {id:"id",value:"Bahasa"},
            {id:"jp",value:"日本語"},
        ];
    let defaultLangIndex=0;
    export let selectedLang : {id:string,value:string}=lang[0];

    let query : URLSearchParams;
    beforeUpdate(() => { // cannot get params when preload is true (layout.js)
        query = new URLSearchParams($page.url.searchParams.toString());
        refreshLanguage();
    });

    // functions
    function changeLanguage(langId:string) {
        console.log('language changed to '+langId);
        query.set('lang', langId);                  
        selectedLang=lang.findLast((x)=>x.id==langId)??lang[defaultLangIndex];
        goto($page.url.pathname+`?${query.toString()}`);
        return null;
    }

    function refreshLanguage(){               
        selectedLang=lang.findLast((x)=>x.id==query.get('lang'))??lang[defaultLangIndex];   
    }
    
    function goToHome() {       
        refreshLanguage(); 
        goto(base+`/?${query.toString()}`);
    }

    function goToInteractivePortfolio() {     
        refreshLanguage();   
        goto(base+`/interactive-portfolio?${query.toString()}`);
    }

    function debug(){
        const prefix="00 ";
        console.log(`${prefix}THIS IS DEBUG LOG`);
        console.log(`${prefix}`);
        console.log(`${prefix}`);
    }
</script>

<!-- THIS IS NAVIGATOR PANE THAT ALWAYS ON TOP OF SCREEN -->
<nav use:cssVariables={{bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1}}>
    <row>        
        <a class="link" href={'#'} on:click={()=>goToHome()}>Home            
            {#if $page.url.pathname.split("?")[0] === base+"/"}
                <div class="bottomliner"></div>
            {/if}
        </a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="link" href={'#'} on:click={()=>goToInteractivePortfolio()}>Interactive Portfolio
            {#if $page.url.pathname.split("?")[0] === base+"/interactive-portfolio"}
                <div class="bottomliner"></div>
            {/if}
        </a>
        <!-- <button class="mx-10" on:click={()=>debug()}>
            debug
        </button> -->
        <Select.Root bind:selected={selectedLang}
            onSelectedChange={(v) => {
                changeLanguage(v?.value??"en")}}
        >
            <Select.Trigger class="w-[150px] mt-3 ml-14 mr-2">
                <Select.Value placeholder={selectedLang.value}/>
            </Select.Trigger>
            <Select.Content>                    
                <Select.Group>
                    <Select.Label>Language</Select.Label>
                        {#each lang as language}      
                            <Select.Item value="{language.id}">{language.value}</Select.Item>    
                        {/each}
                </Select.Group>  
            </Select.Content>
        </Select.Root>
        
    </row>
</nav>

<slot />

<style>
    nav{
        /* margin: -8px; */
        background-color: var(--fg_dark_color1);
        height: 4rem;
        /* border-radius: 1rem; */
    }
    .link{
        display:inline-block;
        position: relative;
        left: 2rem;
        line-height: 4rem;
        margin-right: 1rem;
        color: var(--fg_light_color1);   
        font-size: 1.25em;
        font-style: normal;
        text-decoration: none;
    }
    .link:hover{
        color: var(--fg_light_color);   
    }    
    a:hover{
        color: var(--fg_light_color);   
    }    
    .bottomliner{
        height: 2px;
        margin-top: -2px;
        width: 100%;
        background-color: var(--fg_light_color1);
        /* margin-top: 1rem; */
    }
    row{
        display:flex;
    }
    /* .currentPage{
        text-decoration:underline; 
        cursor:default;
    } */
</style>
