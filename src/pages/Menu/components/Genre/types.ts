import { History } from 'history'

import { Genre } from 'entities/Genre/types'
import { Category } from 'pages/Menu/types'

export type GenreProps = {
  genres: Genre[]
  genresSeries: Genre[]
  movieCategories?: Category[]
  seriesCategories?: Category[]
  history: History
  handleCloseSidebar: () => void
}

export type GenreStylesProps = {
  selected: boolean
}
