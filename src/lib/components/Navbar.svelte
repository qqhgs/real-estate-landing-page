<script>
	import { onMount } from 'svelte';
	let navigation = ['home', 'about', 'services', 'contact'];
	let container;
	let nav;

	onMount(() => {
		/* document.querySelector('.canvas').innerHTML = nav.outerHTML; */
	});
</script>

<div bind:this={container} class="canvas" />

<section class="navbar h-20 sm:h-24 md:h-auto xl:mt-7 flex items-center mx-auto px-8 xl:px-0">
	<div class="logo mr-auto -ml-8 xl:ml-0">
		<a href="/">
			<img
				class="h-20 sm:h-24 md:h-auto bg-cover bg-center"
				src="/img/logo.png"
				alt="Real Easteae Landing Page"
			/>
		</a>
	</div>

	<div class="burger-btn">
		<i />
		<i />
		<i />
	</div>

	<div bind:this={nav} class="container hidden md:flex justify-end items-center">
		<ul class="flex justify-end">
			{#each navigation as item, i}
				<li class="mr-5 font-semibold">
					{#if i === 0}
						<a class="text-blue-400 border-b-4 pb-2 border-blue-400" href={`#${item}`}
							>{item.charAt(0).toUpperCase() + item.slice(1)}</a
						>
					{:else}
						<a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
					{/if}
				</li>
			{/each}
		</ul>

		<div class="auth font-semibold">
			<span class="auth_signup btn btn-blue">Sign up</span>
		</div>
	</div>
</section>

<style type="postcss">
	.navbar {
		width: 100%;
	}
	.btn {
		@apply inline-block whitespace-nowrap font-bold py-2 px-4 rounded;
	}
	.btn-blue {
		@apply bg-blue-400 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-500;
	}
	@screen xl {
		.logo {
			width: 252px;
			height: 100%;
		}
		.logo img {
			width: 100%;
			height: 100%;
		}
	}
	.burger-btn {
		@apply flex md:hidden flex-col items-end justify-between m-8 h-8 w-10;
	}
	.burger-btn i {
		@apply bg-gray-500 h-1;
		width: 100%;
	}
	.burger-btn i:nth-of-type(2) {
		width: 75%;
	}
	.burger-btn i:last-of-type {
		width: 90%;
	}
	.bc {
		border: 1px solid red;
	}
</style>
