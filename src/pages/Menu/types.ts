import { History } from 'history'
import { GenreState } from 'store/modules/genre/types'
import { GenreSeriesState } from 'store/modules/genreSeries/types'

export type MenuProps = {
  loadGenreRequest(): void
  loadGenreSeriesRequest(): void
  genre: GenreState
  genreSeries: GenreSeriesState
  history: History
}

export type Category = {
  title: string
  name: string
}
