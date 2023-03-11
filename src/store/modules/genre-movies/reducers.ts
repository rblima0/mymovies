import { Reducer } from 'redux'
import { GenreResponse } from 'entities/Genre/types'
import { GenreMoviesTypes, GenreMoviesState, GenreMoviesActionTypes } from './types'

const INITIAL_STATE: GenreMoviesState = {
  data: {} as GenreResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<GenreMoviesState, GenreMoviesActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GenreMoviesTypes.LOAD_GENRE_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GenreMoviesTypes.LOAD_GENRE_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case GenreMoviesTypes.LOAD_GENRE_MOVIES_FAILURE:
      return {
        ...state,
        data: {} as GenreResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
