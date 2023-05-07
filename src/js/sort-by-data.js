// first example
// export const sortArrayByDate = array =>
// 	[...array].sort((a, b) => new Date(a.date) - new Date(b.date));

// second example
// methode "toSorted" - new immutable methode
export const sortArrayByDate = array =>
	array.toSorted((a, b) => new Date(a.date) - new Date(b.date));