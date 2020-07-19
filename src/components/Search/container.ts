import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadSearchRequest } from '../../store/modules/discover/actions'
import { Search } from '.'

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadSearchRequest }, dispatch)

export default connect(null, mapDispatchToProps)(Search)
