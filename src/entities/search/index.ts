import { SearchResponse, SearchResult } from './types'

export default class Search {
  public page: number
  public results: SearchResult[]
  public total_pages: number
  public total_results: number

  constructor(data: SearchResponse) {
    this.page = data.page
    this.results = data.results
    this.total_pages = data.total_pages
    this.total_results = data.total_results
  }
}
