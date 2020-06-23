import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { DiscoverState } from './modules/discover/types'
import { GenreState } from './modules/genre/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface ApplicationState {
  discover: DiscoverState
  genre: GenreState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
