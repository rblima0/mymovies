import { Reducer } from 'redux'
import { GenreResponse } from 'entities/genre/types'
import { GenreMovieTypes, GenreMovieState, GenreMovieActionTypes } from './types'

const INITIAL_STATE: GenreMovieState = {
  data: {} as GenreResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<GenreMovieState, GenreMovieActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GenreMovieTypes.LOAD_GENRE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GenreMovieTypes.LOAD_GENRE_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case GenreMovieTypes.LOAD_GENRE_MOVIE_FAILURE:
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
