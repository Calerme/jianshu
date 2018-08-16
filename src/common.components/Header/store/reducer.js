import { fromJS } from 'immutable'
import {
    CHANGE_FOCUSED_TRUE,
    CHANGE_FOCUSED_FALSE
} from './actionTypes'

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FOCUSED_TRUE:
    case CHANGE_FOCUSED_FALSE:
      return state.set('focused', action.value)
    default:
      return state
  }
}