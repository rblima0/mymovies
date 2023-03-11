import { History } from 'history'
import { GenreMoviesState } from 'store/modules/genre-movies/types'
import { GenreSeriesState } from 'store/modules/genreSeries/types'

export type MenuProps = {
  genreMovies: GenreMoviesState
  genreSeries: GenreSeriesState
  history: History
  loadGenreMoviesRequest(): void
  loadGenreSeriesRequest(): void
}

export type Category = {
  title: string
  name: string
}
