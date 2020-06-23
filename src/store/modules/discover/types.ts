/* Action types */

export enum DiscoverTypes {
  LOAD_DISCOVER_REQUEST = '@discover/LOAD_DISCOVER_REQUEST',
  LOAD_DISCOVER_SUCCESS = '@discover/LOAD_DISCOVER_SUCCESS',
  LOAD_DISCOVER_FAILURE = '@discover/LOAD_DISCOVER_FAILURE',
}

/* State type */

export interface DiscoverState {
  readonly data: DiscoverData
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export interface DiscoverPayload {
  page?: number
}

export interface DiscoverData {
  page: number
  results: Discover[]
  total_pages: number
  total_results: number
}

export interface Discover {
  adult: boolean
  backdrop_path: string | undefined
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | undefined
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface LoadDiscoverRequest {
  type: typeof DiscoverTypes.LOAD_DISCOVER_REQUEST
  payload: DiscoverPayload
}

export interface LoadDiscoverSuccess {
  type: typeof DiscoverTypes.LOAD_DISCOVER_SUCCESS
  payload: DiscoverData
}

export interface LoadDiscoverFailure {
  type: typeof DiscoverTypes.LOAD_DISCOVER_FAILURE
}

export type DiscoverActionTypes =
  | LoadDiscoverRequest
  | LoadDiscoverSuccess
  | LoadDiscoverFailure
