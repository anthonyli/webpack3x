import React, { Component } from 'react'
import history from 'utils/history'
import PropTypes from 'prop-types'
import './index.less'

class Test extends Component {
  static propTypes = {
    teststr: PropTypes.string
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {}
  render() {
    const { teststr } = this.props
    return (
      <div
        className="test"
        onClick={() => {
          history.push(`/test1`)
        }}
      >
        {teststr}
      </div>
    )
  }
}
export default Test
