import { all } from 'redux-saga/effects'

import discoverSaga from './discover/sagas'
import genreMoviesSaga from './genre-movies/sagas'
import genreSeriesSaga from './genreSeries/sagas'
import movieSaga from './movie/sagas'
import searchSaga from './search/sagas'
import seriesSaga from './series/sagas'
import trailerSaga from './trailer/sagas'
import tvShowSaga from './tvShow/sagas'

export default function* rootSaga() {
  return yield all([
    discoverSaga,
    genreMoviesSaga,
    genreSeriesSaga,
    movieSaga,
    searchSaga,
    seriesSaga,
    trailerSaga,
    tvShowSaga,
  ])
}
