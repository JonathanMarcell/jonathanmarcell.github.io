<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';    
    import { bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1,} from "./global.js";
   
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

</script>
<style>
    nav{
        margin: -8px;
        background-color: var(--fg_dark_color1);
        height: 4rem;
        /* border-radius: 1rem; */
    }
    a{
        position: relative;
        left: 2rem;
        line-height: 4rem;
        margin-right: 1rem;
        color: var(--fg_light_color1);   
        font-size: medium;
        font-style: normal;
        text-decoration: none;
    }
    a:hover{
        color: var(--fg_light_color);   
    }
</style>
<nav use:cssVariables={{bg_color, fg_light_color, fg_light_color1, fg_light_color2, fg_dark_color, fg_dark_color1}}>
	<a href="{base}/" aria-current={$page.url.pathname === '{base}/'}>
		Home
	</a>
	<a href="{base}/interactive-portfolio" aria-current={$page.url.pathname === '"{base}/interactive-portfolio" '}>
		Interactive Portfolio
	</a>
</nav>

<slot />