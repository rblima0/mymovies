import { Reducer } from 'redux'
import { DiscoverTVShowResponse } from 'entities/discover-tv-show/types'
import { DiscoverTVShowTypes, DiscoverTVShowState, DiscoverTVShowActionTypes } from './types'

const INITIAL_STATE: DiscoverTVShowState = {
  data: {} as DiscoverTVShowResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<DiscoverTVShowState, DiscoverTVShowActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case DiscoverTVShowTypes.LOAD_DISCOVER_TV_SHOW_FAILURE:
      return {
        ...state,
        data: {} as DiscoverTVShowResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
