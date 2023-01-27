interface Args {
	category: number;
}

export const getQuestionsByCategory = async ({ category }: Args) => {
	return await fetch(`https://opentdb.com/api.php?amount=10&category=${category}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	}).then((result) => result.json());
};
