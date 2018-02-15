import { SET_BASE_GRID } from '../actions/base-grid'
import { fill, grind } from '../../libraries/grid'

const defaultState = grind(fill())

const baseGrid = (state = defaultState, action) => {
  switch(action.type) {
    case SET_BASE_GRID:
      return action.baseGrid
    default:
      return state
  }
}

export default baseGrid
