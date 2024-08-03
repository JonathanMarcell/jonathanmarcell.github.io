<script>
    import { base } from '$app/paths';
	import * as global from "./global"; //custom file
</script>
<!-- <div class="absolute left-1/2 -translate-x-1/2 w-11/12 h-px" style="background-color:{global.fg_light_color2}"></div> -->
<div class="flex h-screen -mt-16">
    <div class="w-fit m-auto text-center">
        <h1 style="color:{global.fg_light_color1}" class="text-6xl">Welcome</h1>
        <span class="h-4 block"/>
        <p>Yes, this is Jonathan Marcell's Web</p>
        <span class="h-4 block"/>
        <p>This page still in progress...</p>
        <p>This web is built using SvelteKit, just learning since August 2nd</p>
        <p>I will add something (maybe normal portfolio) here later :D</p>
        <p>For now click the <a href="{base}/interactive-portfolio">Interactive Portfolio</a></p>
        <span class="h-4 block"/>
    </div>
</div>

<style>
    p{font-size:1.25em;}
</style>
