<script lang='ts'>
	import { _ } from 'svelte-i18n';
</script>

<div id='home'>
	<!-- Landing -->
	<div id='landing'>
		<div id='text'>
			<h1 class='font-mono text-2xl mb-1 md:text-4xl'>
				{@html $_('home.title')}
			</h1>
			<small class='text-gray-600 dark:text-gray-300 text-sm font-light tracking-tight leading-tight md:text-xl'>
				{$_('home.subtitle')}
			</small>
		</div>
		<!-- Personal Info -->
		<div class='w-full flex flex-wrap justify-evenly mt-6 md:flex-col md:items-center'>
			<div class='flex items-center px-1 md:mb-4'>
				<img src='/svg/mexico_flag.svg' alt='Mexico Flag' class='w-6 mr-1.5'>
				<span class='text-sm md:text-base'>Mexican</span>
			</div>
			<div class='flex items-center px-1 md:mb-4'>
				<img src='/svg/birthday_cake.svg' alt='Birthday Cake' class='w-6 mr-1.5'>
				<span class='text-sm mt-0.5 md:text-base'>19 Years</span>
			</div>
			<div class='flex items-center px-1 cursor-pointer' link="redirect('https://github.com/EfraimLA')">
				<img src='/svg/logo_github.svg' alt='Github Logo' class='w-6 mr-1.5 dark:invert'>
				<span class='text-sm md:text-base'>efraimla</span>
			</div>
		</div>
	</div>

	<!-- Scroll Arrow -->
	<div id='scroll_arrow' class='absolute flex w-screen justify-center bottom-2'>
		<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 arrow' fill='none' viewBox='0 0 24 24' stroke='currentColor'
				 stroke-width='2'>
			<path stroke-linecap='round' stroke-linejoin='round' d='M16 17l-4 4m0 0l-4-4m4 4V3' />
		</svg>
	</div>
</div>

<style lang='scss'>
  #home {
    @apply w-screen min-h-screen dark:text-white;
  }

  #landing {
    @apply w-full min-h-screen flex flex-col items-center justify-center;

    #text {
      @apply mx-5;
    }
  }

  #stack {
    @apply w-full min-h-screen flex flex-col items-center justify-center;

    .icons {
      img {
        @apply m-4;
      }
    }
  }
</style>
