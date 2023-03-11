import { History } from 'history'

import { Genre } from 'entities/genre/types'
import { Category } from 'pages/menu/types'

export type GenreProps = {
  genreMovie: Genre[]
  genreTVShow: Genre[]
  movieCategories?: Category[]
  tvShowCategories?: Category[]
  history: History
  handleCloseSidebar: () => void
}

export type GenreStylesProps = {
  selected: boolean
}
