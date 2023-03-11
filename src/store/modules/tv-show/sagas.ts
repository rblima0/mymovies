import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import TVShow from 'entities/tv-show'

import { loadTVShowSuccess, loadTVShowFailure } from './actions'
import { TVShowTypes, LoadTVShowRequest } from './types'

export function* loadTVShow({ payload }: LoadTVShowRequest) {
  const { id } = payload

  try {
    const url = `/tv/${id}?api_key=${config.api_key}&language=pt-BR&append_to_response=credits`
    const response = yield call(api.get, url)

    const { data } = response

    const tvShow = new TVShow(data)

    yield put(loadTVShowSuccess(tvShow))
  } catch (err) {
    yield put(loadTVShowFailure())
  }
}

export default all([takeLatest(TVShowTypes.LOAD_TV_SHOW_REQUEST, loadTVShow)])
