import store from '../redux/store'
import { setValue } from '../redux/actions/values'

const keydownHandler = (event) => {
  const intValue = parseInt(event.key)
  if(Number.isInteger(intValue) && 0 < intValue && intValue <= 9) {
    const { x, y, isAvailable } = store.getState().selectedCell
    if(isAvailable) {
      store.dispatch(setValue(x, y, intValue))
    }
  }
}

export default keydownHandler
