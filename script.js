"use strict";

let numbeOfFilms;

function start() {
    numbeOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numbeOfFilms == '' || numbeOfFilms == null || isNaN(numbeOfFilms)) {
        numbeOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

function rememberMyFilms() {
    while (i < 2) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a.length < 50 && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
        i++;
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
 
function writeYourGenres() {
    for (let numberOfGenres = 0; numberOfGenres < 3; numberOfGenres++) {
        personalMovieDB.genres[numberOfGenres] = prompt(`Ваш любимый жанр под номером ${numberOfGenres + 1}`, '');
    }
}

writeYourGenres();
showMyDB();