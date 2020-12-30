import { History } from 'history'
import { Genres } from '../../entities/Genre/types'

export type GenreProps = {
  genres: Genres[]
  history: History
}

export type GenreStylesProps = {
  selected: boolean
}
