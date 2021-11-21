<script>
	let payments = ['mastercard', 'visa', 'paypal', 'ovo', 'airbnb', 'tiketdotcom', 'traveloka'];
</script>

<section class="relative py-12 px-4 text-center bg-blue-50">
	<h3 class="text-3xl lg:text-4xl font-extrabold text-gray-700 pt-12 pb-4 px-4">
		Booking and Payment by one click
	</h3>
	<p class="text-gray-600 p-4">
		In every region we're trying to develop our payments in way to help our clients more easier to
		pay with credit or debit card
	</p>
	<div class="flex flex-wrap mt-4 mb-14 xl:mx-14 items-center justify-center">
		{#each payments as item}
			<div class="payment">
				<img src={`/img/pay-${item}.png`} alt={item} />
			</div>
		{/each}
	</div>
	<img class="top-dot" src="/img/blue-dots.png" alt="dots" />
	<img class="bottom-dot" src="/img/blue-dots.png" alt="dots" />
</section>

<style type="postcss">
	.payment {
		@apply mr-4 mb-4 inline-flex lg:flex justify-center items-center;
		@apply py-2 px-4 bg-white shadow-md rounded-xl;
		height: 60px;
		min-width: 100px;
	}
	.payment img {
		max-height: 60px;
	}
	.payment img[alt='mastercard'],
	.payment img[alt='ovo'] {
		max-height: 35px;
	}
	.payment img[alt='airbnb'] {
		max-height: 50px;
	}
	.payment img[alt='visa'] {
		max-height: 30px;
	}
	.top-dot {
		@apply absolute right-10 -top-20;
		height: 140px;
	}
	.bottom-dot {
		@apply absolute left-10 -bottom-20;
		height: 140px;
	}
</style>
