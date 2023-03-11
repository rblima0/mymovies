import { MoviePayload, MovieResponse } from 'entities/movie/types'

/* Action types */

export enum MovieTypes {
  LOAD_MOVIE_REQUEST = 'movie/LOAD_MOVIE_REQUEST',
  LOAD_MOVIE_SUCCESS = 'movie/LOAD_MOVIE_SUCCESS',
  LOAD_MOVIE_FAILURE = 'movie/LOAD_MOVIE_FAILURE',
}

/* State type */

export type MovieState = {
  readonly data: MovieResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadMovieRequest = {
  type: typeof MovieTypes.LOAD_MOVIE_REQUEST
  payload: MoviePayload
}

export type LoadMovieSuccess = {
  type: typeof MovieTypes.LOAD_MOVIE_SUCCESS
  payload: MovieResponse
}

export type LoadMovieFailure = {
  type: typeof MovieTypes.LOAD_MOVIE_FAILURE
}

export type MovieActionTypes =
  | LoadMovieRequest
  | LoadMovieSuccess
  | LoadMovieFailure
