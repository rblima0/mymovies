import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Genre from 'entities/genre'

import { loadGenreTVShowSuccess, loadGenreTVShowFailure } from './actions'
import { GenreTVShowTypes } from './types'

export function* loadGenreTVShow() {
  try {
    const url = `/genre/tv/list?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    const genre = new Genre(data)

    yield put(loadGenreTVShowSuccess(genre))
  } catch (err) {
    yield put(loadGenreTVShowFailure())
  }
}

export default all([takeLatest(GenreTVShowTypes.LOAD_GENRE_TV_SHOW_REQUEST, loadGenreTVShow)])
