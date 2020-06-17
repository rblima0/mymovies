import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../../../services/api'
import config from '../../../config/index'

import { loadMovieSuccess, loadMovieFailure } from './actions'
import { MovieTypes } from './types'

export function* loadMovie() {
  try {
    const response = yield call(
      api.get,
      `/discover/movie?api_key=${config.api_key}`
    )

    const { data } = response

    yield put(loadMovieSuccess(data))
  } catch (err) {
    yield put(loadMovieFailure())
  }
}

export default all([takeLatest(MovieTypes.LOAD_MOVIE_REQUEST, loadMovie)])
