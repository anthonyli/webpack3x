import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.less'

export default class main extends Component {
  static propTypes = {
    loanChannels: PropTypes.object,
    loan: PropTypes.string,
    loanTerm: PropTypes.string,
    postTime: PropTypes.string
  }

  componentDidMount () {
    this.showDilog()
  }

  render () {
    const { loanChannels, loan, loanTerm, postTime } = this.props
    return (
      <div className='loan-info-page'>
        {loanChannels}
        {loan}
        {loanTerm}
        {postTime}
      </div>
    )
  }
}
