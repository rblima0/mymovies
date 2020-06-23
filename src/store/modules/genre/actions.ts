import { action } from 'typesafe-actions'
import { GenreTypes, GenreData } from './types'

export const loadGenreRequest = () => action(GenreTypes.LOAD_GENRE_REQUEST)

export const loadGenreSuccess = (data: GenreData) =>
  action(GenreTypes.LOAD_GENRE_SUCCESS, data)

export const loadGenreFailure = () => action(GenreTypes.LOAD_GENRE_FAILURE)
