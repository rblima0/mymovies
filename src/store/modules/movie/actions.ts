import { action } from 'typesafe-actions'
import { MovieTypes, Movie } from './types'

export const loadMovieRequest = (id: number) =>
  action(MovieTypes.LOAD_MOVIE_REQUEST, { id })

export const loadMovieSuccess = (data: Movie) =>
  action(MovieTypes.LOAD_MOVIE_SUCCESS, data)

export const loadMovieFailure = () => action(MovieTypes.LOAD_MOVIE_FAILURE)
