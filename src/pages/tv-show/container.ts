import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadTVShowRequest } from 'store/modules/tv-show/actions'

import { ApplicationState } from 'store/index'
import { TVShow } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  tvShow: state.tvShow
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadTVShowRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TVShow)
