export const sortArrayByDate = array =>
	[...array].sort((a, b) => new Date(a.date) - new Date(b.date));
