import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TestAdd from './components/test-add'
import * as Actions from './actions'

function mapStateToProps (state) {
  const test = state.get('test')
  return {
    teststr: test.get('teststr')
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TestAdd)
