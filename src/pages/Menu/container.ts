import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadGenreMoviesRequest } from 'store/modules/genre-movies/actions'
import { loadGenreSeriesRequest } from 'store/modules/genreSeries/actions'

import { ApplicationState } from 'store/index'
import { Menu } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  genreMovies: state.genreMovies,
  genreSeries: state.genreSeries
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadGenreMoviesRequest, loadGenreSeriesRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
