<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>
<style>
    *{
        font-family: Helvetica, sans-serif;
    }
    nav{
        background-color: #060D0C;
        height: 4rem;
        border-radius: 150;
    }
    a{
        position: relative;
        left: 2rem;
        top: 50%;
        transform: translateY(-50%);
        color: azure;   
        font-size: medium;
    }
</style>
<nav>
	<a href="{base}/" aria-current={$page.url.pathname === '{base}/'}>
		Home
	</a>
	<a href="{base}/interactive-portfolio" aria-current={$page.url.pathname === '"{base}/interactive-portfolio" '}>
		Interactive Portfolio
	</a>
</nav>

<slot />