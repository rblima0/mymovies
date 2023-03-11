import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadDiscoverMovieRequest } from 'store/modules/discover-movie/actions'

import { ApplicationState } from 'store/index'
import { DiscoverMovie } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  discoverMovie: state.discoverMovie,
  genreMovie: state.genreMovie,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadDiscoverMovieRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverMovie)
