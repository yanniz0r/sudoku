import { createStore, combineReducers } from 'redux'
import selectedCell from './reducers/selectedCell'
import values from './reducers/values'

const rootReducer = combineReducers({
  selectedCell,
  values
})

let store = createStore(rootReducer)

export default store
