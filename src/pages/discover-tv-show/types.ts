import { History } from 'history'

import { DiscoverTVShowState } from 'store/modules/discover-tv-show/types'
import { GenreTVShowState } from 'store/modules/genre-tv-show/types'

export type SeriesProps = {
  loadDiscoverTVShowRequest(
    genre?: number,
    nowPlaying?: boolean,
    upcoming?: boolean,
    bestRating?: boolean,
    topRated?: boolean,
    page?: number
  ): void
  discoverTVShow: DiscoverTVShowState
  genreTVShow: GenreTVShowState
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
