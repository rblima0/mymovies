import { combineReducers } from 'redux'

import discover from './discover/reducers'
import genre from './genre/reducers'

export default combineReducers({
  discover,
  genre,
})
