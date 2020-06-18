import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../../../services/api'
import config from '../../../config'

import { loadDiscoverSuccess, loadDiscoverFailure } from './actions'
import { DiscoverTypes } from './types'

export function* loadDiscover() {
  try {
    const response = yield call(
      api.get,
      `/discover/movie?api_key=${config.api_key}`
    )

    const { data } = response

    yield put(loadDiscoverSuccess(data))
  } catch (err) {
    yield put(loadDiscoverFailure())
  }
}

export default all([
  takeLatest(DiscoverTypes.LOAD_DISCOVER_REQUEST, loadDiscover),
])
