import React, { Component } from 'react'
import './cell.less'

class Cell extends Component {

  render = () => {
    return <div className='cell-container'>
      <div className='cell'>
        <div className='cell-content'>
          1
        </div>
      </div>
    </div>
  }

}

export default Cell
