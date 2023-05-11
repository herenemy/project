let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies did you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('How many films did you watch?', ''),
            b = prompt('Whats yout favorite film?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log('done!');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('wow!')
    } else {
        console.log('Что тут происходит??')
    }
}

// detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre with the number ${i}`)
    }
}

writeYourGenres();

// function declaration
function logger() {

}

// functioni expression
const hahah = function lolo() {

};

// стрелочная функция (ES6) Можно без скобок если код маленький
const calc = (a, b) => { return a + b }; 
