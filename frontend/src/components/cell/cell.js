import React, { Component } from 'react'
import './cell.less'

class Cell extends Component {

  render = () => {
    const { x, y } = this.props
    return <div className='cell-container'>
      <div className='cell'>
        <div className='cell-content'>
          Value
        </div>
        <div className='cell-coords'>
          {`${x}/${y}`}
        </div>
      </div>
    </div>
  }

}

export default Cell
