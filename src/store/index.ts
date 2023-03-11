import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { DiscoverMovieState } from './modules/discover-movie/types'
import { DiscoverTVShowState } from './modules/discover-tv-show/types'
import { GenreMovieState } from './modules/genre-movie/types'
import { GenreTVShowState } from './modules/genre-tv-show/types'
import { MovieState } from './modules/movie/types'
import { TVShowState } from './modules/tv-show/types'
import { SearchState } from './modules/search/types'
import { TrailerState } from './modules/trailer/types'

import rootReducer from './modules/root-reducer'
import rootSaga from './modules/root-saga'

export type ApplicationState = {
  discoverMovie: DiscoverMovieState
  discoverTVShow: DiscoverTVShowState
  genreMovie: GenreMovieState
  genreTVShow: GenreTVShowState
  movie: MovieState
  tvShow: TVShowState
  search: SearchState
  trailer: TrailerState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
