import { getQuestions } from '../../../services/getQuestions';
import type { Question } from '../../../types/question';
import { categories } from '../../../utils/constants';
import type { PageLoad } from './$types';

interface Data {
	questions: Promise<Question>;
	category: Category;
}

export const load: PageLoad = async ({ params }): Promise<Data> => {
	const category: number = parseInt(params.categoryId);
	const categorySelected: number = categories.findIndex(
		(elem) => elem.id === parseInt(params.categoryId)
	);

	return {
		questions: getQuestions({ category, amount: 10 }),
		category: categories[categorySelected]
	};
};
