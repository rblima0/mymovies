import { Reducer } from 'redux'
import { TrailerResponse } from 'entities/Trailer/types'
import { TrailerTypes, TrailerState, TrailerActionTypes } from './types'

const INITIAL_STATE: TrailerState = {
  data: {} as TrailerResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<TrailerState, TrailerActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TrailerTypes.LOAD_TRAILER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case TrailerTypes.LOAD_TRAILER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case TrailerTypes.LOAD_TRAILER_FAILURE:
      return {
        ...state,
        data: {} as TrailerResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
