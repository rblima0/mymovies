import { TrailerResponse, TrailerResult } from './types'

export default class Trailer {
  public id: number
  public results: TrailerResult[]

  constructor(data: TrailerResponse) {
    this.id = data.id
    this.results = data.results
  }
}
