<script lang="ts">
	import { districts } from '../utils/constants';

	let selectedDistrict: string = 'arganzuela';

	$: selectedValue = selectedDistrict.toUpperCase();

	function handleChange() {
		console.log({ selectedDistrict, selectedValue });
	}
</script>

<main>
	<section>
		<h2>Seleccionar un distrito</h2>
		<div class="container">
			<select name="District" bind:value={selectedDistrict} on:change={handleChange}>
				{#each districts as option}
					<option value={option}>{option.toUpperCase()}</option>
				{/each}
			</select>
			<div class="container__selected">
				<h1>Opción seleccionada: {selectedValue}</h1>
			</div>
		</div>
	</section>
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
