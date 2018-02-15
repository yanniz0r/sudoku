import { SET_VALUE } from '../actions/values'
import { fill, grind } from '../../libraries/grid'

const defaultState = {}

const values = (state = defaultState, action) => {
  switch(action.type) {
    case SET_VALUE:
      let { x, y, value } = action
      return {
        ...state,
        [x]: {
          ...state[x],
          [y]: value
        }
      }
    default:
      return state
  }
}

export default values
