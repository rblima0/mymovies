export interface TrailerPayload {
  id: number
}

export interface TrailerResponse {
  id: number
  results: TrailerResult[]
}

export interface TrailerResult {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string
}
