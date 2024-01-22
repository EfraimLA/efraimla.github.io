<script lang='ts'>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import AngularLogo from '../components/logos/AngularLogo.svelte';
	import BirthdayCake from '../components/logos/BirthdayCake.svelte';
	import WorldLogo from '../components/logos/WorldLogo.svelte';
	import GitHubLogo from '../components/logos/GitHubLogo.svelte';
	import JavaLogo from '../components/logos/JavaLogo.svelte';
	import PythonLogo from '../components/logos/PythonLogo.svelte';
	import TypescriptLogo from '../components/logos/TypescriptLogo.svelte';
	import VueJSLogo from '../components/logos/VueJSLogo.svelte';
	import QuarkusLogo from '../components/logos/QuarkusLogo.svelte';
	import VertxLogo from '../components/logos/VertxLogo.svelte';
	import PostgreSQLLogo from '../components/logos/PostgreSQLLogo.svelte';
	import MongoDBLogo from '../components/logos/MongoDBLogo.svelte';

	let showScrollArrow = true;

	const arrowListener = () => showScrollArrow = window.scrollY <= 400;

	onMount(() => {
		window.addEventListener('scroll', arrowListener);

		return () => window.removeEventListener('scroll', arrowListener);
	});

	const handleGitHubButton = () => window.open('https://github.com/EfraimLA', '_blank');
</script>

<svelte:head>
	<title>Efraim's Porfolio</title>
</svelte:head>

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
				<WorldLogo class='w-6 mr-1.5' />
				<span class='text-sm md:text-base'>
					{$_('home.nationality')}
				</span>
			</div>
			<div class='flex items-center px-1 md:mb-4'>
				<BirthdayCake class='w-6 mr-1.5' />
				<span class='text-sm mt-0.5 md:text-base'>
					{$_('home.age')}
				</span>
			</div>
			<div class='flex items-center px-1 cursor-pointer'
					 on:click='{handleGitHubButton}'>
				<GitHubLogo class='w-6 mr-1.5' />
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
	<div id='stack-container'>
		<div id='stack'>

			<!--    <p class="text-gray-600 dark:text-gray-300 text-sm font-light tracking-tight leading-tight md:text-base">These are-->
			<!--      some languages and technologies i've used before.-->
			<!--    </p>-->

			<div class='card'>
				<h2 class='text-xl font-medium'>Languages</h2>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<JavaLogo class='w-8' />
					</div>

					<div class='progress-bar-80'>
						<span></span>
					</div>
				</div>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<PythonLogo class='w-10' />
					</div>

					<div class='progress-bar-40'>
						<span></span>
					</div>
				</div>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<TypescriptLogo class='w-9' />
					</div>

					<div class='progress-bar-40'>
						<span></span>
					</div>
				</div>
			</div>

			<div class='card'>
				<h2 class='text-xl font-medium'>Frameworks</h2>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<AngularLogo class='w-14' />
					</div>

					<div class='progress-bar-80'>
						<span></span>
					</div>
				</div>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<VueJSLogo class='w-11' />
					</div>

					<div class='progress-bar-40'>
						<span></span>
					</div>
				</div>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<QuarkusLogo class='w-10' />
					</div>

					<div class='progress-bar-40'>
						<span></span>
					</div>
				</div>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<VertxLogo class='w-20' />
					</div>

					<div class='progress-bar-40'>
						<span></span>
					</div>
				</div>
			</div>

			<div class='card'>
				<h2 class='text-xl font-medium'>Databases</h2>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<PostgreSQLLogo class='w-12' />
					</div>

					<div class='progress-bar-80'>
						<span></span>
					</div>
				</div>
				<div class='card-item'>
					<div class='w-2/5 flex justify-center'>
						<MongoDBLogo class='w-8' />
					</div>

					<div class='progress-bar-80'>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>


<style lang='scss'>
  #home {
    @apply w-screen min-h-screen dark:text-white;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
  }

  #landing {
    @apply w-full min-h-screen flex flex-col items-center justify-center;

    #text {
      @apply mx-5;
    }
  }

  #stack-container {
    @apply min-h-screen flex flex-col items-center justify-center;
  }

  #stack {
    @apply w-full grid items-center;
    @apply text-center font-mono font-medium;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    row-gap: 50px;

    .icons {
      .logo, img {
        @apply mr-4 my-4;
      }
    }

    .card {
      @apply flex flex-col items-center justify-self-center;
      width: 90%;

      .card-item {
        @apply w-full flex justify-around items-center my-3;
      }
    }
  }

  @keyframes float {
    0% {
      filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.6));
      transform: translateY(0);
    }

    50% {
      filter: drop-shadow(0 25px 15px rgba(0, 0, 0, 0.2));
      transform: translatey(-10px);
    }

    100% {
      filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.6));
      transform: translateY(0px);
    }
  }

  #scroll_arrow {
    animation: float 3s ease-in-out infinite;
  }

  @mixin progress-bar-calc($progress) {
    @apply mr-5;
    height: 8px;
    width: 100%;
    //border-radius: 5px;
    border: 1px solid black;
    color: black;
    overflow: hidden;
    position: relative;


    span {
      height: 100%;
      display: block;
      width: $progress;
      color: black;
      line-height: 30px;
      position: absolute;
      text-align: end;
      padding-right: 5px;
      background-color: black;

      @apply dark:bg-white;
    }

    @apply dark:border-white;
  }

  @mixin progress-bar-generate($limit: 10) {
    @for $i from 1 through $limit {
      .progress-bar-#{($i * 10)} {
        @include progress-bar-calc($i * 10%);
      }
    }
  }

  @include progress-bar-generate();


</style>
