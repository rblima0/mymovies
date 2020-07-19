export interface SearchPayload {
  page?: number
  query?: string
}

export interface SearchResponse {
  page: number
  results: SearchResult[]
  total_pages: number
  total_results: number
}

export interface SearchResult {
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
