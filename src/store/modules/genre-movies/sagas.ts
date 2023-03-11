import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Genre from 'entities/Genre'

import { loadGenreMoviesSuccess, loadGenreMoviesFailure } from './actions'
import { GenreMoviesTypes } from './types'

export function* loadGenreMovies() {
  try {
    const url = `/genre/movie/list?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    const genre = new Genre(data)

    yield put(loadGenreMoviesSuccess(genre))
  } catch (err) {
    yield put(loadGenreMoviesFailure())
  }
}

export default all([takeLatest(GenreMoviesTypes.LOAD_GENRE_MOVIES_REQUEST, loadGenreMovies)])
