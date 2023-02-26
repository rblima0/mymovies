import { Reducer } from 'redux'
import { GenreResponse } from 'entities/Genre/types'
import { GenreSeriesTypes, GenreSeriesState, GenreSeriesActionTypes } from './types'

const INITIAL_STATE: GenreSeriesState = {
  data: {} as GenreResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<GenreSeriesState, GenreSeriesActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GenreSeriesTypes.LOAD_GENRE_SERIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GenreSeriesTypes.LOAD_GENRE_SERIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case GenreSeriesTypes.LOAD_GENRE_SERIES_FAILURE:
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
