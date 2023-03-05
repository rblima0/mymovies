import { GenreResponse, Genre as GenreOptions } from './types'

export default class Genre {
  public genres: GenreOptions[]

  constructor(data: GenreResponse) {
    this.genres = data.genres
  }
}
