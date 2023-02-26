import { action } from 'typesafe-actions'
import { SeriesResponse } from 'entities/Series/types'
import { SeriesTypes } from './types'

export const loadSeriesRequest = (
  genre?: number,
  cast?: number,
  nowPlaying?: boolean,
  upcoming?: boolean,
  bestRating?: boolean,
  topRated?: boolean,
  page?: number
) =>
  action(SeriesTypes.LOAD_SERIES_REQUEST, {
    genre,
    cast,
    nowPlaying,
    upcoming,
    topRated,
    bestRating,
    page,
  })

export const loadSeriesSuccess = (data: SeriesResponse) =>
  action(SeriesTypes.LOAD_SERIES_SUCCESS, data)

export const loadSeriesFailure = () =>
  action(SeriesTypes.LOAD_SERIES_FAILURE)
