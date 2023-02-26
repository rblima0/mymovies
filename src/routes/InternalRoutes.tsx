import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discover from 'pages/Discover/container'
import Movie from 'pages/Movie/container'
import Search from 'pages/Search/container'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Discover} exact />
      <Route path="/dashboard/page/:page" component={Discover} exact />

      <Route path="/dashboard/genre/:genreId" component={Discover} exact />
      <Route path="/dashboard/genre/:genreId/page/:page" component={Discover} exact />

      <Route path="/dashboard/cast/:castId" component={Discover} exact />
      <Route path="/dashboard/cast/:castId/page/:page" component={Discover} exact />

      <Route path="/dashboard/search/:query" component={Search} exact />
      <Route path="/dashboard/search/:query/page/:page" component={Search} exact />

      <Route path="/dashboard/upcoming/:upcoming" component={Discover} exact />
      <Route path="/dashboard/upcoming/:upcoming/page/:page" component={Discover} exact />

      <Route path="/dashboard/best-rating/:bestRating" component={Discover} exact />
      <Route path="/dashboard/best-rating/:bestRating/page/:page" component={Discover} exact />

      <Route path="/dashboard/top-rated/:topRated" component={Discover} exact />
      <Route path="/dashboard/top-rated/:topRated/page/:page" component={Discover} exact />

      <Route path="/dashboard/movie/:movieId" component={Movie} exact />
    </Switch>
  )
}
