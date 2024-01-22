<script lang='ts'>
	import '../app.scss';
	// noinspection ES6UnusedImports
	import uno from '../i18n'; // This is needed to load the translations
	import { isLoading } from 'svelte-i18n';
	import Footer from '../components/Footer.svelte';

	export const prerender = true;
</script>

{#if $isLoading}
	Please wait...
{:else}
	<slot />
	<Footer />
{/if}
