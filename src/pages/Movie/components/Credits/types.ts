import { MovieResponse } from '../../../../entities/Movie/types'

export type CreditsProps = {
  movie: MovieResponse
  handleClickCast: (id: number, name?: string) => void
}
