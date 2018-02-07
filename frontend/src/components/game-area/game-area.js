import React, { Component } from 'react'
import Section from '../section/section'
import './game-area.less'
import Sudoku from '../../util/sudoku'

class GameArea extends Component {

  componentWillMount = () => {
    Sudoku.fill()
  }

  renderRow = (y) => {
    const sections = []
    for(let x = 0; x < 3; x++) {
      sections.push(<Section key={x} x={x} y={y}/>)
    }
    return <div className='section-row' key={y}>{sections}</div>
  }

  renderRows = () => {
    const rows = []
    for(let y = 0; y < 3; y++) {
      rows.push(this.renderRow(y))
    }
    return rows
  }

  render = () => {
    return <div className='game-area'>
      { this.renderRows() }
    </div>
  }

}

export default GameArea
