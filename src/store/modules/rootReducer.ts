import { combineReducers } from 'redux'

import discover from './discover/reducers'
import genre from './genre/reducers'
import movie from './movie/reducers'

export default combineReducers({
  discover,
  genre,
  movie,
})
