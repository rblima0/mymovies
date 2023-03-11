import { Reducer } from 'redux'
import { GenreResponse } from 'entities/genre/types'
import { GenreTVShowTypes, GenreTVShowState, GenreTVShowActionTypes } from './types'

const INITIAL_STATE: GenreTVShowState = {
  data: {} as GenreResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<GenreTVShowState, GenreTVShowActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GenreTVShowTypes.LOAD_GENRE_TV_SHOW_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GenreTVShowTypes.LOAD_GENRE_TV_SHOW_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case GenreTVShowTypes.LOAD_GENRE_TV_SHOW_FAILURE:
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
