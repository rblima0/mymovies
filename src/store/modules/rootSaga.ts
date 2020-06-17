import { all } from 'redux-saga/effects'

import movieSaga from './movie/sagas'

export default function* rootSaga() {
  return yield all([movieSaga])
}
