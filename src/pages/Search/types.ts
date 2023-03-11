import { History } from 'history'

import { SearchState } from 'store/modules/search/types'
import { GenreMoviesState } from 'store/modules/genre-movies/types'
import { GenreSeriesState } from 'store/modules/genreSeries/types'

export type SearchProps = {
  loadSearchRequest(page?: number, query?: string): void
  search: SearchState
  genreMovies: GenreMoviesState
  genreSeries: GenreSeriesState
  history: History
  match: {
    params: {
      query: string
      page: number
    }
  }
}
