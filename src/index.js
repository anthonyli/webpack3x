import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import createStore from './store/create'
import Home from './containers/home'
import history from './utils/history'
import './index.less'
import './common'
import im from 'immutable'

const store = createStore(im.fromJS(window.__INITIAL_STATE__))

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
