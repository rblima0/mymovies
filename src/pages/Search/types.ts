import { History } from 'history'

import { SearchState } from 'store/modules/search/types'
import { GenreState } from 'store/modules/genre/types'
import { GenreSeriesState } from 'store/modules/genreSeries/types'

export type SearchProps = {
  loadSearchRequest(page?: number, query?: string): void
  search: SearchState
  genre: GenreState
  genreSeries: GenreSeriesState
  history: History
  match: {
    params: {
      query: string
      page: number
    }
  }
}
