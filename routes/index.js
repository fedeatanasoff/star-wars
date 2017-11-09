let moviesJSON = require('../movies.json')

exports.home = function (req, res) {
  let movies = moviesJSON.movies
  res.render('home', {
    title: 'Star wars movies',
    movies: movies
  })
}

// peliculas
exports.movie_single = function (req, res) {
  let movies = moviesJSON.movies

  let episode_number = req.params.episode_number

  if (episode_number >= 1 && episode_number <= 6) {
    let movie = movies[episode_number - 1]
    let title = movie.title

    res.render('movie_single', {
      movies: movies,
      title: title,
      movie: movie
    })
  } else {
    res.render('notFound', {
      movies: movies,
      title: 'Esta no es la pagina que estaba buscando..'
    })
  }

}

// not found
exports.notFound = function (req, res) {
  let movies = moviesJSON.movies
  
  res.render('notFound', {
    movies: movies,
    title: 'Esta no es la pagina que estaba buscando'
  })
}