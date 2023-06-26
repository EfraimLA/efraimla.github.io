<script>
	import { _ } from 'svelte-i18n';

</script>

<section id='not-found'>
	<img src='/images/not_found.jpeg' alt='not found figurative image' />
	<h1 class='text-4xl'>{$_('not_found.title')}</h1>
	<h2>{$_('not_found.subtitle')}</h2>

	<br>
	<a href='/'>
		{$_('not_found.home_link')}
	</a>
</section>

<style lang='postcss'>
    section {
        @apply min-h-screen overflow-hidden m-0 p-2;
        @apply dark:bg-gray-800 dark:text-white;
        @apply flex flex-col items-center justify-center ;
    }

    img {
        @apply w-full mb-5 md:w-1/3;
    }
</style>