<script>
	import { onMount } from 'svelte';
	let root;

	let reviews = [
		{
			name: 'Rodriguex Milto',
			img: 'photo-1.png',
			location: 'Puorto Lobos, Mexico',
			desc: '“The services are totally great! they offered many options for me to stay that suit my budget. Also, the room is well-furnished.”',
			star: 5
		},
		{
			name: 'Victenzy Markov',
			img: 'photo-2.png',
			location: 'Moscow, Russia',
			desc: '“I got so many benefits with their competent agents, no need to worry about renting or buying the house because you can consult them first for free.”',
			star: 5
		},
		{
			name: 'Martinca Chandrawiyono',
			img: 'photo-3.png',
			location: 'Jakarta, Indonesia',
			desc: '“Thanks for the services! It was a pleasure time to discuss what place you wanna live in, the customer service and agents are perfect good! Always respond in no time.”',
			star: 5
		}
	];

	onMount(() => {
		let scroll = root.querySelector('.scroll');
		let pos = {
			left: 0,
			x: 0
		};
		const mouseDownHandler = (e) => {
			pos = {
				left: scroll.scrollLeft,
				x: e.clientX
			};
			scroll.style.cursor = 'grabbing';
			scroll.style.userSelect = 'none';
			root.addEventListener('mousemove', mouseMoveHandler);
			root.addEventListener('mouseup', mouseUpHandler);
		};
		const mouseMoveHandler = (e) => {
			const dx = e.clientX - pos.x;
			scroll.scrollLeft = pos.left - dx;
		};
		const mouseUpHandler = () => {
			root.removeEventListener('mousemove', mouseMoveHandler);
			root.removeEventListener('mouseup', mouseUpHandler);
			scroll.style.cursor = 'grab';
			scroll.style.removeProperty('user-select');
		};
		scroll.addEventListener('mousedown', mouseDownHandler);
	});
</script>

<section bind:this={root} class="text-center bg-blue-50 p-14">
	<h2 class="text-blue-500 my-4 font-bold text-lg tracking-wider">Testimonials</h2>
	<h3 class="text-2xl lg:text-5xl font-bold mb-2 lg:mb-8">What people say about us?</h3>
	<p class="text-gray-600">Here you can see our client reviews around the world</p>
	<div class="mt-8">
		<div class="scroll flex overflow-x-hidden">
			{#each reviews as item}
				<div class="card flex flex-col p-4 bg-white rounded-2xl mr-8 shadow-md">
					<div class="flex text-left p-4">
						<div class="avatar rounded-full overflow-hidden bg-gray-100 drop-shadow-md">
							<img src={`/img/${item.img}`} alt={item.name} />
						</div>
						<div class="profile flex flex-col px-4 py-1">
							<span class="font-bold whitespace-nowrap">{item.name}</span>
							<span class="text-xs whitespace-nowrap">{item.location}</span>
							<div class="flex mt-2">
								{#each Array(item.star) as _}
									<svg
										class="lg:w-8 lg:h-8"
										viewBox="0 0 47 45"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M23.5 3.90594L28.5954 16.1566L28.9472 17.0026L29.8605 17.0758L43.0861 18.1361L33.0096 26.7677L32.3138 27.3638L32.5263 28.255L35.6049 41.1609L24.2819 34.2449L23.5 33.7673L22.7181 34.2449L11.3951 41.1609L14.4737 28.255L14.6862 27.3638L13.9904 26.7677L3.91388 18.1361L17.1395 17.0758L18.0528 17.0026L18.4046 16.1566L23.5 3.90594Z"
											fill="#F1C644"
											stroke="#F1C644"
											stroke-width="3"
										/>
									</svg>
								{/each}
							</div>
						</div>
					</div>
					<div class="text-left">{item.desc}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style type="postcss">
	@screen lg {
		.card {
			flex: 0 0 auto;
			width: 430px;
		}
	}
	.scroll {
		cursor: grab;
	}
	.scroll img {
		width: 80px;
	}
	.avatar {
		width: 80px;
		height: 80px;
		padding: 1px;
	}
</style>
