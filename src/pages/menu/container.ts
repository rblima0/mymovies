import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadGenreMovieRequest } from 'store/modules/genre-movie/actions'
import { loadGenreTVShowRequest } from 'store/modules/genre-tv-show/actions'

import { ApplicationState } from 'store/index'
import { Menu } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  genreMovie: state.genreMovie,
  genreTVShow: state.genreTVShow,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadGenreMovieRequest, loadGenreTVShowRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
