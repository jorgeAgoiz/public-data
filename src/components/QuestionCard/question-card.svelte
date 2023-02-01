<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let title: string;
	export let answers: Array<string> | undefined;

	const dispatch = createEventDispatcher();

	function handleClick(
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		dispatch('check-option', { value: event.currentTarget.innerText });
	}
</script>

<article>
	<h1>{title}</h1>
	<section>
		{#if answers}
			{#each answers as option}
				<button on:click={handleClick}>
					{option}
				</button>
			{/each}
		{/if}
	</section>
</article>

<style>
	article {
		width: 80%;
		background-color: var(--color-green);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
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
