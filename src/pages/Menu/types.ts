import { History } from 'history'
import { GenreState } from 'store/modules/genre/types'
import { GenreSeriesState } from 'store/modules/genreSeries/types'

export type MenuProps = {
  genre: GenreState
  genreSeries: GenreSeriesState
  history: History
  loadGenreRequest(): void
  loadGenreSeriesRequest(): void
}

export type Category = {
  title: string
  name: string
}
