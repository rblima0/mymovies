import { action } from 'typesafe-actions'
import { MovieResponse } from 'entities/Movie/types'
import { MovieTypes } from './types'

export const loadMovieRequest = (id: number) =>
  action(MovieTypes.LOAD_MOVIE_REQUEST, { id })

export const loadMovieSuccess = (data: MovieResponse) =>
  action(MovieTypes.LOAD_MOVIE_SUCCESS, data)

export const loadMovieFailure = () => action(MovieTypes.LOAD_MOVIE_FAILURE)
