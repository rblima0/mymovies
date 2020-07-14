import { MoviePayload, MovieResponse } from '../../../entities/Movie/types'
import {
  TrailerResponse,
  TrailerPayload,
} from '../../../entities/Trailer/types'

/* Action types */

export enum MovieTypes {
  LOAD_MOVIE_REQUEST = '@movie/LOAD_MOVIE_REQUEST',
  LOAD_MOVIE_SUCCESS = '@movie/LOAD_MOVIE_SUCCESS',
  LOAD_MOVIE_FAILURE = '@movie/LOAD_MOVIE_FAILURE',

  LOAD_TRAILER_REQUEST = '@movie/LOAD_TRAILER_REQUEST',
  LOAD_TRAILER_SUCCESS = '@movie/LOAD_TRAILER_SUCCESS',
  LOAD_TRAILER_FAILURE = '@movie/LOAD_TRAILER_FAILURE',
}

/* State type */

export interface MovieState {
  readonly data: MovieResponse
  readonly loading: boolean
  readonly error: boolean
  readonly trailer: TrailerResponse
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

export interface LoadTrailerRequest {
  type: typeof MovieTypes.LOAD_TRAILER_REQUEST
  payload: TrailerPayload
}

export interface LoadTrailerSuccess {
  type: typeof MovieTypes.LOAD_TRAILER_SUCCESS
  payload: TrailerResponse
}

export interface LoadTrailerFailure {
  type: typeof MovieTypes.LOAD_TRAILER_FAILURE
}

export type MovieActionTypes =
  | LoadMovieRequest
  | LoadMovieSuccess
  | LoadMovieFailure
  | LoadTrailerRequest
  | LoadTrailerSuccess
  | LoadTrailerFailure
