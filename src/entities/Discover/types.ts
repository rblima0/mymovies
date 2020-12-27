export type DiscoverPayload = {
  page?: number
  genre?: number
}

export type DiscoverResponse = {
  page: number
  results: DiscoverResult[]
  total_pages: number
  total_results: number
}

export type DiscoverResult = {
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
