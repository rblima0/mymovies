import { History } from 'history'
import { GenreMovieState } from 'store/modules/genre-movie/types'
import { GenreTVShowState } from 'store/modules/genre-tv-show/types'

export type MenuProps = {
  genreMovie: GenreMovieState
  genreTVShow: GenreTVShowState
  history: History
  loadGenreMovieRequest(): void
  loadGenreTVShowRequest(): void
}

export type Category = {
  title: string
  name: string
}
