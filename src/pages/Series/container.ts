import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loadSeriesRequest } from 'store/modules/series/actions'

import { ApplicationState } from 'store/index'
import { Series } from '.'

const mapStateToProps = (state: ApplicationState) => ({
  series: state.series,
  genre: state.genre,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadSeriesRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Series)
