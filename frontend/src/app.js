import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import GameArea from './components/game-area/game-area'

ReactDOM.render(
  <Provider store={store}>
    <GameArea/>
  </Provider>,
  document.getElementById('app')
)
