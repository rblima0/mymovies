import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { DiscoverState } from './modules/discover/types'
import { GenreState } from './modules/genre/types'
import { MovieState } from './modules/movie/types'
import { TrailerState } from './modules/trailer/types'
import { SearchState } from './modules/search/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export type ApplicationState = {
  discover: DiscoverState
  genre: GenreState
  movie: MovieState
  trailer: TrailerState
  search: SearchState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
