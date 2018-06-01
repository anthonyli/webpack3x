import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
  static propTypes = {
    teststr: PropTypes.string
  }
  componentWillMount () { }
  componentWillReceiveProps (nextProps) { }
  render () {
    const { teststr } = this.props
    return (
      <div
        className='test'
        onClick={() => {
        }}
      >
        {teststr}
      </div>
    )
  }
}
export default Test
