import { History } from 'history'
import { Genres } from '../../entities/Genre/types'

export interface GenreProps {
  genres: Genres[]
  history: History
}
