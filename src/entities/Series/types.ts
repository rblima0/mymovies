export type SeriesPayload = {
  genre?: number
  cast?: number
  nowPlaying?: boolean
  upcoming?: boolean
  topRated?: boolean
  bestRating?: boolean
  page?: number
}

export type SeriesResponse = {
  page: number
  results: SeriesResult[]
  total_pages: number
  total_results: number
}

export type SeriesResult = {
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path?: string
  vote_average: number
  vote_count: number
  first_air_date: Date
  origin_country: string[]
  name: string
  original_name:  string
}
