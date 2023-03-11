import { History } from 'history'

import { DiscoverMovieState } from 'store/modules/discover-movie/types'
import { GenreMovieState } from 'store/modules/genre-movie/types'

export type DiscoverProps = {
  loadDiscoverMovieRequest(
    genre?: number,
    cast?: number,
    nowPlaying?: boolean,
    upcoming?: boolean,
    bestRating?: boolean,
    topRated?: boolean,
    page?: number
  ): void
  discoverMovie: DiscoverMovieState
  genreMovie: GenreMovieState
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
