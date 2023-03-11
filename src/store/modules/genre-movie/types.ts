import { GenreResponse } from 'entities/genre/types'

/* Action types */

export enum GenreMovieTypes {
  LOAD_GENRE_MOVIE_REQUEST = 'genre/LOAD_GENRE_MOVIE_REQUEST',
  LOAD_GENRE_MOVIE_SUCCESS = 'genre/LOAD_GENRE_MOVIE_SUCCESS',
  LOAD_GENRE_MOVIE_FAILURE = 'genre/LOAD_GENRE_MOVIE_FAILURE',
}

/* State type */

export type GenreMovieState = {
  readonly data: GenreResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadGenreMovieRequest = {
  type: typeof GenreMovieTypes.LOAD_GENRE_MOVIE_REQUEST
}

export type LoadGenreMovieSuccess = {
  type: typeof GenreMovieTypes.LOAD_GENRE_MOVIE_SUCCESS
  payload: GenreResponse
}

export type LoadGenreMovieFailure = {
  type: typeof GenreMovieTypes.LOAD_GENRE_MOVIE_FAILURE
}

export type GenreMovieActionTypes =
  | LoadGenreMovieRequest
  | LoadGenreMovieSuccess
  | LoadGenreMovieFailure
