import { DiscoverTVShowPayload, DiscoverTVShowResponse } from 'entities/discover-tv-show/types'

/* Action types */

export enum DiscoverTVShowTypes {
  LOAD_DISCOVER_TV_SHOW_REQUEST = 'discover/LOAD_DISCOVER_TV_SHOW_REQUEST',
  LOAD_DISCOVER_TV_SHOW_SUCCESS = 'discover/LOAD_DISCOVER_TV_SHOW_SUCCESS',
  LOAD_DISCOVER_TV_SHOW_FAILURE = 'discover/LOAD_DISCOVER_TV_SHOW_FAILURE',
}

/* State type */

export type DiscoverTVShowState = {
  readonly data: DiscoverTVShowResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadDiscoverTVShowRequest = {
  type: typeof DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_REQUEST
  payload: DiscoverTVShowPayload
}

export type LoadDiscoverTVShowSuccess = {
  type: typeof DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_SUCCESS
  payload: DiscoverTVShowResponse
}

export type LoadDiscoverTVShowFailure = {
  type: typeof DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_FAILURE
}

export type DiscoverTVShowActionTypes =
  | LoadDiscoverTVShowRequest
  | LoadDiscoverTVShowSuccess
  | LoadDiscoverTVShowFailure
