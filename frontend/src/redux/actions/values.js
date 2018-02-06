export const SET_VALUE = 'SET_VALUE'
export const set_value = (x, y, value) => {
  return {
    type: SET_VALUE,
    x,
    y,
    value
  }
}
