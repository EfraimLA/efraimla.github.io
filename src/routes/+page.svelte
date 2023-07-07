<script lang='ts'>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let showScrollArrow = true;

	onMount(async () => window.addEventListener('scroll', () => showScrollArrow = window.scrollY <= 400));
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
				<span class='text-sm md:text-base'>
					{$_('home.nationality')}
				</span>
			</div>
			<div class='flex items-center px-1 md:mb-4'>
				<img src='/svg/birthday_cake.svg' alt='Birthday Cake' class='w-6 mr-1.5'>
				<span class='text-sm mt-0.5 md:text-base'>
					{$_('home.age')}
				</span>
			</div>
			<div class='flex items-center px-1 cursor-pointer' link="redirect('https://github.com/EfraimLA')">
				<img src='/svg/logo_github.svg' alt='Github Logo' class='w-6 mr-1.5 dark:invert'>
				<span class='text-sm md:text-base'>
					efraimla
				</span>
			</div>
		</div>
	</div>

	<!-- Scroll Arrow -->
	{#if showScrollArrow}
		<div id='scroll_arrow' class='absolute flex w-screen justify-center bottom-2' transition:fade>
			<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 arrow' fill='none' viewBox='0 0 24 24'
					 stroke='currentColor'
					 stroke-width='2'>
				<path stroke-linecap='round' stroke-linejoin='round' d='M16 17l-4 4m0 0l-4-4m4 4V3' />
			</svg>
		</div>
	{/if}

	<!-- My Stack Section -->
	<div id='stack' class='text-center font-mono font-medium'>

		<h1 class='font-medium'>My Stack</h1>
		<p class='text-gray-600 dark:text-gray-300 text-sm font-light tracking-tight leading-tight md:text-base'>These are
			some languages and technologies i've used before.
		</p>

		<h2 class='text-xl font-medium'>Languages</h2>
		<div class='w-full flex justify-evenly flex-wrap items-center icons'>
			<img src='/svg/java_logo.svg' class='w-8' alt='Java Logo'>
			<img src='/svg/python_logo.svg' class='w-8' alt='Python Logo'>
			<img src='/svg/typescript_logo.svg' class='w-8' alt='Typescript Logo'>
		</div>

		<h2 class='text-xl font-medium'>Frameworks</h2>
		<div class='w-full flex justify-evenly flex-wrap items-center mt-2 icons'>
			<img src='/svg/angular_logo.svg' class='w-12' alt='Angular Logo'>
			<img src='/svg/vuejs_logo.svg' class='w-10' alt='Vue Logo'>
			<img src='/svg/quarkus_logo.svg' class='w-8' alt='Quarkus Logo'>
			<img src='/svg/vertx_logo.svg' class='w-20' alt='Vertx Logo'>
		</div>

		<h2 class='text-xl font-medium'>Databases</h2>
		<div class='w-full flex justify-evenly flex-wrap items-center mt-2 icons'>
			<img src='/svg/postgresql_logo.svg' class='w-10' alt='PostgreSQL Logo'>
			<img src='/svg/mongodb_logo.svg' class='w-36' alt='MongoDB Logo'>
		</div>
	</div>

	<!-- My Projects Section -->
	<!-- <div id="projects" class="text-center font-mono font-medium">
		<h1 class="font-medium">My Projects</h1>
		<p class="text-gray-600 dark:text-gray-300 text-sm font-light tracking-tight leading-tight md:text-base">Here are
			some
			projects i've worked on.
		</p>
		<div class="w-full flex justify-evenly flex-wrap items-center mt-2">
			<div class="w-full flex flex-col items-center justify-center">
				<img src="assets/svg/logo_github.svg" alt="Github Logo" class="w-6 mr-1.5 dark:invert">
				<span class="text-sm md:text-base">efraimla/quarkus-rest-api</span>
			</div>
		</div>
	</div> -->
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
