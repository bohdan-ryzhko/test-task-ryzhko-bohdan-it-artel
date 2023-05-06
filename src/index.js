import './sass/styles.scss';

const BEFOREEND = process.env.BEFOREEND;

//import dom
import { dom } from './js/dom';
//import function sort by date
import { sortArrayByDate } from './js/sort-by-data';
// import function show in console id on click
import { handleShowId } from './js/handleShowId';
//import array of date
import dateArray from "./data/array-of-date";
// import timer function
import { timer } from './js/observabel';

// show in sortArrayByDateElement array
dom.sortArrayByDateElement.insertAdjacentHTML(BEFOREEND, JSON.stringify(sortArrayByDate(dateArray)));

// handle event listener on click, show in console id
dom.root.addEventListener("click", handleShowId);

// show value befo 2 seconds
timer(2).subscribe({
	next: value => console.log(value),
	complete: done => console.log(done),
});
