<script lang="ts">
    export let text: string
    export let type: "button" | "submit" | "reset" | null | undefined
    export let variant: string | null

</script>

<button type={type} on:click>{text}</button>

<style>

</style>