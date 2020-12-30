import { GenreResponse } from '../../../entities/Genre/types'

/* Action types */

export enum GenreTypes {
  LOAD_GENRE_REQUEST = '@genre/LOAD_GENRE_REQUEST',
  LOAD_GENRE_SUCCESS = '@genre/LOAD_GENRE_SUCCESS',
  LOAD_GENRE_FAILURE = '@genre/LOAD_GENRE_FAILURE',
}

/* State type */

export type GenreState = {
  readonly data: GenreResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadGenreRequest = {
  type: typeof GenreTypes.LOAD_GENRE_REQUEST
}

export type LoadGenreSuccess = {
  type: typeof GenreTypes.LOAD_GENRE_SUCCESS
  payload: GenreResponse
}

export type LoadGenreFailure = {
  type: typeof GenreTypes.LOAD_GENRE_FAILURE
}

export type GenreActionTypes =
  | LoadGenreRequest
  | LoadGenreSuccess
  | LoadGenreFailure
