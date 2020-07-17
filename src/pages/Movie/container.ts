import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadMovieRequest } from '../../store/modules/movie/actions'
import { loadTrailerRequest } from '../../store/modules/trailer/actions'

import { ApplicationState } from '../../store'
import { Movie } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  movie: state.movie,
  trailer: state.trailer,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadMovieRequest, loadTrailerRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
