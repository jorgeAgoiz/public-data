<script lang="ts">
	import type { Question } from '../../../types/question';

	export let data;

	const questions: Array<Question> = data.questions.results;
	const category: string = data.category.name;
</script>

<main>
	<h1>Topic {category}</h1>

	{#each questions as question}
		<article>
			<h1>{decodeURIComponent(escape(window.atob(question.question)))}</h1>
			<div>
				{#each question.incorrect_answers as option}
					<p>{decodeURIComponent(escape(window.atob(option)))}</p>
				{/each}
			</div>
		</article>
	{/each}
</main>

<style>
	main {
		margin-top: 8rem;
		margin-bottom: 8rem;
	}
</style>
