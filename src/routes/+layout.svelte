<script>
	import Footer from '../components/Footer/index.svelte';
	import Header from '../components/Header/index.svelte';
</script>

<Header />
<slot />
<Footer />

<style>
	:global(body) {
		margin: 0;
		box-sizing: border-box;
		background-color: var(--color-beige);
	}
</style>
