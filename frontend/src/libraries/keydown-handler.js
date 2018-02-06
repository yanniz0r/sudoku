import store from '../redux/store'
import { setValue } from '../redux/actions/values'

const keydownHandler = (event) => {
  const intValue = parseInt(event.key)
  if(intValue != NaN && 0 < intValue <= 9) {
    const { x, y } = store.getState().selectedCell
    if(x && y) {
      store.dispatch(setValue(x, y, intValue))
    }
  }
}

export default keydownHandler
