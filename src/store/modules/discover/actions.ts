import { action } from 'typesafe-actions'
import { DiscoverResponse } from 'entities/Discover/types'
import { DiscoverTypes } from './types'

export const loadDiscoverRequest = (
  genre?: number,
  cast?: number,
  upcoming?: boolean,
  bestRating?: boolean,
  topRated?: boolean,
  page?: number
) =>
  action(DiscoverTypes.LOAD_DISCOVER_REQUEST, {
    genre,
    cast,
    upcoming,
    topRated,
    bestRating,
    page,
  })

export const loadDiscoverSuccess = (data: DiscoverResponse) =>
  action(DiscoverTypes.LOAD_DISCOVER_SUCCESS, data)

export const loadDiscoverFailure = () =>
  action(DiscoverTypes.LOAD_DISCOVER_FAILURE)
