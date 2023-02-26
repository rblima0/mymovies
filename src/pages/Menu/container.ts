import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadGenreRequest } from 'store/modules/genre/actions'
import { loadGenreSeriesRequest } from 'store/modules/genreSeries/actions'

import { ApplicationState } from 'store/index'
import { Menu } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  genre: state.genre,
  genreSeries: state.genreSeries
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadGenreRequest, loadGenreSeriesRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
