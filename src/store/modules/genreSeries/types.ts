import { GenreResponse } from 'entities/Genre/types'

/* Action types */

export enum GenreSeriesTypes {
  LOAD_GENRE_SERIES_REQUEST = 'genre/LOAD_GENRE_SERIES_REQUEST',
  LOAD_GENRE_SERIES_SUCCESS = 'genre/LOAD_GENRE_SERIES_SUCCESS',
  LOAD_GENRE_SERIES_FAILURE = 'genre/LOAD_GENRE_SERIES_FAILURE',
}

/* State type */

export type GenreSeriesState = {
  readonly data: GenreResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadGenreSeriesRequest = {
  type: typeof GenreSeriesTypes.LOAD_GENRE_SERIES_REQUEST
}

export type LoadGenreSeriesSuccess = {
  type: typeof GenreSeriesTypes.LOAD_GENRE_SERIES_SUCCESS
  payload: GenreResponse
}

export type LoadGenreSeriesFailure = {
  type: typeof GenreSeriesTypes.LOAD_GENRE_SERIES_FAILURE
}

export type GenreSeriesActionTypes =
  | LoadGenreSeriesRequest
  | LoadGenreSeriesSuccess
  | LoadGenreSeriesFailure
