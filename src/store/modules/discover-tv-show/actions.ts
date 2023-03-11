import { action } from 'typesafe-actions'
import { DiscoverTVShowResponse } from 'entities/discover-tv-show/types'
import { DiscoverTVShowTypes } from './types'

export const loadDiscoverTVShowRequest = (
  genre?: number,
  nowPlaying?: boolean,
  upcoming?: boolean,
  bestRating?: boolean,
  topRated?: boolean,
  page?: number
) =>
  action(DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_REQUEST, {
    genre,
    nowPlaying,
    upcoming,
    topRated,
    bestRating,
    page,
  })

export const loadDiscoverTVShowSuccess = (data: DiscoverTVShowResponse) =>
  action(DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_SUCCESS, data)

export const loadDiscoverTVShowFailure = () =>
  action(DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_FAILURE)
