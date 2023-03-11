import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'
import { formatDate } from 'utils/helpers/date'

import Discover from 'entities/discover-movie'

import { loadDiscoverMovieSuccess, loadDiscoverMovieFailure } from './actions'
import { DiscoverMovieTypes, LoadDiscoverMovieRequest } from './types'

export function* loadDiscoverMovie({ payload }: LoadDiscoverMovieRequest) {
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
  const showCast = cast && `&with_cast=${cast}`
  const showNowPlaying  = nowPlaying && `&release_date.gte=${sixWeeksAgo}&release_date.lte=${today}&with_release_type=3|2&region=BR`
  const showUpcoming = upcoming && `&primary_release_date.gte=${today}`
  const showBestRating = bestRating && '&sort_by=vote_average.desc&vote_count.gte=5000'
  const showTopRated = topRated && '&sort_by=vote_count.desc'

  try {
    const url = `/discover/movie?api_key=${config.api_key}&language=pt-BR&include_adult=false${[
      showGenre,
      showCast,
      showNowPlaying,
      showUpcoming,
      showBestRating,
      showTopRated,
      showPage,
    ].filter(Boolean).join('')}`

    const response = yield call(api.get, url)
    const discover = new Discover(response.data)

    yield put(loadDiscoverMovieSuccess(discover))
  } catch (err) {
    yield put(loadDiscoverMovieFailure())
  }
}

export default all([
  takeLatest(DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_REQUEST, loadDiscoverMovie),
])
