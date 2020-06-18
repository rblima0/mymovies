import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Provider } from 'react-redux'

import { Routes } from './routes/Routes'

import store from './store'

import 'normalize.css'
import GlobalStyle from './styles/global'

const browserHistory = createBrowserHistory()

export default function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  )
}
