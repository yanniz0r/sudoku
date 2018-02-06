import React, { Component } from 'react'
import './section.less'
import Cell from '../cell/cell'

class Section extends Component {

  renderRow = (y) => {
    const cells = []
    for(let x = 0; x < 3; x++) {
      cells.push(<Cell x={x} y={y}/>)
    }
    return <div className='cell-row'>
      { cells }
    </div>
  }

  renderRows = () => {
    const rows = []
    for(let y = 0; y < 3; y++) {
      rows.push(this.renderRow(y))
    }
    return rows
  }

  render = () => {
    return <div className='section-container'>
      { this.renderRows() }
    </div>
  }

}

export default Section
