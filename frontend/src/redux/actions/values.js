export const SET_VALUE = 'SET_VALUE'
export const setValue = (x, y, value) => {
  return {
    type: SET_VALUE,
    x,
    y,
    value
  }
}

export const RESET_VALUES = 'RESET_VALUES'
export const resetValues = () => {
  return {
    type: RESET_VALUES
  }
}
