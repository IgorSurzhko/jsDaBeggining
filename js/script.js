"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Последний просмотренный фильм:', ''),
	  b = prompt('На сколько оцените этот фильм?', ''),
	  c = prompt('Последний просмотренный фильм:', ''),
	  d = prompt('На сколько оцените этот фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

