import { GenreResponse, Genres } from './types'

export default class Genre {
  public genres: Genres[]

  constructor(data: GenreResponse) {
    this.genres = data.genres
  }
}
