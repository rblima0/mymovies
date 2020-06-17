import { action } from 'typesafe-actions'
import { MovieTypes, Movie } from './types'

export const loadMovieRequest = () => action(MovieTypes.LOAD_MOVIE_REQUEST)

export const loadMovieSuccess = (data: Movie[]) =>
  action(MovieTypes.LOAD_MOVIE_SUCCCES, data)

export const loadMovieFailure = () => action(MovieTypes.LOAD_MOVIE_FAILURE)
