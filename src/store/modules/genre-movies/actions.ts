import { action } from 'typesafe-actions'
import { GenreResponse } from 'entities/Genre/types'
import { GenreMoviesTypes } from './types'

export const loadGenreMoviesRequest = () => action(GenreMoviesTypes.LOAD_GENRE_MOVIES_REQUEST)

export const loadGenreMoviesSuccess = (data: GenreResponse) => action(GenreMoviesTypes.LOAD_GENRE_MOVIES_SUCCESS, data)

export const loadGenreMoviesFailure = () => action(GenreMoviesTypes.LOAD_GENRE_MOVIES_FAILURE)
