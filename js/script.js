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

for (let i = 0; i < 2; i++) {
	const a = prompt('Последний просмотренный фильм:', ''),
	      b = prompt('На сколько оцените этот фильм?', '');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;	
		console.log('done!');
	} else {
		console.log('error!');
		i--;

	}	  

}

console.log(personalMovieDB);









// for (let i = 1; i < 10; i++) {
// 	console.log(i);
// }
