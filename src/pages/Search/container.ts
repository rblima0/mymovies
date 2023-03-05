import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadSearchRequest } from 'store/modules/search/actions'

import { ApplicationState } from 'store/index'
import { Search } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  genre: state.genre,
  genreSeries: state.genreSeries,
  search: state.search,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadSearchRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
