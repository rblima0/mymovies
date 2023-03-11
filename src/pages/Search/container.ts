import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadSearchRequest } from 'store/modules/search/actions'

import { ApplicationState } from 'store/index'
import { Search } from '.'

// TODO: concat genres here
const mapStateToProps = (state: ApplicationState) => ({
  genreMovies: state.genreMovies,
  genreSeries: state.genreSeries,
  search: state.search,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadSearchRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
