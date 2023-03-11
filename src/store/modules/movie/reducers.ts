import { Reducer } from 'redux'
import { MovieResponse } from 'entities/movie/types'
import { MovieTypes, MovieState, MovieActionTypes } from './types'

const INITIAL_STATE: MovieState = {
  data: {} as MovieResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<MovieState, MovieActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case MovieTypes.LOAD_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case MovieTypes.LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case MovieTypes.LOAD_MOVIE_FAILURE:
      return {
        ...state,
        data: {} as MovieResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
