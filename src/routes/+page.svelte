<script lang="ts">
	import { categories } from '../utils/constants';
	let selectedCategory: number = 21;

	async function handleChange() {
		console.log('changing');
	}
</script>

<main>
	<section>
		<h2>Seleccionar un distrito</h2>
		<div class="container">
			<select name="District" bind:value={selectedCategory} on:change={handleChange}>
				{#each categories as option}
					<option value={option.id}>{option.name.toUpperCase()}</option>
				{/each}
			</select>
			<h2>{selectedCategory}</h2>
		</div>
	</section>
	<section />
</main>

<style>
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
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 20vh;
		gap: 1rem;
	}
	.container__selected {
		display: block;
		width: 300px;
	}
</style>
