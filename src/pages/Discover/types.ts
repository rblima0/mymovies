import { History } from 'history'

import { DiscoverState } from 'store/modules/discover/types'
import { GenreState } from 'store/modules/genre/types'

export type DiscoverProps = {
  loadDiscoverRequest(
    genre?: number,
    cast?: number,
    upcoming?: boolean,
    bestRating?: boolean,
    topRated?: boolean,
    page?: number
  ): void
  discover: DiscoverState
  genre: GenreState
  history: History
  match: {
    params: {
      genreId: number
      castId: number
      upcoming: boolean
      bestRating: boolean
      topRated: boolean
      page: number
    }
  }
}
