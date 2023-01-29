<script>
	import Footer from '../components/Footer/index.svelte';
	import Header from '../components/Header/index.svelte';
</script>

<Header />
<slot />
<Footer />

<style>
	:global(:root) {
		--color-green: #c6d57e;
		--color-red: #d57e7e;
		--color-teal: #a2cdcd;
		--color-beige: #ffe1af;
	}
	:global(body) {
		margin: 0;
		box-sizing: border-box;
		background-color: var(--color-beige);
	}
</style>
