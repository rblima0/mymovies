import { GenreResponse } from 'entities/Genre/types'

/* Action types */

export enum GenreMoviesTypes {
  LOAD_GENRE_MOVIES_REQUEST = 'genre/LOAD_GENRE_MOVIES_REQUEST',
  LOAD_GENRE_MOVIES_SUCCESS = 'genre/LOAD_GENRE_MOVIES_SUCCESS',
  LOAD_GENRE_MOVIES_FAILURE = 'genre/LOAD_GENRE_MOVIES_FAILURE',
}

/* State type */

export type GenreMoviesState = {
  readonly data: GenreResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadGenreMoviesRequest = {
  type: typeof GenreMoviesTypes.LOAD_GENRE_MOVIES_REQUEST
}

export type LoadGenreMoviesSuccess = {
  type: typeof GenreMoviesTypes.LOAD_GENRE_MOVIES_SUCCESS
  payload: GenreResponse
}

export type LoadGenreMoviesFailure = {
  type: typeof GenreMoviesTypes.LOAD_GENRE_MOVIES_FAILURE
}

export type GenreMoviesActionTypes =
  | LoadGenreMoviesRequest
  | LoadGenreMoviesSuccess
  | LoadGenreMoviesFailure
