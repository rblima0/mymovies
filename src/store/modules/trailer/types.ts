import {
  TrailerResponse,
  TrailerPayload,
} from '../../../entities/Trailer/types'

/* Action types */

export enum TrailerTypes {
  LOAD_TRAILER_REQUEST = '@trailer/LOAD_TRAILER_REQUEST',
  LOAD_TRAILER_SUCCESS = '@trailer/LOAD_TRAILER_SUCCESS',
  LOAD_TRAILER_FAILURE = '@trailer/LOAD_TRAILER_FAILURE',
}

/* State type */

export interface TrailerState {
  readonly data: TrailerResponse
  readonly loading: boolean
  readonly error: boolean
}

/* Data types */

export interface LoadTrailerRequest {
  type: typeof TrailerTypes.LOAD_TRAILER_REQUEST
  payload: TrailerPayload
}

export interface LoadTrailerSuccess {
  type: typeof TrailerTypes.LOAD_TRAILER_SUCCESS
  payload: TrailerResponse
}

export interface LoadTrailerFailure {
  type: typeof TrailerTypes.LOAD_TRAILER_FAILURE
}

export type TrailerActionTypes =
  | LoadTrailerRequest
  | LoadTrailerSuccess
  | LoadTrailerFailure
