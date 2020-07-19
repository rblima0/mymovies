import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../../../services/api'
import config from '../../../config'

import Discover from '../../../entities/Discover'

import { loadDiscoverSuccess, loadDiscoverFailure } from './actions'
import { DiscoverTypes, LoadDiscoverRequest, LoadSearchRequest } from './types'

export function* loadDiscover({ payload }: LoadDiscoverRequest) {
  const { page, genre } = payload

  const pageNumber = page ? `&page=${page}` : '&page=1'
  const genreNumber = genre ? `&with_genres=${genre}` : ''

  try {
    const url = `/discover/movie?api_key=${config.api_key}&language=pt-BR&include_adult=false&sort_by=popularity.desc${genreNumber}${pageNumber}`
    const response = yield call(api.get, url)

    const { data } = response

    const discover = new Discover(data)

    yield put(loadDiscoverSuccess(discover))
  } catch (err) {
    yield put(loadDiscoverFailure())
  }
}

export function* loadSearch({ payload }: LoadSearchRequest) {
  const { page, entry } = payload

  const pageNumber = page ? `&page=${page}` : '&page=1'
  const query = `&query=${entry}`

  try {
    const url = `/search/movie?api_key=${config.api_key}&language=pt-BR&include_adult=false&sort_by=popularity.desc${query}${pageNumber}`
    const response = yield call(api.get, url)

    const { data } = response

    const discover = new Discover(data)

    yield put(loadDiscoverSuccess(discover))
  } catch (err) {
    yield put(loadDiscoverFailure())
  }
}

export default all([
  takeLatest(DiscoverTypes.LOAD_DISCOVER_REQUEST, loadDiscover),
  takeLatest(DiscoverTypes.LOAD_SEARCH_REQUEST, loadSearch),
])
