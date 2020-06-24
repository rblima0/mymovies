import { DiscoverState } from '../../store/modules/discover/types'

export interface DiscoverProps {
  loadDiscoverRequest(page?: number, genre?: number): void
  discover: DiscoverState
  match: {
    params: {
      genreId: number
    }
  }
}
