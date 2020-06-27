import { all } from 'redux-saga/effects'

import discoverSaga from './discover/sagas'
import genreSaga from './genre/sagas'
import movieSaga from './movie/sagas'

export default function* rootSaga() {
  return yield all([discoverSaga, genreSaga, movieSaga])
}
