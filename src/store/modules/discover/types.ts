import {
  DiscoverPayload,
  DiscoverResponse,
} from '../../../entities/Discover/types'

/* Action types */

export enum DiscoverTypes {
  LOAD_DISCOVER_REQUEST = '@discover/LOAD_DISCOVER_REQUEST',
  LOAD_DISCOVER_SUCCESS = '@discover/LOAD_DISCOVER_SUCCESS',
  LOAD_DISCOVER_FAILURE = '@discover/LOAD_DISCOVER_FAILURE',
}

/* State type */

export type DiscoverState = {
  readonly data: DiscoverResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export type LoadDiscoverRequest = {
  type: typeof DiscoverTypes.LOAD_DISCOVER_REQUEST
  payload: DiscoverPayload
}

export type LoadDiscoverSuccess = {
  type: typeof DiscoverTypes.LOAD_DISCOVER_SUCCESS
  payload: DiscoverResponse
}

export type LoadDiscoverFailure = {
  type: typeof DiscoverTypes.LOAD_DISCOVER_FAILURE
}

export type DiscoverActionTypes =
  | LoadDiscoverRequest
  | LoadDiscoverSuccess
  | LoadDiscoverFailure
