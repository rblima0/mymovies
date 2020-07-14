import { Reducer } from 'redux'

import { MovieResponse } from '../../../entities/Movie/types'
import { TrailerResponse } from '../../../entities/Trailer/types'

import { MovieTypes, MovieState, MovieActionTypes } from './types'

const INITIAL_STATE: MovieState = {
  data: {} as MovieResponse,
  loading: false,
  error: false,
  trailer: {} as TrailerResponse,
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
        trailer: {} as TrailerResponse,
      }
    default:
      return state
  }
}

export default reducer
