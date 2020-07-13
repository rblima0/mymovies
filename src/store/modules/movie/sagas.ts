import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../../../services/api'
import config from '../../../config'

import Movie from '../../../entities/Movie'

import {
  loadMovieSuccess,
  loadMovieFailure,
  loadTrailerSuccess,
  loadTrailerFailure,
} from './actions'

import { MovieTypes, LoadMovieRequest, LoadTrailerRequest } from './types'
import Trailer from '../../../entities/Trailer'

export function* loadMovie({ payload }: LoadMovieRequest) {
  const { id } = payload

  try {
    const url = `/movie/${id}?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    const movie = new Movie(data)

    yield put(loadMovieSuccess(movie))
  } catch (err) {
    yield put(loadMovieFailure())
  }
}

export function* loadTrailer({ payload }: LoadTrailerRequest) {
  const { id } = payload

  try {
    const url = `/movie/${id}/videos?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    const trailer = new Trailer(data)

    yield put(loadTrailerSuccess(trailer))
  } catch (err) {
    yield put(loadTrailerFailure())
  }
}

export default all([
  takeLatest(MovieTypes.LOAD_MOVIE_REQUEST, loadMovie),
  takeLatest(MovieTypes.LOAD_TRAILER_REQUEST, loadTrailer),
])
