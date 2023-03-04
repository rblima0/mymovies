import { History } from 'history'

import { Genres } from 'entities/Genre/types'
import { Category } from 'pages/Menu/types'

export type GenreProps = {
  genres: Genres[]
  genresSeries: Genres[]
  movieCategories?: Category[]
  seriesCategories?: Category[]
  history: History
  handleCloseSidebar: () => void
}

export type GenreStylesProps = {
  selected: boolean
}
