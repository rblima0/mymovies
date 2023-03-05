import { SeriesPayload, SeriesResponse } from 'entities/Series/types'

/* Action types */

export enum SeriesTypes {
  LOAD_SERIES_REQUEST = 'series/LOAD_SERIES_REQUEST',
  LOAD_SERIES_SUCCESS = 'series/LOAD_SERIES_SUCCESS',
  LOAD_SERIES_FAILURE = 'series/LOAD_SERIES_FAILURE',
}

/* State type */

export type SeriesState = {
  readonly data: SeriesResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadSeriesRequest = {
  type: typeof SeriesTypes.LOAD_SERIES_REQUEST
  payload: SeriesPayload
}

export type LoadSeriesSuccess = {
  type: typeof SeriesTypes.LOAD_SERIES_SUCCESS
  payload: SeriesResponse
}

export type LoadSeriesFailure = {
  type: typeof SeriesTypes.LOAD_SERIES_FAILURE
}

export type SeriesActionTypes =
  | LoadSeriesRequest
  | LoadSeriesSuccess
  | LoadSeriesFailure
