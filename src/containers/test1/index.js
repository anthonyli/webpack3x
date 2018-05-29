import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Test1Add from './components/test1-add'
import * as Actions from './actions'

function mapStateToProps (state) {
  const test1 = state.get('test1')
  return {
    teststr: test1.get('teststr')
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Test1Add)
