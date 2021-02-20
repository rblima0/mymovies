import { History } from 'history'

import { SearchState } from '../../store/modules/search/types'
import { GenreState } from '../../store/modules/genre/types'

export type SearchProps = {
  loadSearchRequest(page?: number, query?: string): void
  search: SearchState
  genre: GenreState
  history: History
  match: {
    params: {
      query: string
      page: number
    }
  }
}
