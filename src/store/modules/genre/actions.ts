import { action } from 'typesafe-actions'
import { GenreResponse } from '../../../entities/Genre/types'
import { GenreTypes } from './types'

export const loadGenreRequest = () => action(GenreTypes.LOAD_GENRE_REQUEST)

export const loadGenreSuccess = (data: GenreResponse) =>
  action(GenreTypes.LOAD_GENRE_SUCCESS, data)

export const loadGenreFailure = () => action(GenreTypes.LOAD_GENRE_FAILURE)
