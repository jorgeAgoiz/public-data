<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';
	import QuestionCard from '../../../components/QuestionCard/question-card.svelte';
	import ScoreBoard from '../../../components/ScoreBoard/score-board.svelte';
	import { points } from '../../../stores/points';
	import type { Question } from '../../../types/question';
	import { questionsParser } from '../../../utils/questionsParser';

	export let data;
	let questions: Array<Question> = [];
	const category: string = data.category.name;
	let round = 0;

	let counterPoints: number = 0;
	$: showPoints = counterPoints;
	const unsubscribe: Unsubscriber = points.subscribe((value) => {
		counterPoints = value;
	});
	onDestroy(unsubscribe);

	if (browser) {
		questions = questionsParser({ data: data.questions.results });
	}

	function handleClick(event: CustomEvent<any>): void {
		if (round >= 9) {
			goto('/');
		}

		const selected: string = event.detail.value;
		const correct: string = questions[round].correct_answer;

		if (selected == correct) {
			points.update((n) => n + 1);
		}
		round += 1;
	}
</script>

<main>
	<h1>Topic {category}</h1>
	{#if round < 10 && questions.length > 0}
		<QuestionCard
			title={questions[round].question}
			answers={questions[round].all_answers}
			on:check-option={handleClick}
		/>
	{/if}
	{#if browser}
		<ScoreBoard points={showPoints} />
	{/if}
</main>

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
