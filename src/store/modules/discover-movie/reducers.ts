import { Reducer } from 'redux'
import { DiscoverMovieResponse } from 'entities/discover-movie/types'
import { DiscoverMovieTypes, DiscoverMovieState, DiscoverMovieActionTypes } from './types'

const INITIAL_STATE: DiscoverMovieState = {
  data: {} as DiscoverMovieResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<DiscoverMovieState, DiscoverMovieActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_FAILURE:
      return {
        ...state,
        data: {} as DiscoverMovieResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
