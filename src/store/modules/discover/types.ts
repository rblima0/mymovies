import {
  DiscoverPayload,
  DiscoverResponse,
  SearchPayload,
} from '../../../entities/Discover/types'

/* Action types */

export enum DiscoverTypes {
  LOAD_DISCOVER_REQUEST = '@discover/LOAD_DISCOVER_REQUEST',
  LOAD_DISCOVER_SUCCESS = '@discover/LOAD_DISCOVER_SUCCESS',
  LOAD_DISCOVER_FAILURE = '@discover/LOAD_DISCOVER_FAILURE',
  LOAD_SEARCH_REQUEST = '@discover/LOAD_SEARCH_REQUEST',
}

/* State type */

export interface DiscoverState {
  readonly data: DiscoverResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export interface LoadDiscoverRequest {
  type: typeof DiscoverTypes.LOAD_DISCOVER_REQUEST
  payload: DiscoverPayload
}

export interface LoadDiscoverSuccess {
  type: typeof DiscoverTypes.LOAD_DISCOVER_SUCCESS
  payload: DiscoverResponse
}

export interface LoadDiscoverFailure {
  type: typeof DiscoverTypes.LOAD_DISCOVER_FAILURE
}

export interface LoadSearchRequest {
  type: typeof DiscoverTypes.LOAD_SEARCH_REQUEST
  payload: SearchPayload
}

export type DiscoverActionTypes =
  | LoadDiscoverRequest
  | LoadDiscoverSuccess
  | LoadDiscoverFailure
  | LoadSearchRequest
