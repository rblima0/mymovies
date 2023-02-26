import { all } from 'redux-saga/effects'

import discoverSaga from './discover/sagas'
import genreSaga from './genre/sagas'
import movieSaga from './movie/sagas'
import searchSaga from './search/sagas'
import seriesSaga from './series/sagas'
import trailerSaga from './trailer/sagas'

export default function* rootSaga() {
  return yield all([
    discoverSaga,
    genreSaga,
    movieSaga,
    searchSaga,
    seriesSaga,
    trailerSaga,
  ])
}
