import { Genre } from 'entities/Genre/types'

export type TVShowPayload = {
  id: number
}

export type TVShowResponse = {
  backdrop_path: string | null
  created_by: Creator[]
  episode_run_time: number[]
  first_air_date: Date
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: Date
  last_episode_to_air: LastEpisode
  name: string
  next_episode_to_air: null | any
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  credits: Credits
  tagline: string | null
  vote_average: number
  vote_count: number
  spoken_languages: SpokenLanguage[]
}

export type Creator = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string | null
}

export type Network = {
  id: number
  name: string
  logo_path: string | null
  origin_country: string
}

export type ProductionCompany = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type LastEpisode = {
  air_date: Date
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: string | null
  vote_average: number
  vote_count: number
}

export type Season = {
  air_date: Date
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
}

export type Credits = {
  id: number
  cast: Cast[]
  crew: Crew[]
}

export type SpokenLanguage = {
  iso_639_1: string
  name: string
}

type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  cast_id: number
  character: string
  credit_id: string
  order: number
}

type Crew = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string
  job: string
}