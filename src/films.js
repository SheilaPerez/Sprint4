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
function orderByYear(movies) {
  return [...movies].sort((movieA, movieB) => {
    if (movieA.year == movieB.year) {
      if (movieA.title > movieB.title) {
        return 1;
      } else {
        return -1;
      }
    }
    return movieA.year - movieB.year;
  })
  
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let genreMovies = movies.filter((movie) => {
    let someGen = movie.genre.some((movieGenre) => { return movieGenre == genre })
    return someGen;
  });

  return genreMovies.reduce((count, movie) => {  
    if (movie.score == '') {
        return count
      } else {
        return movie.score + count
      }   
  },0 ) / genreMovies.length

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
/*getAllDirectors(movies)
console.log("director peliculas", getMoviesFromDirector(movies, movies[7].director))
console.log("score", moviesAverageOfDirector(movies, movies[7].director))
console.log("en orden", orderAlphabetically(movies))
console.log("orden año", orderByYear(movies))

*/
//console.log("genero", moviesAverageByCategory(movies, movies[1].genre[0]))


