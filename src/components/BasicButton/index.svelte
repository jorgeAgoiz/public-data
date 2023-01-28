<script lang="ts">
	export let text: string;
	export let type: 'button' | 'submit' | 'reset' | null | undefined;
</script>

<button {type} on:click>{text}</button>

<style>
</style>
