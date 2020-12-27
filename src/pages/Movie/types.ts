import { MovieState } from '../../store/modules/movie/types'
import { TrailerState } from '../../store/modules/trailer/types'

export type MovieProps = {
  loadMovieRequest(id: number): void
  loadTrailerRequest(id: number): void
  movie: MovieState
  trailer: TrailerState
  match: {
    params: {
      movieId: number
    }
  }
}
