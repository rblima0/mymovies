import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Menu from 'pages/Menu/container'

export function Routes() {
  return (
    <Switch>
      <Redirect from="/" to="/movies" exact />
      <Route path="/dashboard" component={Menu} />
      <Route path="/movies" component={Menu} />
      <Route path="/tv-shows" component={Menu} />
      <Redirect to="/not-found" />
    </Switch>
  )
}
