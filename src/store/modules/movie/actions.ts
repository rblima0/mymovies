import { action } from 'typesafe-actions'
import { MovieResponse } from '../../../entities/Movie/types'
import { TrailerResponse } from '../../../entities/Trailer/types'
import { MovieTypes } from './types'

export const loadMovieRequest = (id: number) =>
  action(MovieTypes.LOAD_MOVIE_REQUEST, { id })

export const loadMovieSuccess = (data: MovieResponse) =>
  action(MovieTypes.LOAD_MOVIE_SUCCESS, data)

export const loadMovieFailure = () => action(MovieTypes.LOAD_MOVIE_FAILURE)

export const loadTrailerRequest = (id: number) =>
  action(MovieTypes.LOAD_TRAILER_REQUEST, { id })

export const loadTrailerSuccess = (trailer: TrailerResponse) =>
  action(MovieTypes.LOAD_TRAILER_SUCCESS, trailer)

export const loadTrailerFailure = () => action(MovieTypes.LOAD_TRAILER_FAILURE)
