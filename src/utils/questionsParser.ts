import type { Question } from '../types/question';

interface Args {
	data: Array<Question>;
}

export const questionsParser = ({ data }: Args) => {
	return data.map((elem: Question) => {
		const allOptions: Array<string> = [...elem.incorrect_answers, elem.correct_answer];
		elem.all_answers = allOptions.map((option: string) => {
			return decodeURIComponent(escape(window.atob(option)));
		});
		elem.question = decodeURIComponent(escape(window.atob(elem.question)));
		elem.correct_answer = decodeURIComponent(escape(window.atob(elem.correct_answer)));
		return elem;
	});
};
