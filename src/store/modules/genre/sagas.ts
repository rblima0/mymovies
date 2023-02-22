import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Genre from 'entities/Genre'

import { loadGenreSuccess, loadGenreFailure } from './actions'
import { GenreTypes } from './types'

export function* loadGenre() {
  try {
    const url = `/genre/movie/list?api_key=${config.api_key}&language=pt`
    const response = yield call(api.get, url)

    const { data } = response

    const genre = new Genre(data)

    yield put(loadGenreSuccess(genre))
  } catch (err) {
    yield put(loadGenreFailure())
  }
}

export default all([takeLatest(GenreTypes.LOAD_GENRE_REQUEST, loadGenre)])
