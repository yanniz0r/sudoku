export const SET_SELECTED_CELL = 'SET_SELECTED_CELL'
export const setSelectedCell = (x, y) => {
  console.log("SET SELECTED CELL")
  return {
    type: SET_SELECTED_CELL,
    x,
    y
  }
}
