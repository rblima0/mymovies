import { action } from 'typesafe-actions'
import { TrailerResponse } from 'entities/trailer/types'
import { TrailerTypes } from './types'

export const loadTrailerRequest = (id: number) =>
  action(TrailerTypes.LOAD_TRAILER_REQUEST, { id })

export const loadTrailerSuccess = (trailer: TrailerResponse) =>
  action(TrailerTypes.LOAD_TRAILER_SUCCESS, trailer)

export const loadTrailerFailure = () =>
  action(TrailerTypes.LOAD_TRAILER_FAILURE)
