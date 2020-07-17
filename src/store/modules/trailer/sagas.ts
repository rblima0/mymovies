import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from '../../../services/api'
import config from '../../../config'

import Trailer from '../../../entities/Trailer'

import { loadTrailerSuccess, loadTrailerFailure } from './actions'
import { TrailerTypes, LoadTrailerRequest } from './types'

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

export default all([takeLatest(TrailerTypes.LOAD_TRAILER_REQUEST, loadTrailer)])
