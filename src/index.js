import './sass/styles.scss';
import { sortArrayByDate } from './js/sort-by-data';
import dateArray from "./data/array-of-date";

const sortArrayByDateElement = document.querySelector("#sort-array-by-date");

sortArrayByDateElement.insertAdjacentHTML("beforeend", JSON.stringify(sortArrayByDate(dateArray)));
