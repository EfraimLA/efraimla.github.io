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
				<img src='/svg/world_logo.svg' alt='Mexico Flag' class='w-6 mr-1.5'>
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

		<!--    <p class="text-gray-600 dark:text-gray-300 text-sm font-light tracking-tight leading-tight md:text-base">These are-->
		<!--      some languages and technologies i've used before.-->
		<!--    </p>-->

		<div class='card icons'>
			<h2 class='text-xl font-medium'>Languages</h2>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/java_logo.svg' class='w-8' alt='Java Logo'>
				</div>

				<div class='progress-bar-80'>
					<span></span>
				</div>
			</div>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/python_logo.svg' class='w-8 svg-white' alt='Python Logo'>
				</div>

				<div class='progress-bar-40'>
					<span></span>
				</div>
			</div>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/typescript_logo.svg' class='w-8' alt='Typescript Logo'>
				</div>

				<div class='progress-bar-40'>
					<span></span>
				</div>
			</div>
		</div>

		<div class='card icons'>
			<h2 class='text-xl font-medium'>Frameworks</h2>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/angular_logo.svg' class='w-12' alt='Angular Logo'>
				</div>

				<div class='progress-bar-80'>
					<span></span>
				</div>
			</div>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/vuejs_logo.svg' class='w-10' alt='Vue Logo'>
				</div>

				<div class='progress-bar-40'>
					<span></span>
				</div>
			</div>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/quarkus_logo.svg' class='w-8' alt='Quarkus Logo'>
				</div>

				<div class='progress-bar-40'>
					<span></span>
				</div>
			</div>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/vertx_logo.svg' class='w-20' alt='Vertx Logo'>
				</div>

				<div class='progress-bar-40'>
					<span></span>
				</div>
			</div>
		</div>

		<div class='card icons'>
			<h2 class='text-xl font-medium'>Databases</h2>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/postgresql_logo.svg' class='w-10' alt='PostgreSQL Logo'>
				</div>

				<div class='progress-bar-80'>
					<span></span>
				</div>
			</div>
			<div class='card-item'>
				<div class='w-2/5 flex justify-center'>
					<img src='/svg/mongodb_logo.svg' class='w-8' alt='MongoDB Logo'>
				</div>

				<div class='progress-bar-80'>
					<span></span>
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

  #stack {
    @apply w-full min-h-screen grid items-center;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    .icons {
      img {
        @apply mr-4 my-4;
      }
    }

    .card {
      @apply flex flex-col items-center justify-self-center;
      width: 90%;

      .card-item {
        @apply w-full flex justify-around items-center;
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
    @apply mr-4;
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

  .svg-black {

  }

  .svg-white {
    svg {
      g {
        fill: white;
      }
    }
  }
</style>
