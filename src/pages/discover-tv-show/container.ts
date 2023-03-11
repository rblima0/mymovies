import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadDiscoverTVShowRequest } from 'store/modules/discover-tv-show/actions'

import { ApplicationState } from 'store/index'
import { DiscoverTVShow } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  discoverTVShow: state.discoverTVShow,
  genreTVShow: state.genreTVShow,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadDiscoverTVShowRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverTVShow)
