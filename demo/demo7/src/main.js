
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

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
          alert(11)
        }}
      >
        {teststr}
      </div>
    )
  }
}

render(
  <Test teststr='hellow world' />,
  document.getElementById('root')
)
