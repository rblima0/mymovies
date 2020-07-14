import { Genres } from '../Genre/types'

export interface MoviePayload {
  id: number
}

export interface MovieResponse {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null | Object
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
