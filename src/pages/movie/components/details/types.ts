import { MovieResponse } from 'entities/movie/types'
import { TrailerResponse } from 'entities/trailer/types'

export type DetailsProps = {
  movie: MovieResponse
  trailer: TrailerResponse
}
