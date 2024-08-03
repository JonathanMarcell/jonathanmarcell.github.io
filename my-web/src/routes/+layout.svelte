<script lang="ts">
    import "../app.css";
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import * as Select from "$lib/components/ui/select";
    import { bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1} from "./global.js";
	import { goto } from "$app/navigation";

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
        
    let query = new URLSearchParams($page.url.searchParams.toString());
    let selectedLang : {id:string,value:string};
    
    // functions
    function changeLanguage(langId:string) {
        console.log('lang changed to '+langId);
        query = new URLSearchParams($page.url.searchParams.toString());
        query.set('lang', langId);                  
        selectedLang=lang.findLast((x)=>x.id==langId)??lang[0];
        goto($page.url.pathname+`?${query.toString()}`);
        return null;
    }

    function refreshLanguage(){
        query = new URLSearchParams($page.url.searchParams.toString());                
        selectedLang=lang.findLast((x)=>x.id==query.get('lang'))??lang[0];   
    }
    
    function goToHome() {       
        refreshLanguage(); 
        goto(base+`/?${query.toString()}`);
    }

    function goToInteractivePortfolio() {     
        refreshLanguage();   
        goto(base+`/interactive-portfolio?${query.toString()}`);
    }
</script>

<!-- THIS IS NAVIGATOR PANE THAT ALWAYS ON TOP OF SCREEN -->
<nav use:cssVariables={{bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1}}>
    <row>        
        <a class="link" href="#" on:click={()=>goToHome()}>Home</a>
        <!-- {#if $page.url.pathname != base+"/"}
        {:else} 
            <div class="link currentPage">Home</div>
        {/if} -->
        
        <a class="link" href="#" on:click={()=>goToInteractivePortfolio()}>Interactive Portfolio</a>
        <!-- {#if $page.url.pathname != base+"/interactive-portfolio"}
        {:else} 
            <div class="link currentPage">Interactive Portfolio</div>
        {/if}   -->
        <button class="mx-10" on:click={()=>console.log(query.get('lang'))}>
            check
        </button>
        <Select.Root bind:selected={selectedLang}
            onSelectedChange={(v) => {changeLanguage(v?.value??"en")}}
        >
            <Select.Trigger class="w-[150px] mt-3 ml-14 mr-2">
                <Select.Value placeholder="Default"/>
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
    row{
        display:flex;
    }
    /* .currentPage{
        text-decoration:underline; 
        cursor:default;
    } */
</style>
