import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../../../services/api'
import config from '../../../config'

import { loadGenreSuccess, loadGenreFailure } from './actions'
import { GenreTypes } from './types'

export function* loadGenre() {
  try {
    const url = `/genre/movie/list?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    yield put(loadGenreSuccess(data))
  } catch (err) {
    yield put(loadGenreFailure())
  }
}

export default all([takeLatest(GenreTypes.LOAD_GENRE_REQUEST, loadGenre)])
