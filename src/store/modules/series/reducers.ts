import { Reducer } from 'redux'
import { SeriesResponse } from 'entities/Series/types'
import { SeriesTypes, SeriesState, SeriesActionTypes } from './types'

const INITIAL_STATE: SeriesState = {
  data: {} as SeriesResponse,
  loading: false,
  error: false,
}

const reducer: Reducer<SeriesState, SeriesActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SeriesTypes.LOAD_SERIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SeriesTypes.LOAD_SERIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case SeriesTypes.LOAD_SERIES_FAILURE:
      return {
        ...state,
        data: {} as SeriesResponse,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
