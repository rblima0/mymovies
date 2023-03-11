import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DiscoverMovie from 'pages/discover-movie/container'
import DiscoverTVShow from 'pages/discover-tv-show/container'
import Movie from 'pages/movie/container'
import TVShow from 'pages/tv-show/container'
import Search from 'pages/search/container'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/dashboard/search/:query" component={Search} exact />
      <Route path="/dashboard/search/:query/page/:page" component={Search} exact />


      <Route path="/movies" component={DiscoverMovie} exact />
      <Route path="/movies/page/:page" component={DiscoverMovie} exact />

      <Route path="/movies/movie/:movieId" component={Movie} exact />

      <Route path="/movies/genre/:genreId" component={DiscoverMovie} exact />
      <Route path="/movies/genre/:genreId/page/:page" component={DiscoverMovie} exact />

      <Route path="/movies/cast/:castId" component={DiscoverMovie} exact />
      <Route path="/movies/cast/:castId/page/:page" component={DiscoverMovie} exact />

      <Route path="/movies/now-playing-movies/:nowPlaying" component={DiscoverMovie} exact />
      <Route path="/movies/now-playing-movies/:nowPlaying/page/:page" component={DiscoverMovie} exact />

      <Route path="/movies/upcoming-movies/:upcoming" component={DiscoverMovie} exact />
      <Route path="/movies/upcoming-movies/:upcoming/page/:page" component={DiscoverMovie} exact />

      <Route path="/movies/best-rating-movies/:bestRating" component={DiscoverMovie} exact />
      <Route path="/movies/best-rating-movies/:bestRating/page/:page" component={DiscoverMovie} exact />

      <Route path="/movies/top-rated-movies/:topRated" component={DiscoverMovie} exact />
      <Route path="/movies/top-rated-movies/:topRated/page/:page" component={DiscoverMovie} exact />


      <Route path="/tv-shows" component={DiscoverTVShow} exact />
      <Route path="/tv-shows/page/:page" component={DiscoverTVShow} exact />

      <Route path="/tv-shows/tv-show/:tvShowId" component={TVShow} exact />

      <Route path="/tv-shows/genre/:genreId" component={DiscoverTVShow} exact />
      <Route path="/tv-shows/genre/:genreId/page/:page" component={DiscoverTVShow} exact />

      <Route path="/tv-shows/now-playing-tv-shows/:nowPlaying" component={DiscoverTVShow} exact />
      <Route path="/tv-shows/now-playing-tv-shows/:nowPlaying/page/:page" component={DiscoverTVShow} exact />

      <Route path="/tv-shows/upcoming-tv-shows/:upcoming" component={DiscoverTVShow} exact />
      <Route path="/tv-shows/upcoming-tv-shows/:upcoming/page/:page" component={DiscoverTVShow} exact />

      <Route path="/tv-shows/best-rating-tv-shows/:bestRating" component={DiscoverTVShow} exact />
      <Route path="/tv-shows/best-rating-tv-shows/:bestRating/page/:page" component={DiscoverTVShow} exact />

      <Route path="/tv-shows/top-rated-tv-shows/:topRated" component={DiscoverTVShow} exact />
      <Route path="/tv-shows/top-rated-tv-shows/:topRated/page/:page" component={DiscoverTVShow} exact />
    </Switch>
  )
}
