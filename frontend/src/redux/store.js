import { createStore, combineReducers } from 'redux'
import selectedCell from './reducers/selectedCell'

const rootReducer = combineReducers({
  selectedCell
})

let store = createStore(rootReducer)

export default store
