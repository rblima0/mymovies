import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  loadMovieRequest,
  loadTrailerRequest,
} from '../../store/modules/movie/actions'

import { ApplicationState } from '../../store'
import { Movie } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  movie: state.movie,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadMovieRequest, loadTrailerRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
