/* Action types */

export enum GenreTypes {
  LOAD_GENRE_REQUEST = '@genre/LOAD_GENRE_REQUEST',
  LOAD_GENRE_SUCCESS = '@genre/LOAD_GENRE_SUCCESS',
  LOAD_GENRE_FAILURE = '@genre/LOAD_GENRE_FAILURE',
}

/* State type */

export interface GenreState {
  readonly data: GenreData
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export interface GenreData {
  genres: Genres[]
}

export interface Genres {
  id: number
  name: string
}

export interface LoadGenreRequest {
  type: typeof GenreTypes.LOAD_GENRE_REQUEST
}

export interface LoadGenreSuccess {
  type: typeof GenreTypes.LOAD_GENRE_SUCCESS
  payload: GenreData
}

export interface LoadGenreFailure {
  type: typeof GenreTypes.LOAD_GENRE_FAILURE
}

export type GenreActionTypes =
  | LoadGenreRequest
  | LoadGenreSuccess
  | LoadGenreFailure
