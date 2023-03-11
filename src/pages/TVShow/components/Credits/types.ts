import { TVShowResponse } from 'entities/TVShow/types'

export type CreditsProps = {
  tvShow: TVShowResponse
  handleClickCast: (id: number, name?: string) => void
}
