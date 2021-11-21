<section class="flex flex-col lg:flex-row mb-20 lg:my-44 relative">
	<div class="py-8 lg:py-24 px-8 z-10 order-2 lg:order-1">
		<h3
			class="text-3xl lg:text-5xl tracking-wide leading-normal font-extrabold lg:text-gray-700 lg:mt-10"
		>
			Best Choices for your Home Sweet Home
		</h3>
		<p class="my-4 text-gray-800 lg:w-4/6">
			You might wondering, what's look like inside your house. You can choose whether is
			full-furnished or not with our services
		</p>
		<div class="flex flex-wrap lg:my-16">
			<div class="count flex flex-col">
				<span>595+</span>
				<span>Property sold</span>
			</div>
			<div class="count flex flex-col">
				<span>121k</span>
				<span>Loyal clients</span>
			</div>
			<div class="count flex flex-col">
				<span>52,4k</span>
				<span>Affiliate partners</span>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row items-center mt-8">
			<button class="btn btn-blue mb-2">Browse our exclusive properties</button>
			<span class="text-gray-700 ml-4">Ger free consultant</span>
		</div>
	</div>
	<div class="p-8 relative mt-8 order-1">
		<img
			class="bedroom absolute -top-0 -right-8 lg:right-0 w-2/6"
			src="/img/gambar-3.png"
			alt="Bedroom"
		/>
		<img class="rounded-xl" src="/img/gambar-2.png" alt="Living room" />
		<img
			class="bedroom absolute -bottom-1 -left-10 lg:-left-1 w-2/6"
			src="/img/gambar-4.png"
			alt="Bedroom"
		/>
	</div>
</section>

<style type="postcss">
	.count {
		@apply mb-4;
	}
	.count span:nth-of-type(1) {
		@apply text-4xl font-bold mr-16;
	}
	.btn {
		@apply font-bold py-3 px-6 rounded-lg tracking-wide;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-600;
	}
	.bc {
		border: 1px solid red;
	}
</style>
