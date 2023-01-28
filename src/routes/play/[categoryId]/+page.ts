import { getQuestions } from '../../../services/getQuestions';
import { categories } from '../../../utils/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const category: number = parseInt(params.categoryId);
	const categorySelected: number = categories.findIndex(
		(elem) => elem.id === parseInt(params.categoryId)
	);

	return {
		questions: getQuestions({ category, amount: 10 }),
		category: categories[categorySelected]
	};
};
