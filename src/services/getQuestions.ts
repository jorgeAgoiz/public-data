interface Args {
	category: number;
	amount: number;
}

export const getQuestions = async ({ category, amount = 10 }: Args) => {
	return await fetch(
		`https://opentdb.com/api.php?amount=${amount}&category=${category}&encode=base64`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		}
	).then((result) => result.json());
};
