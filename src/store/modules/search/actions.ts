import { action } from 'typesafe-actions'
import { SearchResponse } from '../../../entities/Search/types'
import { SearchTypes } from './types'

export const loadSearchRequest = (page?: number, query?: string) =>
  action(SearchTypes.LOAD_SEARCH_REQUEST, {
    page,
    query,
  })

export const loadSearchSuccess = (data: SearchResponse) =>
  action(SearchTypes.LOAD_SEARCH_SUCCESS, data)

export const loadSearchFailure = () => action(SearchTypes.LOAD_SEARCH_FAILURE)
