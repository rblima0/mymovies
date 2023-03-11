export type DiscoverTVShowPayload = {
  genre?: number
  cast?: number
  nowPlaying?: boolean
  upcoming?: boolean
  topRated?: boolean
  bestRating?: boolean
  page?: number
}

export type DiscoverTVShowResponse = {
  page: number
  results: DiscoverTVShowResult[]
  total_pages: number
  total_results: number
}

export type DiscoverTVShowResult = {
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
