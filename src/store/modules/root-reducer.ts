import { combineReducers } from 'redux'

import discoverMovie from './discover-movie/reducers'
import discoverTVShow from './discover-tv-show/reducers'
import genreMovie from './genre-movie/reducers'
import genreTVShow from './genre-tv-show/reducers'
import movie from './movie/reducers'
import tvShow from './tv-show/reducers'
import search from './search/reducers'
import trailer from './trailer/reducers'

export default combineReducers({
  discoverMovie,
  discoverTVShow,
  genreMovie,
  genreTVShow,
  movie,
  tvShow,
  search,
  trailer,
})
