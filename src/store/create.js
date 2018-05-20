import Thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutablejs'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './root-reducer'

export default function(initialState) {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(Thunk))
  )
}
