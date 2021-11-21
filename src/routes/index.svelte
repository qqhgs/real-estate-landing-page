<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Section from '$lib/components/Section.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Record from '$lib/components/Record.svelte';
	import Payments from '$lib/components/Payments.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import '@fontsource/poppins';
</script>

<main class="mx-auto">
	<Navbar />
	<Header />
	<Partners />
	<Section />
	<Testimonials />
	<Record />
	<Payments />
	<Newsletter />
	<Footer />
	<Credits />
</main>

<style type="postcss">
	main {
		width: 100%;
		font-family: 'Poppins', Roboto, Ubuntu, Arial, Helvetica, sans-serif;
	}
	@screen xl {
		main {
			width: 100%;
			max-width: 1280px;
		}
	}
</style>
