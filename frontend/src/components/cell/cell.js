import React, { Component } from 'react'
import './cell.less'
import { connect } from 'react-redux'
import { setSelectedCell } from '../../redux/actions/selectedCell'

class Cell extends Component {

  select = () => {
    const { x, y, selectCell } = this.props
    selectCell(x, y)
  }

  isSelected = () => {
    const { x, y, selectedCell } = this.props
    return x == selectedCell.x && y == selectedCell.y
  }

  render = () => {
    const { x, y, selectedCell } = this.props
    return <div className='cell-container' onClick={this.select}>
      <div className={`cell ${this.isSelected() ? 'selected' : ''}`}>
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

const mapStateToProps = (state) => {
  const { selectedCell } = state
  return {
    selectedCell
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCell: (x, y) => {
      dispatch(setSelectedCell(x, y))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
