import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { DiscoverState } from './modules/discover/types'
import { GenreMoviesState } from './modules/genre-movies/types'
import { GenreSeriesState } from './modules/genreSeries/types'
import { MovieState } from './modules/movie/types'
import { SearchState } from './modules/search/types'
import { SeriesState } from './modules/series/types'
import { TVShowState } from './modules/tvShow/types'
import { TrailerState } from './modules/trailer/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export type ApplicationState = {
  discover: DiscoverState
  genreMovies: GenreMoviesState
  genreSeries: GenreSeriesState
  movie: MovieState
  search: SearchState
  series: SeriesState
  trailer: TrailerState
  tvShow: TVShowState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
