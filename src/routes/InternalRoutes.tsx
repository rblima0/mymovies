import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discover from '../pages/Discover/container'
import Movie from '../pages/Movie/container'
import Search from '../pages/Search/container'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Discover} exact />
      <Route path="/dashboard/genre/:genreId" component={Discover} />
      <Route path="/dashboard/movie/:movieId" component={Movie} />
      <Route path="/dashboard/search/:query" component={Search} />
    </Switch>
  )
}
