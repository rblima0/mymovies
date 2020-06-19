/* Action types */

export enum DiscoverTypes {
  LOAD_DISCOVER_REQUEST = '@discover/LOAD_DISCOVER_REQUEST',
  LOAD_DISCOVER_SUCCESS = '@discover/LOAD_DISCOVER_SUCCESS',
  LOAD_DISCOVER_FAILURE = '@discover/LOAD_DISCOVER_FAILURE',
}

/* Data types */

export interface DiscoverResult {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface DiscoverData {
  page?: number
  results?: DiscoverResult[]
  total_pages?: number
  total_results?: number
}

/* State type */

export interface DiscoverState {
  readonly data: DiscoverData
  readonly loading: boolean
  readonly error: boolean
}
