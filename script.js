"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = + prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        let i = 0;
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function () {
        for (let numberOfGenres = 0; numberOfGenres < 3; numberOfGenres++) {
            personalMovieDB.genres[numberOfGenres] = prompt(`Ваш любимый жанр под номером ${numberOfGenres + 1}`, '');
            if (personalMovieDB.genres[numberOfGenres] == null || personalMovieDB.genres[numberOfGenres] == '') {
                console.log('Вы ввели некоррктные данные или не ввели их вообще');
                numberOfGenres--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
