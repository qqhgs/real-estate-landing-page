<section class="lg:flex my-16">
	<div class="flex-1 lg:p-5">
		<img class="lg:rounded-2xl" src="/img/gambar-1.png" alt="section" />
	</div>
	<div class="flex-1 lg:py-16 px-10">
		<h2 class="text-2xl lg:text-5xl pt-4 font-extrabold leading-relaxed tracking-wide">
			Why you should choose our services?
		</h2>
		<p class="my-4 lg:text-lg">
			We're reputable real estate agency with over a decade of service. We serve out clients with
			the best and comfy place
		</p>
		<ul>
			<li>Professional and Competent agency</li>
			<li>Over 75k partners work with us</li>
			<li>Trustworthy and certified as best agency since 2010</li>
		</ul>
		<button class="btn btn-blue mt-6">See more</button>
	</div>
</section>

<style type="postcss">
	li {
		@apply relative pl-6 py-1;
	}
	li::before {
		@apply absolute h-4 w-4 bg-cover top-2 left-0;
		content: '';
		background-image: url('/svg/check.svg');
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
</style>
