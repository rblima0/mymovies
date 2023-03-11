import { TVShowPayload, TVShowResponse } from 'entities/tv-show/types'

/* Action types */

export enum TVShowTypes {
  LOAD_TV_SHOW_REQUEST = 'tvshow/LOAD_TV_SHOW_REQUEST',
  LOAD_TV_SHOW_SUCCESS = 'tvshow/LOAD_TV_SHOW_SUCCESS',
  LOAD_TV_SHOW_FAILURE = 'tvshow/LOAD_TV_SHOW_FAILURE',
}

/* State type */

export type TVShowState = {
  readonly data: TVShowResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadTVShowRequest = {
  type: typeof TVShowTypes.LOAD_TV_SHOW_REQUEST
  payload: TVShowPayload
}

export type LoadTVShowSuccess = {
  type: typeof TVShowTypes.LOAD_TV_SHOW_SUCCESS
  payload: TVShowResponse
}

export type LoadTVShowFailure = {
  type: typeof TVShowTypes.LOAD_TV_SHOW_FAILURE
}

export type TVShowActionTypes =
  | LoadTVShowRequest
  | LoadTVShowSuccess
  | LoadTVShowFailure
