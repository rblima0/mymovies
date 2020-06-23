import { Reducer } from 'redux'
import { GenreTypes, GenreState, GenreData, GenreActionTypes } from './types'

const INITIAL_STATE: GenreState = {
  data: {} as GenreData,
  loading: false,
  error: false,
}

const reducer: Reducer<GenreState, GenreActionTypes> = (
  state = INITIAL_STATE,
  action
) => {
  console.log(action)
  switch (action.type) {
    case GenreTypes.LOAD_GENRE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GenreTypes.LOAD_GENRE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      }
    case GenreTypes.LOAD_GENRE_FAILURE:
      return {
        ...state,
        data: {} as GenreData,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default reducer
