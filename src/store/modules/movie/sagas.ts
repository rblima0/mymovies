import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Movie from 'entities/movie'

import { loadMovieSuccess, loadMovieFailure } from './actions'
import { MovieTypes, LoadMovieRequest } from './types'

export function* loadMovie({ payload }: LoadMovieRequest) {
  const { id } = payload

  try {
    const url = `/movie/${id}?api_key=${config.api_key}&language=pt-BR&append_to_response=credits`
    const response = yield call(api.get, url)

    const { data } = response

    const movie = new Movie(data)

    yield put(loadMovieSuccess(movie))
  } catch (err) {
    yield put(loadMovieFailure())
  }
}

export default all([takeLatest(MovieTypes.LOAD_MOVIE_REQUEST, loadMovie)])
