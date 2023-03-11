import { Reducer } from 'redux'
import { SearchResponse } from 'entities/search/types'
import { SearchTypes, SearchState, SearchActionTypes } from './types'

const INITIAL_STATE: SearchState = {
  data: {} as SearchResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<SearchState, SearchActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SearchTypes.LOAD_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SearchTypes.LOAD_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case SearchTypes.LOAD_SEARCH_FAILURE:
      return {
        ...state,
        data: {} as SearchResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
