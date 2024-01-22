<script lang='ts'>
	import { _ } from 'svelte-i18n';
</script>

<footer>
	{@html $_('footer.title')}
	<a href='mailto:contact@linset.org'>contact@linset.org</a>
</footer>

<style lang='scss'>
  footer {
    @apply w-full flex flex-col items-center justify-center text-white font-mono text-sm p-4 mt-40;
    min-height: 10vh;
  }

  a {
    @apply decoration-0;
  }
</style>