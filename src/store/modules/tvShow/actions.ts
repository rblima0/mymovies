import { action } from 'typesafe-actions'
import { TVShowResponse } from 'entities/TVShow/types'
import { TVShowTypes } from './types'

export const loadTVShowRequest = (id: number) =>
  action(TVShowTypes.LOAD_TVSHOW_REQUEST, { id })

export const loadTVShowSuccess = (data: TVShowResponse) =>
  action(TVShowTypes.LOAD_TVSHOW_SUCCESS, data)

export const loadTVShowFailure = () => action(TVShowTypes.LOAD_TVSHOW_FAILURE)
