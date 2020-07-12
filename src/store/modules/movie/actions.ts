import { action } from 'typesafe-actions'
import { MovieTypes, Movie, Trailer } from './types'

export const loadMovieRequest = (id: number) =>
  action(MovieTypes.LOAD_MOVIE_REQUEST, { id })

export const loadMovieSuccess = (data: Movie) =>
  action(MovieTypes.LOAD_MOVIE_SUCCESS, data)

export const loadMovieFailure = () => action(MovieTypes.LOAD_MOVIE_FAILURE)

export const loadTrailerRequest = (id: number) =>
  action(MovieTypes.LOAD_TRAILER_REQUEST, { id })

export const loadTrailerSuccess = (trailer: Trailer) =>
  action(MovieTypes.LOAD_TRAILER_SUCCESS, trailer)

export const loadTrailerFailure = () => action(MovieTypes.LOAD_TRAILER_FAILURE)
