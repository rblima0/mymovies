import { combineReducers } from 'redux'

import discover from './discover/reducers'
import genre from './genre/reducers'
import genreSeries from './genreSeries/reducers'
import movie from './movie/reducers'
import search from './search/reducers'
import series from './series/reducers'
import trailer from './trailer/reducers'
import tvShow from './tvShow/reducers'

export default combineReducers({
  discover,
  genre,
  genreSeries,
  movie,
  search,
  series,
  trailer,
  tvShow,
})
