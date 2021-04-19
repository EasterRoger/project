const numberOFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');


const personalMoviedDB = {
    count: numberOFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?',''),  
      c = prompt('Cколько фильмов вы уже посмотрели?', ''),
      d = prompt('На сколько оцените его?', ''); 
    
personalMoviedDB.movies[a] = b;
personalMoviedDB.movies[c] = d;

console.log(personalMoviedDB);