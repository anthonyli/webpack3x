import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import lazyloader from './lazyloader'

export default class CoreRouter extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.location !== this.props.location
  }

  render() {
    return (
      <Switch>
        <Route component={lazyloader('test')} path="/test" />
        <Route component={lazyloader('test1')} path="/test1" />
        <Redirect to="/test" />
      </Switch>
    )
  }
}
