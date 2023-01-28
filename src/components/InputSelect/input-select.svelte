<script lang="ts">
	export let categories: Array<Category>;
	export let selectedCategory: number;
</script>

<select name="District" value={selectedCategory} on:change>
	{#each categories as option}
		<option value={option.id}>{option.name.toUpperCase()}</option>
	{/each}
</select>

<style>
</style>
