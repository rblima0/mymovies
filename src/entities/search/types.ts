export type SearchPayload = {
  page?: number
  query?: string
}

export type SearchResponse = {
  page: number
  results: SearchResult[]
  total_pages: number
  total_results: number
}

export type SearchResult = {
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
