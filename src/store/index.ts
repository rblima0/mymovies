import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { DiscoverState } from './modules/discover/types'
import { GenreState } from './modules/genre/types'
import { MovieState } from './modules/movie/types'
import { SearchState } from './modules/search/types'
import { SeriesState } from './modules/series/types'
import { TrailerState } from './modules/trailer/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export type ApplicationState = {
  discover: DiscoverState
  genre: GenreState
  movie: MovieState
  search: SearchState
  series: SeriesState
  trailer: TrailerState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
