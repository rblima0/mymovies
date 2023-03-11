import { History } from 'history'

import { Genre } from 'entities/genre/types'

export type PreviewProps = {
  preview: Preview
  genres: Genre[] | any
  history: History
}

export type Preview = {
  backdrop_path?: string | null // Movie and TV Shows
  genre_ids: number[] // Movie and TV Shows
  id: number // Movie and TV Shows
  original_language: string // Movie and TV Shows
  overview: string // Movie and TV Shows
  popularity: number // Movie and TV Shows
  poster_path?: string // Movie and TV Shows
  vote_average: number // Movie and TV Shows
  vote_count: number // Movie and TV Shows
  
  adult?: boolean // Movie
  original_title?: string // Movie
  release_date?: Date // Movie
  title?: string // Movie
  video?: boolean // Movie

  first_air_date?: Date // TV Shows
  origin_country?: string[] // TV Shows
  name?: string // TV Shows
  original_name?:  string // TV Shows

  media_type?: string // Search
}
