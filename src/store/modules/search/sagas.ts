import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Search from 'entities/Search'

import { loadSearchSuccess, loadSearchFailure } from './actions'
import { SearchTypes, LoadSearchRequest } from './types'

export function* loadSearch({ payload }: LoadSearchRequest) {
  const { page, query } = payload

  const pageNumber = page ? `&page=${page}` : '&page=1'
  const searchQuery = `&query=${query}`

  try {
    const url = `/search/multi?api_key=${config.api_key}&language=pt-BR&include_adult=false${searchQuery}${pageNumber}`
    const response = yield call(api.get, url)

    const { data } = response

    const search = new Search(data)

    yield put(loadSearchSuccess(search))
  } catch (err) {
    yield put(loadSearchFailure())
  }
}

export default all([takeLatest(SearchTypes.LOAD_SEARCH_REQUEST, loadSearch)])
