import {
  SET_SELECTED_CELL
} from '../actions/selectedCell'

const defaultState = {
  x: null,
  y: null
}

const selectedCell = (state = defaultState, action) => {
  switch(action.type) {
    case SET_SELECTED_CELL:
      let { x, y } = action
      return {
        x,
        y
      }
    default:
      return state
  }
}

export default selectedCell
