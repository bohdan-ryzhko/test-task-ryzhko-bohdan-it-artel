import './sass/styles.scss';

import { constants } from './js/constants';
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
dom.sortArrayByDateElement.insertAdjacentHTML(constants.BEFOREEND, JSON.stringify(sortArrayByDate(dateArray)));

// handle event listener on click, show in console id
dom.root.addEventListener(constants.CLICK, handleShowId);

// show value befo 2 seconds
timer(2).subscribe({
	next: value => console.log(value),
	complete: done => console.log(done),
});

// import use "require" function sum
const sum = require("./js/sum");
console.log(sum(10, 30));