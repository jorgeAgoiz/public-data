<script lang="ts">
	export let text: string;
	export let type: 'button' | 'submit' | 'reset' | null | undefined;
</script>

<button {type} on:click>{text}</button>

<style>
	button {
		width: 320px;
		height: 80px;
		background-color: white;
		border: 2px solid black;
		border-radius: 12px;
		cursor: pointer;
		font-size: 1.2rem;
		transition: 0.2s all ease-in-out;
	}
	button:hover {
		background-color: var(--color-green);
		border: 4px solid black;
	}
</style>
