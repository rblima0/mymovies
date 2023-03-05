import { SeriesResponse, SeriesResult } from './types'

export default class Series {
  public page: number
  public results: SeriesResult[]
  public total_pages: number
  public total_results: number

  constructor(data: SeriesResponse) {
    this.page = data.page
    this.results = data.results
    this.total_pages = data.total_pages
    this.total_results = data.total_results
  }
}
