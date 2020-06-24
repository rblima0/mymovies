import { History } from 'history'
import { Genres } from '../../store/modules/genre/types'

export interface GenreProps {
  genres: Genres[]
  history: History
}
