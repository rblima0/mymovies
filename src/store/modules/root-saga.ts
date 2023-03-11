import { all } from 'redux-saga/effects'

import discoverMovieSaga from './discover-movie/sagas'
import discoverTVShowSaga from './discover-tv-show/sagas'
import genreMovieSaga from './genre-movie/sagas'
import genreTVShowSaga from './genre-tv-show/sagas'
import movieSaga from './movie/sagas'
import tvShowSaga from './tv-show/sagas'
import searchSaga from './search/sagas'
import trailerSaga from './trailer/sagas'

export default function* rootSaga() {
  return yield all([
    discoverMovieSaga,
    discoverTVShowSaga,
    genreMovieSaga,
    genreTVShowSaga,
    movieSaga,
    tvShowSaga,
    searchSaga,
    trailerSaga,
  ])
}
