import { action } from 'typesafe-actions'
import { DiscoverResponse } from '../../../entities/Discover/types'
import { DiscoverTypes } from './types'

export const loadDiscoverRequest = (page?: number, genre?: number) =>
  action(DiscoverTypes.LOAD_DISCOVER_REQUEST, {
    page,
    genre,
  })

export const loadDiscoverSuccess = (data: DiscoverResponse) =>
  action(DiscoverTypes.LOAD_DISCOVER_SUCCESS, data)

export const loadDiscoverFailure = () =>
  action(DiscoverTypes.LOAD_DISCOVER_FAILURE)

export const loadSearchRequest = (page?: number, entry?: string) =>
  action(DiscoverTypes.LOAD_SEARCH_REQUEST, {
    page,
    entry,
  })
