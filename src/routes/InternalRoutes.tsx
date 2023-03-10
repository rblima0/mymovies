import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discover from 'pages/Discover/container'
import Series from 'pages/Series/container'
import Movie from 'pages/Movie/container'
import Search from 'pages/Search/container'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/dashboard/search/:query" component={Search} exact />
      <Route path="/dashboard/search/:query/page/:page" component={Search} exact />


      <Route path="/movies" component={Discover} exact />
      <Route path="/movies/page/:page" component={Discover} exact />

      <Route path="/movies/movie/:movieId" component={Movie} exact />

      <Route path="/movies/genre/:genreId" component={Discover} exact />
      <Route path="/movies/genre/:genreId/page/:page" component={Discover} exact />

      <Route path="/movies/cast/:castId" component={Discover} exact />
      <Route path="/movies/cast/:castId/page/:page" component={Discover} exact />

      <Route path="/movies/now-playing-movies/:nowPlaying" component={Discover} exact />
      <Route path="/movies/now-playing-movies/:nowPlaying/page/:page" component={Discover} exact />

      <Route path="/movies/upcoming-movies/:upcoming" component={Discover} exact />
      <Route path="/movies/upcoming-movies/:upcoming/page/:page" component={Discover} exact />

      <Route path="/movies/best-rating-movies/:bestRating" component={Discover} exact />
      <Route path="/movies/best-rating-movies/:bestRating/page/:page" component={Discover} exact />

      <Route path="/movies/top-rated-movies/:topRated" component={Discover} exact />
      <Route path="/movies/top-rated-movies/:topRated/page/:page" component={Discover} exact />


      <Route path="/tv-shows" component={Series} exact />
      <Route path="/tv-shows/page/:page" component={Series} exact />

      <Route path="/tv-shows/tv-show/:tvShowId" component={Movie} exact />

      <Route path="/tv-shows/genre/:genreId" component={Series} exact />
      <Route path="/tv-shows/genre/:genreId/page/:page" component={Series} exact />

      <Route path="/tv-shows/now-playing-series/:nowPlaying" component={Series} exact />
      <Route path="/tv-shows/now-playing-series/:nowPlaying/page/:page" component={Series} exact />

      <Route path="/tv-shows/upcoming-series/:upcoming" component={Series} exact />
      <Route path="/tv-shows/upcoming-series/:upcoming/page/:page" component={Series} exact />

      <Route path="/tv-shows/best-rating-series/:bestRating" component={Series} exact />
      <Route path="/tv-shows/best-rating-series/:bestRating/page/:page" component={Series} exact />

      <Route path="/tv-shows/top-rated-series/:topRated" component={Series} exact />
      <Route path="/tv-shows/top-rated-series/:topRated/page/:page" component={Series} exact />
    </Switch>
  )
}
