import { combineReducers } from 'redux'

import discover from './discover/reducers'
import genre from './genre/reducers'
import movie from './movie/reducers'
import trailer from './trailer/reducers'
import search from './search/reducers'

export default combineReducers({
  discover,
  genre,
  movie,
  trailer,
  search,
})
