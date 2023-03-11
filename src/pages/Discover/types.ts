import { History } from 'history'

import { DiscoverState } from 'store/modules/discover/types'
import { GenreMoviesState } from 'store/modules/genre-movies/types'

export type DiscoverProps = {
  loadDiscoverRequest(
    genre?: number,
    cast?: number,
    nowPlaying?: boolean,
    upcoming?: boolean,
    bestRating?: boolean,
    topRated?: boolean,
    page?: number
  ): void
  discover: DiscoverState
  genreMovies: GenreMoviesState
  history: History
  match: {
    params: {
      genreId: number
      castId: number
      nowPlaying: boolean
      upcoming: boolean
      bestRating: boolean
      topRated: boolean
      page: number
    }
  }
}
