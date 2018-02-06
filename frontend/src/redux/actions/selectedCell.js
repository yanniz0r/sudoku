export const SET_SELECTED_CELL = 'SET_SELECTED_CELL'
export const setSelectedCell = (x, y) => {
  return {
    type: SET_SELECTED_CELL,
    x,
    y
  }
}
