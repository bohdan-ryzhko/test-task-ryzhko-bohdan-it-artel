import './sass/styles.scss';

//import function sort by id
import { sortArrayByDate } from './js/sort-by-data';
// import function show in console id on click
import { handleShowId } from './js/handleShowId';
//import array of date
import dateArray from "./data/array-of-date";

// get element with id = sort-array-by-date
const sortArrayByDateElement = document.querySelector("#sort-array-by-date");
// show in sortArrayByDateElement array
sortArrayByDateElement.insertAdjacentHTML("beforeend", JSON.stringify(sortArrayByDate(dateArray)));

// get element with id = root
const root = document.getElementById("root");
// handle event listener on click, show in console id
root.addEventListener("click", handleShowId);
