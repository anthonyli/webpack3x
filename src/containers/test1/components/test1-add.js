import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

class AddBank extends Component {
  static propTypes = {
    teststr: PropTypes.string,
    getBankCardList: PropTypes.func
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {}
  render() {
    const { teststr, getBankCardList } = this.props
    return (
      <div className="test" onClick={getBankCardList}>
        我就做个测试{teststr}
      </div>
    )
  }
}
export default AddBank
