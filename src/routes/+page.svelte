<script lang="ts">
	import { goto } from '$app/navigation';
	import BasicButton from '../components/BasicButton/index.svelte';
	import InputSelect from '../components/InputSelect/input-select.svelte';
	import { categories } from '../utils/constants';

	let selectedCategory: number = 21;
	$: selectedOption = categories.findIndex((elem) => elem.id === selectedCategory);

	function handleChange(evt: any): void {
		selectedCategory = parseInt(evt.currentTarget.value);
	}
</script>

<main>
	<section>
		<h2>Select category:</h2>
		<InputSelect {categories} {selectedCategory} on:change={handleChange} />
		<BasicButton text="Comenzar" type="button" on:click={() => goto(`/play/${selectedCategory}`)} />
		<h1>Category selected: {categories[selectedOption].name}</h1>
	</section>
</main>

<style>
	:global(:root) {
		--color-green: #c6d57e;
		--color-red: #d57e7e;
		--color-teal: #a2cdcd;
		--color-beige: #ffe1af;
	}
	main {
		width: 100%;
		height: 72vh;
		padding-top: 7rem;
		padding-bottom: 7rem;
		display: flex;
		flex-direction: column;
		place-items: center;
	}
	section {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;
	}
</style>
