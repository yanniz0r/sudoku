import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import GameArea from './components/game-area/game-area'
import keydownHandler from './libraries/keydown-handler'

document.addEventListener('keydown', keydownHandler)

ReactDOM.render(
  <Provider store={store}>
    <GameArea/>
  </Provider>,
  document.getElementById('app')
)
