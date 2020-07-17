import { all } from 'redux-saga/effects'

import discoverSaga from './discover/sagas'
import genreSaga from './genre/sagas'
import movieSaga from './movie/sagas'
import trailerSaga from './trailer/sagas'

export default function* rootSaga() {
  return yield all([discoverSaga, genreSaga, movieSaga, trailerSaga])
}
