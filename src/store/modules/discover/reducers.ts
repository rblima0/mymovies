import { Reducer } from 'redux'
import { DiscoverResponse } from '../../../entities/Discover/types'
import { DiscoverTypes, DiscoverState, DiscoverActionTypes } from './types'

const INITIAL_STATE: DiscoverState = {
  data: {} as DiscoverResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<DiscoverState, DiscoverActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DiscoverTypes.LOAD_DISCOVER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DiscoverTypes.LOAD_DISCOVER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case DiscoverTypes.LOAD_DISCOVER_FAILURE:
      return {
        ...state,
        data: {} as DiscoverResponse,
        loading: false,
        error: true,
      }
    case DiscoverTypes.LOAD_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default reducer
