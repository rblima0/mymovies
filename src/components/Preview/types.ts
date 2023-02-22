import { History } from 'history'

import { DiscoverResult } from 'entities/Discover/types'
import { Genres } from 'entities/Genre/types'

export type PreviewProps = {
  preview: DiscoverResult
  genres: Genres[] | any
  history: History
}
