import { DiscoverState } from '../../store/modules/discover/types'
import { GenreState } from '../../store/modules/genre/types'

export interface DiscoverProps {
  loadDiscoverRequest(page?: number, genre?: number): void
  discover: DiscoverState
  genre: GenreState
  match: {
    params: {
      genreId: number
    }
  }
}
