import { Reducer } from 'redux'
import { MovieTypes, MovieState } from './types'

const INITIAL_STATE: MovieState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case MovieTypes.LOAD_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case MovieTypes.LOAD_MOVIE_SUCCCES:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      }
    case MovieTypes.LOAD_MOVIE_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
