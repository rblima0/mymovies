export type TrailerPayload = {
  id: number
}

export type TrailerResponse = {
  id: number
  results: TrailerResult[]
}

export type TrailerResult = {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string
}
