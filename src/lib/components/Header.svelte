<script>
	let data = {
		location: [
			'indonesia@jakarta',
			'indonesia@surabaya',
			'indonesia@malang',
			'indonesia@bali',
			'thailand@bangkok',
			'indonesia@maldives',
			'malaysia@kuala_lumpur'
		],
		types: ['apartements', 'houses'],
		budget: ['250', '400', '750', '1000', '1500', '3000']
	};
	/* const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); */
	const capitalize = (str) => {
		const handler = (data) => data.charAt(0).toUpperCase() + data.slice(1);
		if (!str.includes('_')) return handler(str);
		return str
			.split('_')
			.map((e) => handler(e))
			.join(' ');
	};
</script>

<header class="overflow-hidden mb-0 bg-gray-300 relative flex flex-col lg:block">
	<div class="bg absolute right-0 bottom-0 flex justify-end">
		<img class="pt-4 md:w-8/12 lg:w-full" src="/img/bg-header.png" alt="Mask Group" />
	</div>
	<p
		class="hastag z-10 mx-auto md:mx-0 md:p-8 lg:m-0 w-11/12 lg:w-1/2 lg:pl-24 pt-10 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
	>
		Find Your dream House and Get Your Dream Space
	</p>
	<p
		class="service z-10 mx-auto mt-8 md:mt-0 xl:mt-16 lg:my-8 lg:mx-0 sm:w-11/12 d:w-1/2 p-8 md:p-0 sm:p-4 lg:pl-24 text-lg lg:text-xl font-normal bg-white bg-opacity-30 backdrop-blur-md md:bg-transparent md:bg-opacity-0 md:backdrop-blur-0"
	>
		We provide the best service for your need to stay in comfortably place just in one time click
	</p>
</header>

<div class="query">
	<form class="flex flex-col lg:flex-row md:flex-nowrap">
		<div class="query_option">
			<label for="location">Location</label>
			<select id="location" name="location">
				{#each data.location.sort() as item}
					<option value={item.split('@')[1]}>
						{capitalize(item.split('@')[1])}, {capitalize(item.split('@')[0])}
					</option>
				{/each}
			</select>
		</div>
		<div class="query_option">
			<label for="types">Types</label>
			<select id="types" name="types">
				{#each data.types.sort() as item}
					<option value={capitalize(item)}>{capitalize(item)}</option>
				{/each}
			</select>
		</div>
		<div class="query_option">
			<label for="budget">Budget range</label>
			<select id="budget" name="budget">
				{#each data.budget as item, i}
					<option value={i}>
						$ {`${item}k ${data.budget[i + 1] ? '- ' + data.budget[i + 1] + 'k' : '+'}`}
					</option>
				{/each}
			</select>
		</div>
		<div class="query_submit sm:flex block items-center lg:ml-8 justify-center">
			<button class="btn btn-blue" type="submit">Search</button>
		</div>
	</form>
</div>

<style type="postcss">
	.bg {
		width: 100%;
		overflow: hidden;
	}
	.query {
		@apply z-20 w-11/12 lg:w-7/12 mx-auto md:mx-8 lg:mx-0 lg:ml-14 shadow-xl px-10 py-4 rounded-lg;
		/* postion */
		@apply absolute left-0 right-0 -bottom-40 lg:-bottom-4 lg:translate-x-20 lg:-translate-y-5;
		/* background */
		@apply bg-white bg-opacity-50 lg:bg-opacity-100 backdrop-blur-md lg:backdrop-blur-none;
	}
	.query_option {
		@apply flex flex-col lg:mr-6 flex-1 lg:flex-auto relative;
	}
	.query_option::after {
		@apply absolute bottom-3 right-3 bg-white w-4 h-4;
		@apply bg-cover pointer-events-none;
		content: '';
	}
	.query_option:nth-of-type(1)::after {
		background-image: url('/svg/location.svg');
	}
	.query_option:nth-of-type(2)::after,
	.query_option:nth-of-type(3)::after {
		background-image: url('/svg/chevron-down.svg');
	}
	label {
		@apply lg:mb-4 my-2 pl-2 font-semibold;
	}
	option {
		@apply relative;
	}
	select {
		@apply bg-white text-gray-500 text-sm appearance-none;
		@apply p-2 rounded-md border-2 lg:border-none border-solid border-gray-200;
		min-width: 150px;
	}
	.btn {
		@apply mt-5 w-full sm:w-1/3 lg:w-auto font-bold py-3 px-6 rounded-lg tracking-wide;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-600;
	}
	header {
		height: 500px;
	}
	@screen lg {
		.hastag,
		.service {
			width: 60%;
		}
		.bg {
			max-width: 540px;
		}
	}
</style>
