import { MovieResponse } from 'entities/movie/types'

export type CreditsProps = {
  movie: MovieResponse
  handleClickCast: (id: number, name?: string) => void
}
