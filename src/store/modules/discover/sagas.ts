import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'
import { formatDate } from 'utils/helpers/date'

import Discover from 'entities/Discover'

import { loadDiscoverSuccess, loadDiscoverFailure } from './actions'
import { DiscoverTypes, LoadDiscoverRequest } from './types'

export function* loadDiscover({ payload }: LoadDiscoverRequest) {
  const { page, genre, cast } = payload

  const showPage = page ? `&page=${page}` : '&page=1'
  const showGenre = genre ? `&with_genres=${genre}` : ''
  const showCast = cast ? `&with_cast=${cast}` : ''

  try {
    const url = `/discover/movie?api_key=${config.api_key}&language=pt-BR&include_adult=false&sort_by=popularity.desc${showGenre}${showCast}${showPage}`
    const response = yield call(api.get, url)

    const discover = new Discover(response.data)

    yield put(loadDiscoverSuccess(discover))
  } catch (err) {
    yield put(loadDiscoverFailure())
  }
}

export function* loadUpcoming({ payload }: LoadDiscoverRequest) {
  const { page } = payload

  const today = formatDate(new Date(), 'yyyy-MM-dd')
  const showPage = page ? `&page=${page}` : '&page=1'

  try {
    const url = `/discover/movie?api_key=${config.api_key}&language=pt-BR&include_adult=false&primary_release_date.gte=${today}&sort_by=popularity.desc${showPage}`
    const response = yield call(api.get, url)

    const discover = new Discover(response.data)

    yield put(loadDiscoverSuccess(discover))
  } catch (err) {
    yield put(loadDiscoverFailure())
  }
}

export default all([
  takeLatest(DiscoverTypes.LOAD_DISCOVER_REQUEST, loadDiscover),
  takeLatest(DiscoverTypes.LOAD_UPCOMING_REQUEST, loadUpcoming),
])
