import { DiscoverResponse, DiscoverResult } from './types'

export default class Discover {
  public page: number
  public results: DiscoverResult[]
  public total_pages: number
  public total_results: number

  constructor(data: DiscoverResponse) {
    this.page = data.page
    this.results = data.results
    this.total_pages = data.total_pages
    this.total_results = data.total_results
  }
}
