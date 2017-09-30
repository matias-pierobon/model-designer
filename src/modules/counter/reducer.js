import * as types from './constants'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  count: 0,
  isIncrementing: false,
  isDecrementing: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_REQUESTED:
      return state.set("isIncrementing", true)

    case types.INCREMENT:
      return state.merge({
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      })

    case types.DECREMENT_REQUESTED:
      return state.merge({
        isDecrementing: true
      })

    case types.DECREMENT:
      return state.merge({
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      })

    default:
      return state
  }
}
