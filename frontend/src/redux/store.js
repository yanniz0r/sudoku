import { createStore, combineReducers } from 'redux'
import selectedCell from './reducers/selectedCell'
import values from './reducers/values'
import baseGrid from './reducers/base-grid'

const rootReducer = combineReducers({
  selectedCell,
  values,
  baseGrid
})

let store = createStore(rootReducer)

export default store
