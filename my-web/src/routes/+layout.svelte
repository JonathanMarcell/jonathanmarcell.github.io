<script lang="ts">
    import "../app.css";
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import * as Select from "$lib/components/ui/select";
    import { bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1} from "./global.js";

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
            {id:"en",text:"English"},
            {id:"id",text:"Bahasa"},
            {id:"jp",text:"日本語"},
        ];
    let selected_lang=lang[0].text;
</script>


<nav use:cssVariables={{bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1}}>
    <row>        
        {#if $page.url.pathname != base+"/"}
            <a  class="link" href="{base}/">Home</a>
        {:else} 
            <div class="link currentPage">Home</div>
        {/if}
        
        {#if $page.url.pathname != base+"/interactive-portfolio"}
            <a class="link" href="{base}/interactive-portfolio">Interactive Portfolio</a>
        {:else} 
            <div class="link currentPage">Interactive Portfolio</div>
        {/if}  
        <Select.Root portal={null}>
            <Select.Trigger class="w-[150px] mt-3 ml-16">
                <Select.Value placeholder="English" value={selected_lang}/>
            </Select.Trigger>
            <Select.Content>                    
                <Select.Group>
                    <Select.Label>Language</Select.Label>
                        {#each lang as language}      
                            <Select.Item value="{language.id}">{language.text}</Select.Item>    
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
    .currentPage{
        text-decoration:underline; 
        cursor:default;
    }
</style>
