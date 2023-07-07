<script lang='ts'>
	import '../app.scss';
	import uno from '../i18n';

	import { isLoading } from 'svelte-i18n';

	export const prerender = true;
</script>

{#if $isLoading}
	Please wait...
{:else}
	<slot />
{/if}
