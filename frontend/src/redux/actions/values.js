export const SET_VALUE = 'SET_VALUE'
export const setValue = (x, y, value) => {
  return {
    type: SET_VALUE,
    x,
    y,
    value
  }
}
