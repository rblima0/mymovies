import { DiscoverMovieResponse, DiscoverMovieResult } from './types'

export default class DiscoverMovie {
  public page: number
  public results: DiscoverMovieResult[]
  public total_pages: number
  public total_results: number

  constructor(data: DiscoverMovieResponse) {
    this.page = data.page
    this.results = data.results
    this.total_pages = data.total_pages
    this.total_results = data.total_results
  }
}
