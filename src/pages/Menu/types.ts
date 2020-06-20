import { GenreState } from '../../store/modules/genre/types'

export interface MenuProps {
  genre: GenreState
  loadGenreRequest(): void
}
