<footer class="flex flex-wrap p-10 w-full text-gray-200">
	<div>
		<img class="logo" src="/img/logo.png" alt="logo" />
		<div>
			<p>Need further information?</p>
			<p>Follow us on:</p>
			<ul class="flex">
				{#each ['facebook', 'twitter', 'linkedin'] as item}
					<li class="mr-2">
						<a href={`#${item}`}><img class="w-10" src={`/svg/${item}.svg`} alt={item} /></a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<h3>Terms & policies</h3>
		<ul>
			<li><a href="/">Terms of Service</a></li>
			<li><a href="/">Privacy Policy</a></li>
			<li><a href="/">Affiliate Program Terms</a></li>
		</ul>
	</div>
	<div>
		<h3>Company</h3>
		<ul>
			<li><a href="/">About</a></li>
			<li><a href="/">Our History</a></li>
			<li><a href="/">Contact</a></li>
			<li><a href="/">Careers</a></li>
		</ul>
	</div>
	<div>
		<h3>Office</h3>
		<ul>
			<li>Deoras Dream House</li>
			<li>Jl. Boulevar Science, No. 90</li>
			<li>Jakarta, Indonesia</li>
			<li>team@deorasdream.com</li>
		</ul>
	</div>
</footer>

<style type="postcss">
	footer {
		background-color: #111;
	}
	footer > div {
		@apply mb-8 p-4 w-full sm:w-1/2;
		flex-grow: 1;
	}
	footer > div:first-of-type {
		flex-grow: 1;
	}
	h3 {
		@apply text-lg mb-2 font-bold;
	}
	li {
		@apply py-4;
	}
	.logo {
		@apply -ml-14 -mt-8;
		max-width: 250px;
	}
	@screen md {
		footer > div {
			flex: 0.7;
		}
		footer > div:first-of-type {
			flex: 0.9;
		}
		footer > div:nth-of-type(3) {
			flex: 0.5;
		}
	}
</style>
