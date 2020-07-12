import { MovieState } from '../../store/modules/movie/types'
import { GenreState } from '../../store/modules/genre/types'

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
