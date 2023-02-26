import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'
import { formatDate } from 'utils/helpers/date'

import Series from 'entities/Series'

import { loadSeriesSuccess, loadSeriesFailure } from './actions'
import { SeriesTypes, LoadSeriesRequest } from './types'

export function* loadSeries({ payload }: LoadSeriesRequest) {
  const { 
    page = 1, 
    genre = '', 
    cast = '', 
    nowPlaying = false,
    upcoming = false, 
    bestRating =  false,
    topRated = false 
  } = payload

  const today = formatDate(new Date(), 'yyyy-MM-dd')
  const sixWeeksAgo = formatDate(new Date(Date.now() - 42 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
  const showPage = `&page=${page}`
  const showGenre = genre && `&with_genres=${genre}`
  const showCast = cast && `&with_cast=${cast}` // TODO: validate id has this filter
  const showNowPlaying  = nowPlaying && `&release_date.gte=${sixWeeksAgo}&release_date.lte=${today}&with_release_type=3|2&region=BR`
  const showUpcoming = upcoming && `&primary_release_date.gte=${today}`
  const showBestRating = bestRating && '&sort_by=vote_average.desc&vote_count.gte=5000'
  const showTopRated = topRated && '&sort_by=vote_count.desc'

  try {
    const url = `/discover/tv?api_key=${config.api_key}&language=pt-BR${[
      showGenre,
      showCast,
      showNowPlaying,
      showUpcoming,
      showBestRating,
      showTopRated,
      showPage,
    ].filter(Boolean).join('')}`

    const response = yield call(api.get, url)
    const series = new Series(response.data)

    yield put(loadSeriesSuccess(series))
  } catch (err) {
    yield put(loadSeriesFailure())
  }
}

export default all([
  takeLatest(SeriesTypes.LOAD_SERIES_REQUEST, loadSeries),
])
