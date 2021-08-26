"use strict"

const numbeOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    };
    i++;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
};


console.log(personalMovieDB);