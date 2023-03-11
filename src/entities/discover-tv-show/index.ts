import { DiscoverTVShowResponse, DiscoverTVShowResult } from './types'

export default class DiscoverTVShow {
  public page: number
  public results: DiscoverTVShowResult[]
  public total_pages: number
  public total_results: number

  constructor(data: DiscoverTVShowResponse) {
    this.page = data.page
    this.results = data.results
    this.total_pages = data.total_pages
    this.total_results = data.total_results
  }
}
