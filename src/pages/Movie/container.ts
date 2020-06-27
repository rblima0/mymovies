import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadMovieRequest } from '../../store/modules/movie/actions'

import { ApplicationState } from '../../store'
import { Movie } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  movie: state.movie,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadMovieRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
