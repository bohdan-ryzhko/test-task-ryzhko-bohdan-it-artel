const SORT_ARRAY_BY_DATE = process.env.SORT_ARRAY_BY_DATE;
const ROOT = process.env.ROOT;

export const dom = {
	sortArrayByDateElement: document.getElementById(SORT_ARRAY_BY_DATE),
	root: document.getElementById(ROOT),
}
