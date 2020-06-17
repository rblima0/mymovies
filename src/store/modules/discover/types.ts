/* Action types */

export enum DiscoverTypes {
  LOAD_DISCOVER_REQUEST = '@discover/LOAD_DISCOVER_REQUEST',
  LOAD_DISCOVER_SUCCCES = '@discover/LOAD_DISCOVER_SUCCCES',
  LOAD_DISCOVER_FAILURE = '@discover/LOAD_DISCOVER_FAILURE',
}

/* Data types */

export interface DiscoverResult {
  adult: boolean
  backdrop_path: string
  genre_ids: Number[]
  id: Number
  original_language: string
  original_title: string
  overview: string
  popularity: Number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: Number
  vote_count: Number
}

export interface DiscoverData {
  page: number
  results: DiscoverResult[]
  total_pages: number
  total_results: number
}

/* State type */

export interface DiscoverState {
  readonly data: DiscoverData
  readonly loading: boolean
  readonly error: boolean
}
