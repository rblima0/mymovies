import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadGenreRequest } from '../../store/modules/genre/actions'

import { ApplicationState } from '../../store'
import { Menu } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  genre: state.genre,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadGenreRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
