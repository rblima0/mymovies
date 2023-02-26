import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'
import { formatDate } from 'utils/helpers/date'

import Discover from 'entities/Discover'

import { loadDiscoverSuccess, loadDiscoverFailure } from './actions'
import { DiscoverTypes, LoadDiscoverRequest } from './types'

export function* loadDiscover({ payload }: LoadDiscoverRequest) {
  const { 
    page = 1, 
    genre = '', 
    cast = '', 
    upcoming = false, 
    bestRating =  false,
    topRated = false 
  } = payload

  const today = formatDate(new Date(), 'yyyy-MM-dd')
  const showPage = `&page=${page}`
  const showGenre = genre && `&with_genres=${genre}`
  const showCast = cast && `&with_cast=${cast}`
  const showUpcoming = upcoming && `&primary_release_date.gte=${today}`
  const showBestRating = bestRating && '&sort_by=vote_average.desc&vote_count.gte=10000'
  const showTopRated = topRated && '&sort_by=vote_count.desc'

  try {
    const url = `/discover/movie?api_key=${config.api_key}&language=pt-BR&include_adult=false${[
      showGenre,
      showCast,
      showUpcoming,
      showBestRating,
      showTopRated,
      showPage,
    ].filter(Boolean).join('')}`

    const response = yield call(api.get, url)
    const discover = new Discover(response.data)

    yield put(loadDiscoverSuccess(discover))
  } catch (err) {
    yield put(loadDiscoverFailure())
  }
}

export default all([
  takeLatest(DiscoverTypes.LOAD_DISCOVER_REQUEST, loadDiscover),
])
