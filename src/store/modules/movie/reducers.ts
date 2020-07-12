import { Reducer } from 'redux'
import {
  MovieTypes,
  MovieState,
  Movie,
  MovieActionTypes,
  Trailer,
} from './types'

const INITIAL_STATE: MovieState = {
  data: {} as Movie,
  loading: false,
  error: false,
  trailer: {} as Trailer,
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
        data: {} as Movie,
        loading: false,
        error: true,
      }
    case MovieTypes.LOAD_TRAILER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case MovieTypes.LOAD_TRAILER_SUCCESS:
      return {
        ...state,
        loading: false,
        trailer: action.payload,
      }
    case MovieTypes.LOAD_TRAILER_FAILURE:
      return {
        ...state,
        loading: false,
        trailer: {} as Trailer,
      }
    default:
      return state
  }
}

export default reducer
