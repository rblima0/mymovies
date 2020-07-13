import { MovieResponse } from '../../entities/Movie/types'
import { TrailerResponse } from '../../entities/Trailer/types'

export interface DetailsProps {
  movie: MovieResponse
  trailer: TrailerResponse
}
