import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Genre from 'entities/Genre'

import { loadGenreSeriesSuccess, loadGenreSeriesFailure } from './actions'
import { GenreSeriesTypes } from './types'

export function* loadGenreSeries() {
  try {
    const url = `/genre/tv/list?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    const genre = new Genre(data)

    yield put(loadGenreSeriesSuccess(genre))
  } catch (err) {
    yield put(loadGenreSeriesFailure())
  }
}

export default all([takeLatest(GenreSeriesTypes.LOAD_GENRE_SERIES_REQUEST, loadGenreSeries)])
