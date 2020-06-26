import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadDiscoverRequest } from '../../store/modules/discover/actions'

import { ApplicationState } from '../../store'
import { Discover } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  discover: state.discover,
  genre: state.genre,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadDiscoverRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Discover)
