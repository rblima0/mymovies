import { Reducer } from 'redux'
import { TVShowResponse } from 'entities/TVShow/types'
import { TVShowTypes, TVShowState, TVShowActionTypes } from './types'

const INITIAL_STATE: TVShowState = {
  data: {} as TVShowResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<TVShowState, TVShowActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TVShowTypes.LOAD_TVSHOW_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case TVShowTypes.LOAD_TVSHOW_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case TVShowTypes.LOAD_TVSHOW_FAILURE:
      return {
        ...state,
        data: {} as TVShowResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
