import { History } from 'history'

import { SeriesState } from 'store/modules/series/types'
import { GenreState } from 'store/modules/genre/types'

export type SeriesProps = {
  loadSeriesRequest(
    genre?: number,
    cast?: number,
    nowPlaying?: boolean,
    upcoming?: boolean,
    bestRating?: boolean,
    topRated?: boolean,
    page?: number
  ): void
  series: SeriesState
  genre: GenreState
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
