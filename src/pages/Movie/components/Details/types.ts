import { MovieResponse } from '../../../../entities/Movie/types'
import { TrailerResponse } from '../../../../entities/Trailer/types'

export type DetailsProps = {
  movie: MovieResponse
  trailer: TrailerResponse
}
