import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Provider } from 'react-redux'

import { Routes } from './routes/Routes'

import store from './store'

import 'normalize.css'
import GlobalStyle from './styles/global'

const browserHistory = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
})

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  )
}
