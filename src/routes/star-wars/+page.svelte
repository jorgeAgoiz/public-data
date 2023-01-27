<script>
	fetch('https://opentdb.com/api.php?amount=10')
		.then((result) => result.json())
		.then((data) => console.log(data));
</script>

<main>
	<h1>Hola ke ase</h1>
</main>

<style>
	main {
		margin-top: 8rem;
		margin-bottom: 8rem;
	}
</style>
