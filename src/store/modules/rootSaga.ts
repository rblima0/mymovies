import { all } from 'redux-saga/effects'

import discoverSaga from './discover/sagas'

export default function* rootSaga() {
  return yield all([discoverSaga])
}
