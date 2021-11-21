<script>
	const partners = ['partners-4', 'partners-5', 'partners-2', 'partners-3', 'partners-1'];
</script>

<section class="mt-72">
	<p class="text-xl w-11/12 mx-auto font-bold text-gray-600 block text-center mb-4">
		We've already working with thousands of agencies around the world
	</p>
	<div class="partners px-8 flex flex-col sm:flex-row flex-wrap items-center justify-center">
		{#each partners as item}
			<div class="mr-4 w-40 flex items-center mb-4">
				<img class="flex-1" src={`/img/${item}.png`} alt={item} />
			</div>
		{/each}
	</div>
</section>

<style type="postcss">
	.partners div:last-of-type {
		@apply mr-0;
	}
	img {
		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
	}
	.partners > div:last-of-type img {
		@apply -mt-8;
	}
</style>
