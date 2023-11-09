const  numberOfFilms = +prompt('How many films we looks?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Odin iz poslednich filmov?', ''),
	b = prompt('Na scolko ocenivaete?', ''),
	c = prompt('Odin iz poslednich filmov?', ''),
	d = prompt('Na scolko ocenivaete?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);