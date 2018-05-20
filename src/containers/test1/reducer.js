import im from 'immutable'
import constants from './constants'

const initialState = im.fromJS({
  teststr: ''
})

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case constants.TEST_ANTION1:
      return state.set('teststr', payload)
  }
  return state
}
