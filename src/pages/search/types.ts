import { History } from 'history'

import { SearchState } from 'store/modules/search/types'
import { GenreMovieState } from 'store/modules/genre-movie/types'
import { GenreTVShowState } from 'store/modules/genre-tv-show/types'

export type SearchProps = {
  loadSearchRequest(page?: number, query?: string): void
  search: SearchState
  genreMovie: GenreMovieState
  genreTVShow: GenreTVShowState
  history: History
  match: {
    params: {
      query: string
      page: number
    }
  }
}
