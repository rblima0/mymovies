import { History } from 'history'
import { TVShowState } from 'store/modules/tvShow/types'

export type MovieProps = {
  loadTVShowRequest(id: number): void
  tvShow: TVShowState
  history: History
  match: {
    params: {
      tvShowId: number
    }
  }
}
