const express = require('express')
const favicon = require('serve-favicon')

const app = express()
const routes = require('./routes')
const publicDir = `${__dirname}/public`
const port = process.env.PORT || 3000
const faviconDir = `${__dirname}/public/images/favicon.ico`

app.set('view engine', 'ejs')
app.set('port', port)

app.use(express.static(publicDir))
app.use(favicon(faviconDir))
// rutas
app.get('/', routes.home)

// peliculas
app.get('/star_wars_episode/:episode_number?', routes.movie_single)

// not found
app.get('*', routes.notFound)

app.listen(`${port}`, () => console.log(`app corriendo en el puerto ${port}`))
