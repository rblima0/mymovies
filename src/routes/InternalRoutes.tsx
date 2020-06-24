import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discover from '../pages/Discover/container'

export function InternalRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Discover} exact />
      <Route path="/dashboard/genre/:genreId" component={Discover} />
    </Switch>
  )
}
