import { action } from 'typesafe-actions'
import { GenreResponse } from 'entities/Genre/types'
import { GenreSeriesTypes } from './types'

export const loadGenreSeriesRequest = () => action(GenreSeriesTypes.LOAD_GENRE_SERIES_REQUEST)

export const loadGenreSeriesSuccess = (data: GenreResponse) =>
  action(GenreSeriesTypes.LOAD_GENRE_SERIES_SUCCESS, data)

export const loadGenreSeriesFailure = () => action(GenreSeriesTypes.LOAD_GENRE_SERIES_FAILURE)
