import { DiscoverMoviePayload, DiscoverMovieResponse } from 'entities/discover-movie/types'

/* Action types */

export enum DiscoverMovieTypes {
  LOAD_DISCOVER_MOVIE_REQUEST = 'discover/LOAD_DISCOVER_MOVIE_REQUEST',
  LOAD_DISCOVER_MOVIE_SUCCESS = 'discover/LOAD_DISCOVER_MOVIE_SUCCESS',
  LOAD_DISCOVER_MOVIE_FAILURE = 'discover/LOAD_DISCOVER_MOVIE_FAILURE',
}

/* State type */

export type DiscoverMovieState = {
  readonly data: DiscoverMovieResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadDiscoverMovieRequest = {
  type: typeof DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_REQUEST
  payload: DiscoverMoviePayload
}

export type LoadDiscoverMovieSuccess = {
  type: typeof DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_SUCCESS
  payload: DiscoverMovieResponse
}

export type LoadDiscoverMovieFailure = {
  type: typeof DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_FAILURE
}

export type DiscoverMovieActionTypes =
  | LoadDiscoverMovieRequest
  | LoadDiscoverMovieSuccess
  | LoadDiscoverMovieFailure
