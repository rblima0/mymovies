import { SearchPayload, SearchResponse } from '../../../entities/Search/types'

/* Action types */

export enum SearchTypes {
  LOAD_SEARCH_REQUEST = '@search/LOAD_SEARCH_REQUEST',
  LOAD_SEARCH_SUCCESS = '@search/LOAD_SEARCH_SUCCESS',
  LOAD_SEARCH_FAILURE = '@search/LOAD_SEARCH_FAILURE',
}

/* State type */

export type SearchState = {
  readonly data: SearchResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadSearchRequest = {
  type: typeof SearchTypes.LOAD_SEARCH_REQUEST
  payload: SearchPayload
}

export type LoadSearchSuccess = {
  type: typeof SearchTypes.LOAD_SEARCH_SUCCESS
  payload: SearchResponse
}

export type LoadSearchFailure = {
  type: typeof SearchTypes.LOAD_SEARCH_FAILURE
}

export type SearchActionTypes =
  | LoadSearchRequest
  | LoadSearchSuccess
  | LoadSearchFailure
