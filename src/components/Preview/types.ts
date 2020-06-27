import { History } from 'history'
import { Discover } from '../../store/modules/discover/types'
import { Genres } from '../../store/modules/genre/types'

export interface PreviewProps {
  preview: Discover
  genres: Genres[] | any
  history: History
}
