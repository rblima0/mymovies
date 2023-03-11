import { action } from 'typesafe-actions'
import { TVShowResponse } from 'entities/tv-show/types'
import { TVShowTypes } from './types'

export const loadTVShowRequest = (id: number) =>
  action(TVShowTypes.LOAD_TV_SHOW_REQUEST, { id })

export const loadTVShowSuccess = (data: TVShowResponse) =>
  action(TVShowTypes.LOAD_TV_SHOW_SUCCESS, data)

export const loadTVShowFailure = () => action(TVShowTypes.LOAD_TV_SHOW_FAILURE)
