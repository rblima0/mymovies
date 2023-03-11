import { TVShowPayload, TVShowResponse } from 'entities/TVShow/types'

/* Action types */

export enum TVShowTypes {
  LOAD_TVSHOW_REQUEST = 'tvshow/LOAD_TVSHOW_REQUEST',
  LOAD_TVSHOW_SUCCESS = 'tvshow/LOAD_TVSHOW_SUCCESS',
  LOAD_TVSHOW_FAILURE = 'tvshow/LOAD_TVSHOW_FAILURE',
}

/* State type */

export type TVShowState = {
  readonly data: TVShowResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadTVShowRequest = {
  type: typeof TVShowTypes.LOAD_TVSHOW_REQUEST
  payload: TVShowPayload
}

export type LoadTVShowSuccess = {
  type: typeof TVShowTypes.LOAD_TVSHOW_SUCCESS
  payload: TVShowResponse
}

export type LoadTVShowFailure = {
  type: typeof TVShowTypes.LOAD_TVSHOW_FAILURE
}

export type TVShowActionTypes =
  | LoadTVShowRequest
  | LoadTVShowSuccess
  | LoadTVShowFailure
