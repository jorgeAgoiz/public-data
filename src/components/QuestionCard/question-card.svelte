<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BasicButton from '../BasicButton/index.svelte';
	export let title: string;
	export let answers: Array<string> | undefined;

	const dispatch = createEventDispatcher();

	function handleClick(event: any) {
		dispatch('check-option', { value: event.currentTarget?.innerText });
	}
</script>

<article>
	<h1>{title}</h1>
	<section>
		{#if answers}
			{#each answers as option}
				<BasicButton type="button" text={option} on:click={handleClick} />
			{/each}
		{/if}
	</section>
</article>

<style>
	article {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 2.4rem;
		margin-bottom: 3rem;
	}
	section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
	}
</style>
