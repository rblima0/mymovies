import { MoviePayload, MovieResponse } from '../../../entities/Movie/types'

/* Action types */

export enum MovieTypes {
  LOAD_MOVIE_REQUEST = '@movie/LOAD_MOVIE_REQUEST',
  LOAD_MOVIE_SUCCESS = '@movie/LOAD_MOVIE_SUCCESS',
  LOAD_MOVIE_FAILURE = '@movie/LOAD_MOVIE_FAILURE',
}

/* State type */

export interface MovieState {
  readonly data: MovieResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export interface LoadMovieRequest {
  type: typeof MovieTypes.LOAD_MOVIE_REQUEST
  payload: MoviePayload
}

export interface LoadMovieSuccess {
  type: typeof MovieTypes.LOAD_MOVIE_SUCCESS
  payload: MovieResponse
}

export interface LoadMovieFailure {
  type: typeof MovieTypes.LOAD_MOVIE_FAILURE
}

export type MovieActionTypes =
  | LoadMovieRequest
  | LoadMovieSuccess
  | LoadMovieFailure
