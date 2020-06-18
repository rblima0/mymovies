import { Reducer } from 'redux'
import { DiscoverTypes, DiscoverState, DiscoverData } from './types'

const INITIAL_STATE: DiscoverState = {
  data: {} as DiscoverData,
  error: false,
  loading: false,
}

const reducer: Reducer<DiscoverState> = (state = INITIAL_STATE, action) => {
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
        error: false,
        loading: false,
      }
    case DiscoverTypes.LOAD_DISCOVER_FAILURE:
      return {
        ...state,
        data: {} as DiscoverData,
        error: true,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
