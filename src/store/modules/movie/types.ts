import { Genres } from '../genre/types'

/* Action types */

export enum MovieTypes {
  LOAD_MOVIE_REQUEST = '@movie/LOAD_MOVIE_REQUEST',
  LOAD_MOVIE_SUCCESS = '@movie/LOAD_MOVIE_SUCCESS',
  LOAD_MOVIE_FAILURE = '@movie/LOAD_MOVIE_FAILURE',
}

/* State type */

export interface MovieState {
  readonly data: Movie
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export interface MoviePayload {
  id: number
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: Genres[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: MovieCompanies[]
  production_countries: MovieCountries[]
  release_date: Date
  revenue: string
  runtime: string
  spoken_languages: MovieLanguages[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieCompanies {
  id: number
  logo_path: any
  name: string
  origin_country: string
}

export interface MovieCountries {
  iso_3166_1: string
  name: string
}

export interface MovieLanguages {
  iso_639_1: string
  name: string
}

export interface LoadMovieRequest {
  type: typeof MovieTypes.LOAD_MOVIE_REQUEST
  payload: MoviePayload
}

export interface LoadMovieSuccess {
  type: typeof MovieTypes.LOAD_MOVIE_SUCCESS
  payload: Movie
}

export interface LoadMovieFailure {
  type: typeof MovieTypes.LOAD_MOVIE_FAILURE
}

export type MovieActionTypes =
  | LoadMovieRequest
  | LoadMovieSuccess
  | LoadMovieFailure
