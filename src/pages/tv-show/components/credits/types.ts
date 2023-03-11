import { TVShowResponse } from 'entities/tv-show/types'

export type CreditsProps = {
  tvShow: TVShowResponse
  handleClickCast: (id: number, name?: string) => void
}
