export type DiscoverMoviePayload = {
  genre?: number
  cast?: number
  nowPlaying?: boolean
  upcoming?: boolean
  topRated?: boolean
  bestRating?: boolean
  page?: number
}

export type DiscoverMovieResponse = {
  page: number
  results: DiscoverMovieResult[]
  total_pages: number
  total_results: number
}

export type DiscoverMovieResult = {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
