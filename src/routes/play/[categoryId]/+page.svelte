<script lang="ts">
	import QuestionCard from '../../../components/QuestionCard/question-card.svelte';
	import type { Question } from '../../../types/question';

	export let data;

	const questions: Array<Question> = data.questions.results.map((elem: Question) => {
		elem.all_answers = [...elem.incorrect_answers, elem.correct_answer];
		return elem;
	});
	const category: string = data.category.name;
</script>

<main>
	<h1>Topic {category}</h1>
	{#each questions as question}
		<QuestionCard
			title={question.question}
			answers={question.all_answers}
			correctAnswer={question.correct_answer}
		/>
	{/each}
</main>

<!-- decodeURIComponent(escape(window.atob(question.question))) -->
<style>
	main {
		width: 100%;
		margin-top: 8rem;
		margin-bottom: 8rem;
		display: flex;
		flex-direction: column;
		place-items: center;
	}
</style>
