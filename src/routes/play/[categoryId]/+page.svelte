<script lang="ts">
	import { browser } from '$app/environment';
	import QuestionCard from '../../../components/QuestionCard/question-card.svelte';
	import { points } from '../../../stores/points';
	import type { Question } from '../../../types/question';

	export let data;
	let questions: Array<Question> = [];
	const category: string = data.category.name;
	let round = 0;

	let counterPoints: number = 0;
	$: showPoints = counterPoints;
	points.subscribe((value) => {
		counterPoints = value;
	});

	if (browser) {
		questions = data.questions.results.map((elem: Question) => {
			const allOptions = [...elem.incorrect_answers, elem.correct_answer];
			elem.all_answers = allOptions.map((option) => {
				return decodeURIComponent(escape(window.atob(option)));
			});
			elem.question = decodeURIComponent(escape(window.atob(elem.question)));
			elem.correct_answer = decodeURIComponent(escape(window.atob(elem.correct_answer)));
			return elem;
		});
	}

	function handleClick(event: CustomEvent<any>): void {
		const selected = event.detail.value;
		const correct = questions[round].correct_answer;

		if (selected == correct) {
			points.update((n) => n + 1);
		}
		round += 1;
	}
</script>

<main>
	<h1>Topic {category}</h1>
	<h3>{showPoints}</h3>
	{#if round < 10 && questions.length > 0}
		<QuestionCard
			title={questions[round].question}
			answers={questions[round].all_answers}
			on:check-option={handleClick}
		/>
	{/if}
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
