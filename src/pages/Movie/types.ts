import { MovieState } from '../../store/modules/movie/types'

export interface MovieProps {
  loadMovieRequest(id: number): void
  loadTrailerRequest(id: number): void
  movie: MovieState
  match: {
    params: {
      movieId: number
    }
  }
}
