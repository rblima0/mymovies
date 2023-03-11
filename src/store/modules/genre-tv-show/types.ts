import { GenreResponse } from 'entities/genre/types'

/* Action types */

export enum GenreTVShowTypes {
  LOAD_GENRE_TV_SHOW_REQUEST = 'genre/LOAD_GENRE_TV_SHOW_REQUEST',
  LOAD_GENRE_TV_SHOW_SUCCESS = 'genre/LOAD_GENRE_TV_SHOW_SUCCESS',
  LOAD_GENRE_TV_SHOW_FAILURE = 'genre/LOAD_GENRE_TV_SHOW_FAILURE',
}

/* State type */

export type GenreTVShowState = {
  readonly data: GenreResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadGenreTVShowRequest = {
  type: typeof GenreTVShowTypes.LOAD_GENRE_TV_SHOW_REQUEST
}

export type LoadGenreTVShowSuccess = {
  type: typeof GenreTVShowTypes.LOAD_GENRE_TV_SHOW_SUCCESS
  payload: GenreResponse
}

export type LoadGenreTVShowFailure = {
  type: typeof GenreTVShowTypes.LOAD_GENRE_TV_SHOW_FAILURE
}

export type GenreTVShowActionTypes =
  | LoadGenreTVShowRequest
  | LoadGenreTVShowSuccess
  | LoadGenreTVShowFailure
