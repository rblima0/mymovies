import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discover from 'pages/Discover/container'
import Series from 'pages/Series/container'
import Movie from 'pages/Movie/container'
import Search from 'pages/Search/container'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/movies" component={Discover} exact />
      <Route path="/movies/page/:page" component={Discover} exact />

      <Route path="/movies/movie/:movieId" component={Movie} exact />

      <Route path="/movies/genre/:genreId" component={Discover} exact />
      <Route path="/movies/genre/:genreId/page/:page" component={Discover} exact />

      <Route path="/movies/cast/:castId" component={Discover} exact />
      <Route path="/movies/cast/:castId/page/:page" component={Discover} exact />

      <Route path="/movies/search/:query" component={Search} exact />
      <Route path="/movies/search/:query/page/:page" component={Search} exact />

      <Route path="/movies/now-playing/:nowPlaying" component={Discover} exact />
      <Route path="/movies/now-playing/:nowPlaying/page/:page" component={Discover} exact />

      <Route path="/movies/upcoming/:upcoming" component={Discover} exact />
      <Route path="/movies/upcoming/:upcoming/page/:page" component={Discover} exact />

      <Route path="/movies/best-rating/:bestRating" component={Discover} exact />
      <Route path="/movies/best-rating/:bestRating/page/:page" component={Discover} exact />

      <Route path="/movies/top-rated/:topRated" component={Discover} exact />
      <Route path="/movies/top-rated/:topRated/page/:page" component={Discover} exact />


      <Route path="/series" component={Series} exact />
      <Route path="/series/page/:page" component={Series} exact />

      <Route path="/series/genre/:genreId" component={Series} exact />
      <Route path="/series/genre/:genreId/page/:page" component={Series} exact />

      <Route path="/series/cast/:castId" component={Series} exact />
      <Route path="/series/cast/:castId/page/:page" component={Series} exact />

      <Route path="/series/search/:query" component={Search} exact />
      <Route path="/series/search/:query/page/:page" component={Search} exact />

      <Route path="/series/now-playing/:nowPlaying" component={Series} exact />
      <Route path="/series/now-playing/:nowPlaying/page/:page" component={Series} exact />

      <Route path="/series/upcoming/:upcoming" component={Series} exact />
      <Route path="/series/upcoming/:upcoming/page/:page" component={Series} exact />

      <Route path="/series/best-rating/:bestRating" component={Series} exact />
      <Route path="/series/best-rating/:bestRating/page/:page" component={Series} exact />

      <Route path="/series/top-rated/:topRated" component={Series} exact />
      <Route path="/series/top-rated/:topRated/page/:page" component={Series} exact />
    </Switch>
  )
}
