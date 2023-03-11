import { History } from 'history'

import { SeriesState } from 'store/modules/series/types'
import { GenreSeriesState } from 'store/modules/genreSeries/types'

export type SeriesProps = {
  loadSeriesRequest(
    genre?: number,
    nowPlaying?: boolean,
    upcoming?: boolean,
    bestRating?: boolean,
    topRated?: boolean,
    page?: number
  ): void
  series: SeriesState
  genreSeries: GenreSeriesState
  history: History
  match: {
    params: {
      genreId: number
      nowPlaying: boolean
      upcoming: boolean
      bestRating: boolean
      topRated: boolean
      page: number
    }
  }
}
