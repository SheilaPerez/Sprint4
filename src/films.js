// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) { 
  const directors = movies.map((movie) => { 
    let result = movie.director;
    return result;
  });
  return directors; 
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter((movie) => {
    return movie.director == director;
  })

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let sumaScore = movies.reduce((count, movie) => {
    if (movie.director == director) {
      return count + movie.score;
    } else {
      return count;
    }
  }, 0);
  return sumaScore / getMoviesFromDirector(movies, director).length;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titleMovies = movies.map((movie) => movie.title);
  let orderAlphabet = titleMovies.sort();
  return orderAlphabet.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear() {

  
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}




//Llamar a funciones
getAllDirectors(movies)
console.log("peliculas", getMoviesFromDirector(movies, movies[7].director))
console.log("score", moviesAverageOfDirector(movies, movies[7].director))
console.log("en orden", orderAlphabetically(movies))
console.log("orden año", orderByYear(movies))
