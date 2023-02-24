import { History } from 'history'

import { DiscoverState } from 'store/modules/discover/types'
import { GenreState } from 'store/modules/genre/types'

export type DiscoverProps = {
  loadDiscoverRequest(page?: number, genre?: number, cast?: number): void
  loadUpcomingRequest(page?: number): void
  discover: DiscoverState
  genre: GenreState
  history: History
  match: {
    params: {
      genreId: number
      castId: number
      page: number
    }
  }
}
